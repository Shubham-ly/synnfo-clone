const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        accent: "#fe5814",
      },
      maxWidth: {
        screen: "100vw",
      },
      keyframes: {
        cloudMovement: {
          "0%, 100%": { top: "80vh" },
          "50%": { top: "82vh" },
        },
      },
      animation: {
        cloudMovement: "cloudMovement 1s linear infinte",
      },
      screens: {
        md: "901px",
      },
      height: {
        "screen-1/4": "25vh",
      },
    },
  },

  plugins: [],
};

module.exports = config;
