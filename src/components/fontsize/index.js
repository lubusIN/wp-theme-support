/**
 * WordPress dependencies
 */
import { Fragment } from "@wordpress/element";
import { TextControl, IconButton, PanelRow } from "@wordpress/components";

const FontSize = ({ name, shortName, value, onDelete, onUpdate }) => {
  // Update color
  const onChange = (key, value) => {
    onUpdate(key, value);
  };

  return (
    <Fragment>
      <TextControl
        label="Name"
        value={name}
        className="wp-editor-preferences-sidebar__fontsize-name"
        onChange={value => onChange("name", value)}
      />
      <PanelRow className="wp-editor-preferences-sidebar__fontsize">
        <TextControl
          label="Short name"
          value={shortName}
          className="wp-editor-preferences-sidebar__fontsize-short-name"
          onChange={value => onChange("short", value)}
        />
        <TextControl
          type="number"
          label="size"
          value={value}
          className="wp-editor-preferences-sidebar__fontsize-size"
          onChange={value => onChange("size", value)}
        />
        <IconButton
          className="wp-editor-preferences-sidebar__fontsize-remove"
          label="Remove"
          icon="no-alt"
          isLink
          isDestructive={true}
          onClick={onDelete}
        />
      </PanelRow>
    </Fragment>
  );
};

export default FontSize;
