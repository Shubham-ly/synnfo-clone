const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        accent: "#fe5814",
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
    },
  },

  plugins: [],
};

module.exports = config;
