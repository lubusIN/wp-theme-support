/**
 * External dependencies
 */
import React from "react";
import { isEmpty } from "lodash";

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
    this.getDefault = this.getDefault.bind(this);
    this.updatePreferences = this.updatePreferences.bind(this);

    this.state = null;
  }

  // get default preferences
  getDefault() {
    const defaultPreferences = {
      colors: {
        shades: [],
        custom: false
      },
      fontsizes: {
        sizes: [],
        custom: true
      },
      widths: {
        main: "720px",
        wide: "1080px",
        full: "none"
      },
      Misc: {
        defaultBlockStyles: false,
        responsiveEmbed: false
      }
    };

    return defaultPreferences;
  }

  // Fetch settings
  componentDidMount() {
    let wpSettings;

    // load api
    wp.api.loadPromise.then(() => {
      wpSettings = new wp.api.models.Settings();

      // get settings
      wpSettings.fetch().then(settings => {
        if (!isEmpty(settings.lubusin_theme_preferences)) {
          this.setState(JSON.parse(settings.lubusin_theme_preferences));
        } else {
          this.setState(this.getDefault());
        }
      });
    });
  }

  // Update preferences
  updatePreferences(data) {
    this.setState(data);

    const wpSettings = new wp.api.models.Settings({
      lubusin_theme_preferences: JSON.stringify(this.state)
    });

    wpSettings.save();
  }

  render() {
    return (
      !isEmpty(this.state) && (
        <PreferencesContext.Provider
          value={{
            preferences: this.state,
            updatePreferences: this.updatePreferences
          }}
        >
          {this.props.children}
        </PreferencesContext.Provider>
      )
    );
  }
}
