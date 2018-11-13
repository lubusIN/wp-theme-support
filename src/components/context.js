/**
 * External dependencies
 */
import React from "react";

// Context for preferences data
export const PreferencesContext = React.createContext();

// Default data
const defaults = {
  general: {
    wideAlignment: "wide",
    defaultBlockStyles: false,
    responsiveEmbed: false
  },
  colors: {
    shades: [
      {
        name: "Red",
        code: "#0071a1"
      },
      {
        name: "Black",
        code: "#000000"
      }
    ],
    custom: false
  },
  fontsizes: {
    sizes: [
      {
        name: "Big",
        short: "B",
        size: "40"
      },
      {
        name: "Huge",
        short: "H",
        size: "60"
      }
    ],
    custom: true
  },
  styles: {
    editorStyles: false,
    darkEditorStyles: false
  },
  widths: {
    main: "720px",
    wide: "1080px",
    full: "none"
  }
};

// Provider
export const PreferencesProvider = props => {
  return (
    <PreferencesContext.Provider value={{ preferences: defaults }}>
      {props.children}
    </PreferencesContext.Provider>
  );
};
