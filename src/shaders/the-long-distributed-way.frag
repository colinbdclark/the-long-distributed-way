precision highp float;

uniform sampler2D layerSampler;
uniform sampler2D modulationLayerSampler;
uniform vec2 textureSize;
uniform vec2 videoSize;

// From https://github.com/AnalyticalGraphicsInc/cesium/blob/master/Source/Shaders/Builtin/Functions/luminance.glsl
float luminance(vec3 rgb) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    return dot(rgb, W);
}

vec4 black() {
    return vec4(0.0, 0.0, 0.0, 1.0);
}

vec4 blockyLum(void) {
    vec2 scaledCoords = gl_FragCoord.xy * (videoSize / textureSize);
    vec2 vidCoords = scaledCoords.xy / videoSize.xy;
    vec4 sampled = texture2D(layerSampler, scaledCoords.xy / videoSize.xy);
    float lum = luminance(sampled.rgb);
    vec3 smoothed = smoothstep(sampled.rgb, black().rgb, vec3(0.9, 0.9, 0.9));

    return vec4(smoothed * 10.0, 1.0);
}

vec4 smoothLum(void) {
    vec2 scaledCoords = gl_FragCoord.xy * (videoSize / textureSize);
    vec2 remainder = fract(scaledCoords);

    // TODO: Why these numbers? What am I doing?
    if (remainder.x > 0.07 || remainder.y > 0.07) {
        // We're "in between" pixels in the video and
        // should just render a black fragment.
        return black();
    }

    vec2 vidCoords = scaledCoords.xy / videoSize.xy;
    vec4 sampled = texture2D(layerSampler, scaledCoords.xy / videoSize.xy);
    float lum = luminance(sampled.rgb);
    vec3 smoothed = smoothstep(sampled.rgb, black().rgb, vec3(lum, lum, lum));

    return vec4(smoothed, 1.0);
}

vec4 spacedLum(void) {
    vec2 scaledCoords = gl_FragCoord.xy * (videoSize / textureSize);
    vec2 remainder = fract(scaledCoords);

    // TODO: Why these numbers? What am I doing?
    if (remainder.x > 0.07 || remainder.y > 0.07) {
        // We're "in between" pixels in the video and
        // should just render a black fragment.
        return black();
    }

    vec2 vidCoords = scaledCoords.xy / videoSize.xy;
    vec4 sampled = texture2D(layerSampler, scaledCoords.xy / videoSize.xy);
    float lum = luminance(sampled.rgb);

    return lum < 0.9 ? black() : sampled;
}

void main(void) {
    vec2 scaledCoords = gl_FragCoord.xy * (videoSize / textureSize);

    gl_FragColor = /*spacedLum() +  */blockyLum()/* + (texture2D(loopLayerSampler, scaledCoords.xy / videoSize.xy) / 5.0)*/;
}
