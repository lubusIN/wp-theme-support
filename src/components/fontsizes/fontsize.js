/**
 * WordPress dependencies
 */
import { Fragment } from "@wordpress/element";
import { TextControl, IconButton, PanelRow } from "@wordpress/components";

const FontSize = ({ name, shortName, value }) => {
  return (
    <Fragment>
      <TextControl
        label="Name"
        value={name}
        className="wp-editor-preferences-sidebar__fontsize-name"
      />
      <PanelRow className="wp-editor-preferences-sidebar__fontsize">
        <TextControl
          label="Short name"
          value={shortName}
          className="wp-editor-preferences-sidebar__fontsize-short-name"
        />
        <TextControl
          type="number"
          label="size"
          value={value}
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
