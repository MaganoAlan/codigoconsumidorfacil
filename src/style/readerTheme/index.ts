import type { Theme } from "@epubjs-react-native/core";

const sepia: Theme = {
  body: {
    background: "rgba(255,228,147, 0.3)",
  },
  span: {
    color: "#333 !important",
  },
  p: {
    color: "#333 !important",
  },
  li: {
    color: "#333 !important",
  },
  h1: {
    color: "#333 !important",
  },
};

const unset: Theme = {
  body: {
    background: "white",
  },
  span: {
    color: "#333 !important",
  },
  p: {
    color: "#333 !important",
  },
  li: {
    color: "#333 !important",
  },
  h1: {
    color: "#333 !important",
  },
};

const dark: Theme = {
  body: {
    background: "#333",
  },
  span: {
    color: "#fdfdfd !important",
  },
  p: {
    color: "#fdfdfd !important",
  },
  li: {
    color: "#fdfdfd !important",
  },
  h1: {
    color: "#fdfdfd !important",
  },
};

export { sepia, unset };
