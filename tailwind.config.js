/**
 * Rahvusarhiiv Design System — base Tailwind CSS configuration
 * @version 0.1.0
 */

const literalColors = {
  // Gray colors are in BETA
  gray: {
    light: {
      50: "#f7f8fa",
      100: "#f6f7fb",
      200: "#f1f3f8",
      300: "#eceff5", // Background color
      400: "#e7ebf2",
      500: "#e2e7ef",
      600: "#dde3ec",
      700: "#d8dfe9",
      800: "#d3dbe6",
      900: "#ced7e3",
    },
    dark: {
      50: "#798492",
      100: "#6f7a86",
      200: "#666f7b",
      300: "#5c656f",
      400: "#535a64",
      500: "#495058",
      600: "#40454d",
      700: "#363b41",
      800: "#2d3036",
      900: "#23262a",
    },
  },
  red: {
    50: "#feeceb", // error light
    100: "#fdd9d7",
    200: "#fbb4af",
    300: "#f88e86",
    400: "#f6695e",
    500: "#f44336", // error default
    600: "#c3362b",
    700: "#922820",
    800: "#621b16",
    900: "#310d0b",
  },
  yellow: {
    50: "#fdf6ea", // warning light
    100: "#fcedd5",
    200: "#f8dbab",
    300: "#f5c882",
    400: "#f1b658",
    500: "#eea42e", // warning default
    600: "#be8325",
    700: "#8f621c",
    800: "#5f4212",
    900: "#302109",
  },
  green: {
    50: "#e4fbed", // success/action light
    100: "#c4ecd1",
    200: "#a1ddb6",
    300: "#7bc994",
    400: "#59c27e",
    500: "#3fa864", // success/action default
    600: "#30834d",
    700: "#205d36",
    800: "#0f391f",
    900: "#001505",
  },
  blue: {
    50: "#e6f1fb", // info light
    100: "#cce3f7",
    200: "#9ac8ef",
    300: "#67ace8",
    400: "#3591e0",
    500: "#0275d8", // info default
    600: "#025ead",
    700: "#014682",
    800: "#012f56",
    900: "#00172b",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html}", "./src/**/*.svg", "./.eleventy.js"],
  theme: {
    extend: {
      backgroundImage: {
        "theme-ais":
          "linear-gradient(96.04deg, rgba(247, 227, 204, 0.65) -17.14%, #ECDDF4 94.45%)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {},
        // 'gray' is the default. Lets override it.
        gray: {
          css: {
            "--tw-prose-body": theme("colors.gray.dark.900"),
            "--tw-prose-headings": theme("colors.gray.dark.900"),
            "--tw-prose-lead": theme("colors.gray.dark.900"),
            "--tw-prose-links": theme("colors.info.DEFAULT"),
            "--tw-prose-bold": theme("colors.gray.dark.900"),
            "--tw-prose-counters": theme("colors.gray.dark.900"),
            "--tw-prose-bullets": theme("colors.green.500"),
            "--tw-prose-hr": theme("colors.gray.light.900"),
            "--tw-prose-quotes": theme("colors.gray.dark.900"),
            "--tw-prose-quote-borders": theme("colors.gray.light.900"),
            "--tw-prose-captions": theme("colors.gray.dark.900"),
            "--tw-prose-code": theme("colors.gray.dark.900"),
            "--tw-prose-pre-code": theme("colors.gray.dark.900"),
            "--tw-prose-pre-bg": theme("colors.white"),
            "--tw-prose-th-borders": theme("colors.gray.light.900"),
            "--tw-prose-td-borders": theme("colors.gray.light.900"),
            "--tw-prose-invert-body": theme("colors.white"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.white"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.white"),
            "--tw-prose-invert-bullets": theme("colors.white"),
            "--tw-prose-invert-hr": theme("colors.white"),
            "--tw-prose-invert-quotes": theme("colors.white"),
            "--tw-prose-invert-quote-borders": theme("colors.white"),
            "--tw-prose-invert-captions": theme("colors.white"),
            "--tw-prose-invert-code": theme("colors.black"),
            "--tw-prose-invert-pre-code": theme("colors.white"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.white"),
            "--tw-prose-invert-td-borders": theme("colors.white"),
          },
        },
      }),
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // Functional
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",

      // Literal
      black: "#000",
      white: "#fff",
      ...literalColors,

      // Semantic (references literal colors)
      action: {
        light: literalColors.green[50],
        DEFAULT: literalColors.green[500],
      },
      success: {
        light: literalColors.green[50],
        DEFAULT: literalColors.green[500],
      },
      info: {
        light: literalColors.blue[50],
        DEFAULT: literalColors.blue[500],
      },
      warning: {
        light: literalColors.yellow[50],
        DEFAULT: literalColors.yellow[500],
      },
      error: {
        light: literalColors.red[50],
        DEFAULT: literalColors.red[500],
      },
    },
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    borderRadius: {
      // TODO: review radiuses
      none: "0px",
      sm: "0.25rem",
      DEFAULT: ".5rem",
      // md: "0.375rem",
      // lg: "0.5rem",
      // xl: "0.75rem",
      // "2xl": "1rem",
      // "3xl": "1.5rem",
      full: "9999px",
    },
    boxShadow: {
      // TODO: round the values and check the keys/names with Keijo
      sm: "0px 0.4375px 4.625px 0px rgba(0,0,0,0.07), 0px 2px 13px 0px rgba(0,0,0,0.05), 0px 5.0625px 34.875px 0px rgba(0,0,0,0.04), 0px 10px 80px 0px rgba(0,0,0,0.02)",
      md: "0px 1.443750023841858px 4.625px 0px rgba(0,0,0,0.07), 0px 6.599999904632568px 13px 0px rgba(0,0,0,0.05), 0px 16.706249237060547px 34.875px 0px rgba(0,0,0,0.04), 0px 33px 80px 0px rgba(0,0,0,0.02)",
      DEFAULT:
        "0px 1.881250023841858px 4.625px 0px rgba(0,0,0,0.07), 0px 8.600000381469727px 13px 0px rgba(0,0,0,0.05), 0px 21.768749237060547px 34.875px 0px rgba(0,0,0,0.04), 0px 43px 80px 0px rgba(0,0,0,0.02)",
      lg: "0px 2.84375px 4.625px 0px rgba(0,0,0,0.07), 0px 13px 13px 0px rgba(0,0,0,0.05), 0px 32.90625px 34.875px 0px rgba(0,0,0,0.04), 0px 65px 80px 0px rgba(0,0,0,0.02)",
      // xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      // "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none",
    },
    fontFamily: {
      display: [
        "Raleway",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      body: [
        "Roboto",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    fontSize: {
      // TODO: Line heights review
      xs: ["0.6875rem", { lineHeight: "120%" }],
      sm: ["0.8125rem", { lineHeight: "120%" }],
      base: ["1rem", { lineHeight: "120%" }],
      lg: ["1.1875rem", { lineHeight: "120%" }],
      xl: ["1.4375rem", { lineHeight: "120%" }],
      "2xl": ["1.75rem", { lineHeight: "120%" }],
      "3xl": ["2.0625rem", { lineHeight: "120%" }],
      "4xl": ["2.5rem", { lineHeight: "120%" }],
      "5xl": ["3rem", { lineHeight: "120%" }],
      // "6xl": ["3.75rem", { lineHeight: "1" }],
      // "7xl": ["4.5rem", { lineHeight: "1" }],
      // "8xl": ["6rem", { lineHeight: "1" }],
      // "9xl": ["8rem", { lineHeight: "1" }],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
