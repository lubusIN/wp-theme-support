/**
 * WordPress dependencies
 */
import { ToggleControl, PanelBody } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { PreferencesContext } from "../context";

const Styles = () => {
  const update = (context, key, value) => {
    let styles = context.preferences.styles;
    styles[key] = value;
    context.updatePreferences(styles);
  };

  return (
    <PreferencesContext.Consumer>
      {context => (
        <PanelBody title="Styles" initialOpen={false}>
          <ToggleControl
            label="Editor Styles"
            checked={context.preferences.styles.editorStyles}
            onChange={value => update(context, "editorStyles", value)}
          />

          <ToggleControl
            label="Dark Editor Styles"
            checked={context.preferences.styles.darkEditorStyles}
            onChange={value => update(context, "darkEditorStyles", value)}
          />
        </PanelBody>
      )}
    </PreferencesContext.Consumer>
  );
};

export default Styles;
