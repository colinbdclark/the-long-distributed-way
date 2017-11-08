"use strict";

fluid.defaults("colin.theLongWay", {
    gradeNames: [
        "aconite.compositor",
        "aconite.compositor.autoPlay"
    ],

    components: {
        videoLayer: {
            type: "colin.theLongWay.videoLayer"
        },

        glRenderer: {
            type: "colin.theLongWay.glRenderer"
        }
    }
});

fluid.defaults("colin.theLongWay.videoLayer", {
    gradeNames: "aconite.compositableVideo.layer",

    url: "videos/moitessier-la-longue-route.mp4",

    model: {
        loop: true
    }
});

fluid.defaults("colin.theLongWay.glRenderer", {
    gradeNames: "aconite.glRenderer.singleLayer",

    shaders: {
        fragment: "src/shaders/the-long-distributed-way.frag",
        vertex: "node_modules/aconite/src/shaders/stageVertexShader.vert"
    },

    uniforms: {
        videoSize: {
            type: "2f",
            values: [
                384,
                288
            ]
        }
    }
});
