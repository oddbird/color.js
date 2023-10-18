const spaces = {
    lab: {
        // constructor: lab,
        name: "lab",
        isLegacy: false,
        isPolar: false,
        pink: [78.27047872644108, 35.20288139978972, 1.0168442562642044],
        blue: [38.95792456574883, -15.169549415088856, -17.792484605053115],
        channels: ["lightness", "a", "b"],
        ranges: [
            [0, 100],
            [-125, -125],
            [-125, -125],
        ],
    },
    oklab: {
        // constructor: oklab,
        name: "oklab",
        isLegacy: false,
        isPolar: false,
        pink: [0.8241000000000002, 0.10608808442731632, 0.0015900762693974446],
        blue: [0.47120000400818335, -0.05111706453373946, -0.048406651029280656],
        channels: ["lightness", "a", "b"],
        ranges: [
            [0, 1],
            [-0.4, 0.4],
            [-0.4, 0.4],
        ],
    },
    lch: {
        // constructor: lch,
        name: "lch",
        isLegacy: false,
        isPolar: true,
        pink: [78.27047872644108, 35.21756424128674, 1.6545432253797676],
        blue: [38.957924566, 23.38135449889311, 229.54969234595737],
        channels: ["lightness", "chroma", "hue"],
        hasPowerless: true,
        ranges: [
            [0, 100],
            [0, 150],
            [0, 360],
        ],
    },
    oklch: {
        // constructor: oklch,
        name: "oklch",
        isLegacy: false,
        isPolar: true,
        pink: [0.8241, 0.1061, 0.8587],
        blue: [0.47120000400818335, 0.07039998686375618, 223.44000118475142],
        channels: ["lightness", "chroma", "hue"],
        hasPowerless: true,
        ranges: [
            [0, 1],
            [0, 0.4],
            [0, 360],
        ],
    },
    srgb: {
        // constructor: srgb,
        name: "srgb",
        isLegacy: false,
        isPolar: false,
        pink: [0.9999785463111585, 0.6599448662991679, 0.758373017125016],
        blue: [0.14900142239759614, 0.39063941586401707, 0.47119722379126755],
        channels: ["red", "green", "blue"],
        ranges: [
            [0, 1],
            [0, 1],
            [0, 1],
        ],
    },
    srgbLinear: {
        // constructor: srgbLinear,
        name: "srgb-linear",
        isLegacy: false,
        isPolar: false,
        pink: [0.999951196094508, 0.3930503811476254, 0.5356603778005655],
        blue: [0.019378214827482948, 0.12640222770203852, 0.18834349393523495],
        channels: ["red", "green", "blue"],
        ranges: [
            [0, 1],
            [0, 1],
            [0, 1],
        ],
    },
    displayP3: {
        // constructor: displayP3,
        name: "display-p3",
        colorjsName: "p3",
        isLegacy: false,
        isPolar: false,
        pink: [0.9510333333617188, 0.6749909745845027, 0.7568568353546363],
        blue: [0.21620126176161275, 0.38537730537965537, 0.46251697991685353],
        channels: ["red", "green", "blue"],
        ranges: [
            [0, 1],
            [0, 1],
            [0, 1],
        ],
    },
    a98Rgb: {
        // constructor: a98Rgb,
        name: "a98-rgb",
        colorjsName: "a98rgb",
        isLegacy: false,
        isPolar: false,
        pink: [0.9172837001828321, 0.6540226622083835, 0.7491144397116841],
        blue: [0.2557909283504703, 0.3904466064332277, 0.4651826475952292],
        channels: ["red", "green", "blue"],
        ranges: [
            [0, 1],
            [0, 1],
            [0, 1],
        ],
    },
    prophotoRgb: {
        // constructor: prophotoRgb,
        name: "prophoto-rgb",
        colorjsName: "prophoto",
        isLegacy: false,
        isPolar: false,
        pink: [0.842345736209146, 0.6470539622987257, 0.7003583323790157],
        blue: [0.24317903319635056, 0.3045087255847488, 0.38356879501347535],
        channels: ["red", "green", "blue"],
        ranges: [
            [0, 1],
            [0, 1],
            [0, 1],
        ],
    },
    rec2020: {
        // constructor: rec2020,
        name: "rec2020",
        isLegacy: false,
        isPolar: false,
        pink: [0.8837118321235519, 0.6578067923850563, 0.7273197917658354],
        blue: [0.2151122740532409, 0.32363973150195124, 0.4090033869684574],
        channels: ["red", "green", "blue"],
        ranges: [
          [0, 1],
          [0, 1],
          [0, 1],
        ],
        hasOutOfGamut: true,
        gamutExamples: [
          [
            [0.5, 2, 2],
            [1, 1, 1],
          ],
        ],
      },
    xyz: {
        // constructor: xyz,
        name: "xyz",
        isLegacy: false,
        isPolar: false,
        pink: [0.6495957411726918, 0.5323965129525022, 0.575341840710865],
        blue: [0.08718323686632441, 0.1081164314257634, 0.19446762910683627],
        channels: ["x", "y", "z"],
        ranges: [
            [0, 1],
            [0, 1],
            [0, 1],
        ],
    },
    xyzD50: {
        // constructor: xyzD50,
        name: "xyz-d50",
        isLegacy: false,
        isPolar: false,
        pink: [0.6640698533004002, 0.5367266625281085, 0.4345958246720296],
        blue: [0.08408207011375313, 0.10634498228480066, 0.1470370877550857],
        channels: ["x", "y", "z"],
        ranges: [
            [0, 1],
            [0, 1],
            [0, 1],
        ],
    },
    xyzD65: {
        // constructor: xyzD65,
        name: "xyz",
        isLegacy: false,
        isPolar: false,
        pink: [0.6495957411726918, 0.5323965129525022, 0.575341840710865],
        blue: [0.08718323686632441, 0.1081164314257634, 0.19446762910683627],
        channels: ["x", "y", "z"],
        ranges: [
            [0, 1],
            [0, 1],
            [0, 1],
        ],
    },
    rgb: {
        // constructor: rgb,
        name: "rgb",
        colorjsName: "srgb",
        isLegacy: true,
        isPolar: false,
        // RGB is 0-255 is Sass, 0-1 in ColorJS
        pink: [254.9945293093454 / 256, 168.28594090628783 / 256, 193.38511936687908 / 256],
        blue: [0.14900142239759614, 0.39063941586401707, 0.47119722379126755],
        channels: ["red", "green", "blue"],
        ranges: [
            [0, 255],
            [0, 255],
            [0, 255],
        ],
    },
    hsl: {
        // constructor: hsl,
        name: "hsl",
        isLegacy: true,
        isPolar: true,
        pink: [342.63204677447646, 99.98738302509669, 82.99617063051632],
        blue: [195.0016494775154, 51.95041997811069, 31.009932309443183],
        channels: ["hue", "saturation", "lightness"],
        hasPowerless: true,
        ranges: [
            [0, 360],
            [0, 100],
            [0, 100],
        ],
    },
    hwb: {
        // constructor: hwb,
        name: "hwb",
        isLegacy: true,
        isPolar: true,
        pink: [342.63204677447646, 65.99448662991679, 0.002145368884157506],
        blue: [195.0016494775154, 14.900142239759612, 52.880277620873244],
        channels: ["hue", "whiteness", "blackness"],
        hasPowerless: true,
        ranges: [
            [0, 360],
            [0, 100],
            [0, 100],
        ],
    },
};

