/**
 * WordPress dependencies
 */
import { Fragment } from "@wordpress/element";
import { TextControl, IconButton, PanelRow } from "@wordpress/components";

const FontSize = () => {
  return (
    <Fragment>
      <TextControl
        label="Name"
        className="wp-editor-preferences-sidebar__fontsize-name"
      />
      <PanelRow className="wp-editor-preferences-sidebar__fontsize">
        <TextControl
          label="Short name"
          className="wp-editor-preferences-sidebar__fontsize-short-name"
        />
        <TextControl
          type="number"
          label="size"
          className="wp-editor-preferences-sidebar__fontsize-size"
        />
        <IconButton
          className="wp-editor-preferences-sidebar__fontsize-remove"
          label="Remove"
          icon="trash"
          isDestructive={true}
        />
      </PanelRow>
    </Fragment>
  );
};

export default FontSize;
