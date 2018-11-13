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

const Color = () => {
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
            colorValue="#f00"
          />
        )}
        renderContent={() => <ColorPicker />}
      />

      <TextControl
        label="Name"
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
