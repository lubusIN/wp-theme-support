/**
 * WordPress dependencies
 */
import {
  TextControl,
  IconButton,
  ColorPicker,
  Dropdown,
  ColorIndicator,
  PanelRow
} from "@wordpress/components";

const Color = ({ code, name, onDelete, onUpdate }) => {
  // Update color
  const onChange = (key, value) => {
    onUpdate(key, value);
  };

  return (
    <PanelRow className="wp-editor-preferences-sidebar__color">
      <Dropdown
        className="wp-editor-preferences-sidebar__color-picker-container"
        contentClassName="wp-editor-preferences-sidebar__color-picker-content"
        position="bottom left"
        renderToggle={({ isOpen, onToggle }) => (
          <ColorIndicator
            isPrimary
            onClick={onToggle}
            aria-expanded={isOpen}
            colorValue={code}
          />
        )}
        renderContent={() => (
          <ColorPicker
            color={code}
            onChangeComplete={value => onChange("color", value.hex)}
            disableAlpha
          />
        )}
      />
      <TextControl
        label="Name"
        value={name}
        className="wp-editor-preferences-sidebar__color-name"
        onChange={value => onChange("name", value)}
      />
      <IconButton
        className="wp-editor-preferences-sidebar__color-remove button-link-delete"
        label="Remove"
        icon="dismiss"
        isDestructive={true}
        onClick={onDelete}
      />
    </PanelRow>
  );
};

export default Color;
