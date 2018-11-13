/**
 * WordPress dependencies
 */
import { ToggleControl, PanelBody } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { PreferencesContext } from "../context";
import ColorList from "../colors";

const Colors = () => {
  return (
    <PreferencesContext.Consumer>
      {context => (
        <PanelBody title="Colors" initialOpen={false}>
          <ColorList shades={context.preferences.colors.shades} />

          <ToggleControl
            label="Disable Custom Color"
            checked={context.preferences.colors.custom}
            onChange={value => value}
          />
        </PanelBody>
      )}
    </PreferencesContext.Consumer>
  );
};

export default Colors;
