precision highp float;

uniform sampler2D topSampler;
uniform vec2 textureSize;
uniform vec2 videoSize;

void main(void) {
    if (gl_FragCoord.x > videoSize.x || gl_FragCoord.y > videoSize.y) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    } else {
        vec2 coords = vec2(gl_FragCoord.x / videoSize.x, gl_FragCoord.y / videoSize.y);
        vec4 topFrag = texture2D(topSampler, coords);

        gl_FragColor = topFrag;
    }
}
