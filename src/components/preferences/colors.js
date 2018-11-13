/**
 * WordPress dependencies
 */
import { ToggleControl, Button, PanelBody } from "@wordpress/components";

/**
 * Internal dependencies
 */
import Color from "../colors/color";

const Colors = () => {
  return (
    <PanelBody title="Colors" initialOpen={false}>
      <Color />

      <Button isDefault className="wp-editor-preferences-sidebar__color-add">
        Add
      </Button>

      <ToggleControl
        label="Disable Custom Color"
        checked={true}
        onChange={value => alert(value)}
      />
    </PanelBody>
  );
};

export default Colors;
