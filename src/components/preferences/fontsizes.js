/**
 * WordPress dependencies
 */
import { ToggleControl, Button, PanelBody } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { PreferencesContext } from "../context";
import FontSizeItems from "../fontsizes";

const FontSizes = () => {
  return (
    <PreferencesContext.Consumer>
      {context => (
        <PanelBody title="Font Sizes" initialOpen={true}>
          <FontSizeItems sizes={context.preferences.fontsizes.sizes} />
          <Button
            isDefault
            className="wp-editor-preferences-sidebar__fontsize-add"
          >
            Add
          </Button>

          <ToggleControl
            label="Disable Custom Fontsize"
            checked={context.preferences.fontsizes.custom}
            onChange={value => value}
          />
        </PanelBody>
      )}
    </PreferencesContext.Consumer>
  );
};

export default FontSizes;
