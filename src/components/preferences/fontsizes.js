/**
 * WordPress dependencies
 */
import { ToggleControl, Button, PanelBody } from "@wordpress/components";

/**
 * Internal dependencies
 */
import FontSize from "../fontsizes/fontsize";

const FontSizes = () => {
  return (
    <PanelBody title="Font Sizes" initialOpen={true}>
      <FontSize />

      <Button isDefault className="wp-editor-preferences-sidebar__fontsize-add">
        Add
      </Button>

      <ToggleControl
        label="Disable Custom Fontsize"
        checked={true}
        onChange={value => alert(value)}
      />
    </PanelBody>
  );
};

export default FontSizes;
