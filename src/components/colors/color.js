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

const Color = ({ code, name }) => {
  return (
    <PanelRow className="wp-editor-preferences-sidebar__color">
      <Dropdown
        className="wp-editor-preferences-sidebar__color-picker-container"
        contentClassName="wp-editor-preferences-sidebar__color-picker-content"
        position="bottom right"
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
            onChangeComplete={value => value}
            disableAlpha
          />
        )}
      />

      <TextControl
        label="Name"
        value={name}
        className="wp-editor-preferences-sidebar__color-name"
      />
      <IconButton
        className="wp-editor-preferences-sidebar__color-remove"
        label="Remove"
        icon="trash"
        isDestructive={true}
      />
    </PanelRow>
  );
};

export default Color;
