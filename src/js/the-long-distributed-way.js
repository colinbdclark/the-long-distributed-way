"use strict";

fluid.defaults("colin.theLongWay", {
    gradeNames: [
        "aconite.compositor",
        "aconite.compositor.autoPlay"
    ],

    fps: 60,

    uniformModelMap: {
        layerMix: "layerMix",
        lumThreshold: "lumThreshold",
        gain: "gain"
    },

    model: {
        layerMix: "{glRenderer}.options.uniforms.layerMix.values",
        lumThreshold: "{glRenderer}.options.uniforms.lumThreshold.values",
        gain: "{glRenderer}.options.uniforms.gain.values"
    },

    components: {
        videoLayer: {
            type: "colin.theLongWay.videoLayer"
        },

        videoLayerSpeedSynth: {
            type: "colin.theLongWay.videoLayerSpeedSynth"
        },

        modulationLayer: {
            type: "colin.theLongWay.modulationLayer"
        },

        modulationLayerSpeedSynth: {
            type: "colin.theLongWay.modulationLayerSpeedSynth"
        },

        layerMixSynth: {
            type: "colin.theLongWay.layerMixSynth"
        },

        lumThresholdSynth: {
            type: "colin.theLongWay.lumThresholdSynth"
        },

        gainSynth: {
            type: "colin.theLongWay.gainSynth"
        },

        glRenderer: {
            type: "colin.theLongWay.glRenderer"
        },

        enviro: {
            type: "flock.silentEnviro"
        }
    }
});

fluid.defaults("colin.theLongWay.videoLayer", {
    gradeNames: "aconite.compositableVideo",

    model: {
        url: "videos/moitessier-la-longue-route.mp4",
        loop: true
    }
});

fluid.defaults("colin.theLongWay.modulationLayer", {
    gradeNames: "aconite.clipSequencer.static",


    components: {
        layer: {
            type: "colin.theLongWay.videoLayer",
            options: {
                bindToTextureUnit: "TEXTURE1"
            }
        }
    },

    model: {
        loop: true,

        // TODO: Destroy redundancy by refactoring aconite.clipSequencer
        clipSequence: [
            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "albatrossesInCalm",
                inTime: 18 * 60 + 20.2,
                outTime: 19 * 60
            },
            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "albatrossesInCalm",
                inTime: 18 * 60 + 20.2,
                outTime: 19 * 60
            },
            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "albatrossesInCalm",
                inTime: 18 * 60 + 20.2,
                outTime: 19 * 60
            },
            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "drinkingCoffee",
                inTime: 4 * 60 + 27,
                outTime: 5 * 60
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "sailsFromTheMast",
                inTime: 5 * 60 + 36,
                outTime: 6 * 60 + 9
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "firstSunset",
                inTime: 6 * 60 + 18,
                outTime: 6 * 60 + 29
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "lesOiseauxDeTerres",
                inTime: 9 * 60 + 22,
                outTime: 9 * 60 + 52
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "dolphinSquares",
                inTime: 10 * 60 + 32,
                outTime: 10 * 60 + 45
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "dolphinSquares2",
                inTime: 11 * 60 + 7,
                outTime: 11 * 60 + 44
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "sailsFromTheMast2",
                inTime: 17 * 60 + 8,
                outTime: 17 * 60 + 59
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "albatrossesInCalm",
                inTime: 18 * 60 + 20.2,
                outTime: 19 * 60
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "cheeseEatingBirdsWithLotsOfSquares",
                inTime: 19 * 60 + 45,
                outTime: 19 * 50 + 56
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "albatrossesInSwells",
                inTime: 19 * 60 + 57,
                outTime: 20 * 60 + 13
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "heavyWavesSouthernOcean",
                inTime: 20 * 60 + 24,
                outTime: 23 * 60 + 4
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "capeHorn",
                inTime: 23 * 60 + 16,
                outTime: 24 * 60 + 42
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "sepiaStormFootage",
                inTime: 24 * 60 + 43,
                outTime: 26 * 60 + 23
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "sunsetFootage",
                inTime: 27 * 60 + 21,
                outTime: 27 * 60 + 55
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "rainbow",
                inTime: 28 * 60 + 25,
                outTime: 28 * 60 + 47
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "square waves",
                inTime: 29 * 60,
                outTime: 29 * 60 + 14
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "albatross again",
                inTime: 29 * 60 + 15,
                outTime: 29 * 60 + 36
            },

            {
                loop: true,
                url: "videos/moitessier-la-longue-route.mp4",

                name: "flag mask",
                inTime: 30 * 60 + 33,
                outTime: 30 * 60 + 42
            }
        ]
    },

    listeners: {
        onNextClip: {
            "this": "console",
            method: "log",
            args: ["{arguments}.0.name"]
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
        },

        layerMix: {
            type: "1f",
            values: 0.0
        },

        lumThreshold: {
            type: "1f",
            values: 0.9
        },

        gain: {
            type: "1f",
            values: 5.0
        }
    }
});

