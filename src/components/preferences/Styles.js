/**
 * WordPress dependencies
 */
import { ToggleControl, PanelBody } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { PreferencesContext } from "../context";

const Styles = () => {
  return (
    <PreferencesContext.Consumer>
      {context => (
        <PanelBody title="Styles" initialOpen={false}>
          <ToggleControl
            label="Editor Styles"
            checked={context.preferences.styles.editorStyles}
            onChange={value => value}
          />

          <ToggleControl
            label="Dark Editor Styles"
            checked={context.preferences.styles.darkEditorStyles}
            onChange={value => value}
          />
        </PanelBody>
      )}
    </PreferencesContext.Consumer>
  );
};

export default Styles;
