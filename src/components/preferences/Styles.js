/**
 * WordPress dependencies
 */
import { ToggleControl, PanelBody } from "@wordpress/components";

const Styles = () => {
  return (
    <PanelBody title="Styles" initialOpen={false}>
      <ToggleControl
        label="Editor Styles"
        checked={true}
        onChange={value => alert(value)}
      />

      <ToggleControl
        label="Dark Editor Styles"
        checked={true}
        onChange={value => alert(value)}
      />
    </PanelBody>
  );
};

export default Styles;