// TODO: This can be generalized into Aconite.
fluid.defaults("colin.theLongWay.speedModulatorSynth", {
    gradeNames: "flock.synth.frameRate",

    fps: "{theLongWay}.options.fps",

    components: {
        enviro: "{theLongWay}.enviro",

        layer: {
            type: "fluid.notImplemented"
        }
    },

    events: {
        onTick: "{clock}.events.onTick"
    },

    listeners: {
        onTick: {
            funcName: "colin.theLongWay.speedModulatorSynth.modulate",
            args: ["{that}"]
        }
    }
});

colin.theLongWay.speedModulatorSynth.modulate = function (that) {
    var rate = that.value();
    that.layer.source.element.playbackRate = rate;
};


fluid.defaults("colin.theLongWay.videoLayerSpeedSynth", {
    gradeNames: "colin.theLongWay.speedModulatorSynth",

    components: {
        layer: "{theLongWay}.videoLayer"
    },

    synthDef: {
        ugen: "flock.ugen.lfSaw",
        freq: 1/80,
        mul: 0.2,
        add: 0.8
    }
});

fluid.defaults("colin.theLongWay.modulationLayerSpeedSynth", {
    gradeNames: "colin.theLongWay.speedModulatorSynth",

    components: {
        layer: "{theLongWay}.modulationLayer.layer"
    },

    synthDef: {
        ugen: "flock.ugen.lfSaw",
        freq: 1/70,
        mul: 0.2,
        add: 0.8
    }
});

// TODO: Fix all of Flocking, including the fact that
// it has components that have "model" properties,
// yet which aren't actually fluid.modelComponents.
// Also the incompatibilites between
// flock.modelSynth and flock.synth.value.
fluid.defaults("colin.theLongWay.modelUpdatingSynth", {
    gradeNames: "flock.synth.frameRate",

    targetModelPath: "value",

    components: {
        target: {
            type: "fluid.notImplemented"
        }
    },

    events: {
        onTick: "{clock}.events.onTick"
    },

    listeners: {
        onTick: "colin.theLongWay.modelUpdatingSynth.updateValue({that})"
    }
});

colin.theLongWay.modelUpdatingSynth.updateValue = function (that) {
    var val = that.value();
    that.target.applier.change(that.options.targetModelPath, val);
};

fluid.defaults("colin.theLongWay.layerMixSynth", {
    gradeNames: "colin.theLongWay.modelUpdatingSynth",

    targetModelPath: "layerMix",

    components: {
        target: "{theLongWay}"
    },

    synthDef: {
        ugen: "flock.ugen.triOsc",
        phase: Math.PI,
        freq: 1/15,
        mul: 0.5,
        add: 0.5
    }
});

fluid.defaults("colin.theLongWay.lumThresholdSynth", {
    gradeNames: "colin.theLongWay.modelUpdatingSynth",

    targetModelPath: "lumThreshold",

    components: {
        target: "{theLongWay}"
    },

    synthDef: {
        ugen: "flock.ugen.triOsc",
        freq: 1/145,
        mul: 0.10,
        add: 0.90
    }
});


fluid.defaults("colin.theLongWay.gainSynth", {
    gradeNames: "colin.theLongWay.modelUpdatingSynth",

    targetModelPath: "gain",

    components: {
        target: "{theLongWay}"
    },

    synthDef: {
        ugen: "flock.ugen.sinOsc",
        freq: 1/75,
        mul: 1,
        add: 5
    }
});
