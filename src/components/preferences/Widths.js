/**
 * WordPress dependencies
 */
import { TextControl, PanelBody, PanelRow } from "@wordpress/components";

const Widths = () => {
  return (
    <PanelBody title="Width" initialOpen={false}>
      <PanelRow className="wp-editor-preferences-sidebar__fontsize">
        <TextControl
          label="Main"
          type="number"
          className="wp-editor-preferences-sidebar__width-main"
        />
        <TextControl
          label="Wide"
          type="number"
          className="wp-editor-preferences-sidebar__width-wide"
        />
        <TextControl
          label="Full"
          type="number"
          className="wp-editor-preferences-sidebar__width-full"
        />
      </PanelRow>
    </PanelBody>
  );
};

export default Widths;
