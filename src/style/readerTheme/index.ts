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
    color: "#c2c2c2 !important",
  },
  p: {
    color: "#c2c2c2 !important",
  },
  li: {
    color: "#c2c2c2 !important",
  },
  h1: {
    color: "#c2c2c2 !important",
  },
};

export { sepia, unset, dark };
