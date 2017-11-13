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
        inTime: "{that}.options.clips.albatrossesInCalm.inTime",
        outTime: "{that}.options.clips.albatrossesInCalm.outTime"
    },

    clips: {
        "drinkingCoffee": {
            inTime: 4 * 60 + 27,
            outTime: 5 * 60
        },

        "sailsFromTheMast": {
            inTime: 5 * 60 + 36,
            outTime: 6 * 60 + 9
        },

        "firstSunset": {
            inTime: 6 * 60 + 18,
            outTime: 6 * 60 + 29
        },

        "lesOiseauxDeTerres": {
            inTime: 9 * 60 + 22,
            outTime: 9 * 60 + 52
        },

        "dolphinSquares": {
            inTime: 10 * 60 + 32,
            outTime: 10 * 60 + 45
        },

        "dolphinSquares2": {
            inTime: 11 * 60 + 7,
            outTime: 11 * 60 + 44
        },

        "sailsFromTheMast2": {
            inTime: 17 * 60 + 8,
            outTime: 17 * 60 + 59
        },

        "albatrossesInCalm": {
            inTime: 18 * 60 + 20.2,
            outTime: 19 * 60
        },

        "cheeseEatingBirdsWithLotsOfSquares": {
            inTime: 19 * 60 + 45,
            outTime: 19 * 50 + 56
        },

        "albatrossesInSwells": {
            inTime: 19 * 60 + 57,
            outTime: 20 * 60 + 13
        },

        "heavyWavesSouthernOcean": {
            inTime: 20 * 60 + 24,
            outTime: 23 * 60 + 4
        },

        "capeHorn": {
            inTime: 23 * 60 + 16,
            outTime: 24 * 60 + 42
        },

        "sepiaStormFootage": {
            inTime: 24 * 60 + 43,
            outTime: 26 * 60 + 23
        },

        "sunsetFootage": {
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
