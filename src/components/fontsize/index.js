/**
 * WordPress dependencies
 */
import { Fragment } from "@wordpress/element";
import { TextControl, IconButton, PanelRow } from "@wordpress/components";

const FontSize = ({ name, value, onDelete, onUpdate }) => {
  // Update color
  const onChange = (key, value) => {
    onUpdate(key, value);
  };

  return (
    <Fragment>
      <PanelRow className="wp-theme-support-sidebar__fontsize">
        <TextControl
          label="Name"
          value={name}
          className="wp-theme-support-sidebar__fontsize-name"
          onChange={value => onChange("name", value)}
        />
        <TextControl
          type="number"
          label="size"
          value={value}
          className="wp-theme-support-sidebar__fontsize-size"
          onChange={value => onChange("size", value)}
        />
        <IconButton
          className="wp-theme-support-sidebar__fontsize-remove"
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
