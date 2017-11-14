precision highp float;

uniform sampler2D videoLayerSampler;
uniform sampler2D modulationLayerSampler;
uniform vec2 textureSize;
uniform vec2 videoSize;
uniform float layerMix;

// From https://github.com/AnalyticalGraphicsInc/cesium/blob/master/Source/Shaders/Builtin/Functions/luminance.glsl
float luminance(vec3 rgb) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    return dot(rgb, W);
}

vec4 black() {
    return vec4(0.0, 0.0, 0.0, 1.0);
}

vec2 scaleCoordinatesToVideo(void) {
    return gl_FragCoord.xy * (videoSize / textureSize);
}

vec4 sampleFromLayer(sampler2D layerSampler) {
    vec2 scaledCoords = scaleCoordinatesToVideo();
    return texture2D(layerSampler, scaledCoords.xy / videoSize.xy);
}

vec4 blockySmoothed(vec4 sampled) {
    // Crazy, arbitrary values.
    vec3 smoothed = smoothstep(sampled.rgb, black().rgb, vec3(0.9, 0.9, 0.9));

    // Then AMPLIFY!
    return vec4(smoothed * vec3(20.0), 1.0);
}

vec4 geometricallySpacedSmoothedByLuminance(vec4 sampled, float lum, vec2 scaledCoordsRemainder) {
    // Why these numbers? What am I doing?
    if (scaledCoordsRemainder.x > 0.07 || scaledCoordsRemainder.y > 0.07) {
        // We're "in between" pixels in the video and
        // should just render a black fragment.
        return black();
    }

    vec3 allLum = vec3(lum);

    // Crazy smoothstepping by luminance value.
    vec3 smoothed = smoothstep(sampled.rgb, black().rgb, allLum);

    return vec4(smoothed, 1.0);
}

vec4 geometricallySpacedBright(vec4 sampled, float lum, vec2 scaledCoordsRemainder) {
    // TODO: Cut and pasted from above.
    if (scaledCoordsRemainder.x > 0.07 || scaledCoordsRemainder.y > 0.07) {
        return black();
    }

    return lum < 0.9 ? black() : sampled;
}

vec4 deflectedBright(vec4 sampled, float lum, vec2 scaledCoordsRemainder) {
    // TODO: Cut and pasted from above.
    if (scaledCoordsRemainder.x > 0.07 || scaledCoordsRemainder.y > 0.07) {
        vec4 modulationSampled = sampleFromLayer(modulationLayerSampler);
        if (luminance(modulationSampled.rgb) > 0.5) {
            return black();
        }
    }

    // Modulate this luminance check between around 0.7 and 1.0.
    return mix(lum < 0.9 ? black() : sampled, blockySmoothed(sampled), 0.5);
}

void main(void) {
    vec4 sampled = sampleFromLayer(videoLayerSampler);
    float lum = luminance(sampled.rgb);

    vec2 scaledCoords = gl_FragCoord.xy * (videoSize / textureSize);
    vec2 scaledCoordsRemainder = fract(scaledCoords);

    vec4 bottom = deflectedBright(sampled, lum, scaledCoordsRemainder);
    vec4 top = blockySmoothed(sampled);

    // TODO: Modulate this mix for greater psychedelia.
    vec3 mixed = mix(bottom.rgb, top.rgb, 0.0);

    gl_FragColor = vec4(mixed, 1.0);
    // gl_FragColor = sampleFromLayer(modulationLayerSampler);
}