function processSpace (space) {
    const colorjsName = space.colorjsName || space.name;
    const pink = new Color(colorjsName, space.pink);
    const blue = new Color(colorjsName, space.blue);
    function cleanCoords (coords) {
        let [a, b, c] = coords;
        c = space.isPolar ? c % 360 : c;
        // Re-translate to Sass ranges
        if (space.name === "rgb") {
            a = a * 256;
            b = b * 256;
            c = c * 256;
        }
        return [a, b, c];
    }
    let res = [
        [{ weight: 0.5 }, cleanCoords(pink.mix(blue, .5, { space: colorjsName, outputSpace: colorjsName }).coords)],
        [{ weight: 1 }, cleanCoords(pink.mix(blue, 0, { space: colorjsName, outputSpace: colorjsName }).coords)],
        [{ weight: 0 }, cleanCoords(pink.mix(blue, 1, { space: colorjsName, outputSpace: colorjsName }).coords)],
    ];
    if (space.isPolar) {
        res.push(
            [{ weight: 0.5, method: "shorter" }, cleanCoords(pink.mix(blue, .5, { space: colorjsName, outputSpace: colorjsName, hue: "shorter" }).coords)],
            [{ weight: 0.5, method: "longer" }, cleanCoords(pink.mix(blue, .5, { space: colorjsName, outputSpace: colorjsName, hue: "longer" }).coords)],
            [{ weight: 0.5, method: "increasing" }, cleanCoords(pink.mix(blue, .5, { space: colorjsName, outputSpace: colorjsName, hue: "increasing" }).coords)],
            [{ weight: 0.5, method: "decreasing" }, cleanCoords(pink.mix(blue, .5, { space: colorjsName, outputSpace: colorjsName, hue: "decreasing" }).coords)],
        );
    }
    return res;
}

function main () {
    let res = {};
    const spaceNames = Object.keys(spaces);
    spaceNames.forEach(spaceName => {
        const spaceObject = spaces[spaceName];
        res[spaceObject.name] = processSpace(spaceObject);
    });
    res["xyz-d65"] = res["xyz"];
    outputDom(res);
}


main();

function outputDom (json) {
    const output = document.getElementById("colorOutput");
    output.innerHTML = JSON.stringify(json, null, 2);
}
