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

        modulationLayer: {
            type: "colin.theLongWay.modulationLayer"
        },

        glRenderer: {
            type: "colin.theLongWay.glRenderer"
        }
    }
});

fluid.defaults("colin.theLongWay.videoLayer", {
    gradeNames: "aconite.compositableVideo",

    url: "videos/moitessier-la-longue-route.mp4",

    model: {
        loop: true
    }
});

fluid.defaults("colin.theLongWay.modulationLayer", {
    gradeNames: "colin.theLongWay.videoLayer",

    bindToTextureUnit: "TEXTURE1",

    model: {
        inTime: 14,
        outTime: 27
    },

    clips: {
        "drinking coffee": {
            inTime: 4 * 60 + 27,
            outTime: 5 * 60
        },

        "sails from the mast": {
            inTime: 5 * 60 + 36,
            outTime: 6 * 60 + 9
        },

        "first sunset": {
            inTime: 6 * 60 + 18,
            outTime: 6 * 60 + 29
        },

        "les oiseaux de terres": {
            inTime: 9 * 60 + 22,
            outTime: 9 * 60 + 52
        },

        "dolphin squares": {
            inTime: 10 * 60 + 32,
            outTime: 10 * 60 + 45
        },

        "dolphin squares 2": {
            inTime: 11 * 60 + 7,
            outTime: 11 * 60 + 44
        },

        "sails from the mast 2": {
            inTime: 17 * 60 + 8,
            outTime: 17 * 60 + 59
        },

        "albatrosses in calm": {
            inTime: 18 * 60 + 20,
            outTime: 19 * 60
        },

        "cheese-eating birds with lots of squares": {
            inTime: 19 * 60 + 45,
            outTime: 19 * 50 + 56
        },

        "albatrosses in swells": {
            inTime: 19 * 60 + 57,
            outTime: 20 * 60 + 13
        },

        "heavy waves southern ocean": {
            inTime: 20 * 60 + 24,
            outTime: 23 * 60 + 4
        },

        "cape horn": {
            inTime: 23 * 60 + 16,
            outTime: 24 * 60 + 42
        },

        "sepia storm footage": {
            inTime: 24 * 60 + 43,
            outTime: 26 * 60 + 23
        },

        "sunset footage": {
            inTime: 27 * 60 + 21,
            outTime: 27 * 60 + 55
        },

        "rainbow": {
            inTime: 28 * 60 + 25,
            outTime: 28 * 60 + 47
        },

        "square waves": {
            inTime: 29 * 60,
            outTime: 29 * 60 + 14
        },

        "albatross again": {
            inTime: 29 * 60 + 15,
            outTime: 29 * 60 + 36
        },

        "flag mask": {
            inTime: 30 * 60 + 33,
            outTime: 30 * 60 + 42
        }
    }
});

fluid.defaults("colin.theLongWay.glRenderer", {
    gradeNames: "aconite.glRenderer",

    shaders: {
        fragment: "src/shaders/the-long-distributed-way.frag",
        vertex: "node_modules/aconite/src/shaders/stageVertexShader.vert"
    },

    uniforms: {
        videoLayerSampler: {
            type: "1i",
            values: 0
        },

        modulationLayerSampler: {
            type: "1i",
            values: 1
        },

        videoSize: {
            type: "2f",
            values: [
                384,
                288
            ]
        }
    }
});
