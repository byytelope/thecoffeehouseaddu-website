module.exports = {
    experimental: {
        darkModeVariant: true,
    },
    purge: ["./src/App.js", "./src/components/*.js", "./src/views/*.js"],
    theme: {
        future: {
            purgeLayersByDefault: true,
            removeDeprecatedGapUtilities: true,
        },
        extend: {
            colors: {
                "tch-gray-lt0": "#fafafa",
                "tch-gray-lt": "#f2f2f2",
                "tch-gray-md": "#e0e0e0",
                "tch-gray-dk": "#3f3f3f",
                "tch-dark-surface": "#212121",
                "tch-dark-surface-1": "#252525",
                "tch-dark-surface-2": "#323232",
                "tch-dark-surface-3": "#545454",
            },
            fontSize: {
                "1.5xl": "1.375rem",
                "5.5xl": "3.5rem",
            },
            scale: {
                15: ".15",
                25: ".25",
            },
            spacing: {
                1.5: "6px",
                72: "18rem",
                80: "20rem",
                88: "22rem",
                96: "24rem",
                "-72": "-18rem",
                "-80": "-20rem",
                "-88": "-22rem",
                "-96": "-24rem",
            },
        },
        fontFamily: {
            header: ["Assistant"],
            body: ["Montserrat"],
        },
    },
    variants: {},
    plugins: [],
};
