/**
 * External dependencies
 */
import React from "react";

/**
 * WordPress dependencies
 */
import { Component } from "@wordpress/element";

// Context for preferences data
export const PreferencesContext = React.createContext();

// Provider
export class PreferencesProvider extends Component {
  constructor(props) {
    super(props);
    this.updatePreferences = this.updatePreferences.bind(this);
    this.state = {
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
  }

  updatePreferences(data) {
    this.setState(data);
  }

  render() {
    return (
      <PreferencesContext.Provider
        value={{
          preferences: this.state,
          updatePreferences: this.updatePreferences
        }}
      >
        {this.props.children}
      </PreferencesContext.Provider>
    );
  }
}
