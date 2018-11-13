/**
 * WordPress dependencies
 */
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
  ToggleControl,
  TextControl,
  Button,
  IconButton,
  ButtonGroup,
  ColorPicker,
  Dropdown,
  ColorIndicator,
  BaseControl,
  PanelBody,
  PanelRow
} from "@wordpress/components";

const Preferences = () => {
  const colors = [
    { name: "red", color: "#f00" },
    { name: "white", color: "#fff" },
    { name: "blue", color: "#00f" }
  ];

  const fontSizes = [
    {
      name: __("Small"),
      slug: "small",
      size: 12
    },
    {
      name: __("Big"),
      slug: "big",
      size: 26
    }
  ];
  const fallbackFontSize = 16;

  return (
    <div className="wp-editor-preferences-sidebar">
      <PanelBody title="General" initialOpen={false}>
        <BaseControl label="Wide Alignment">
          <ButtonGroup>
            <Button isDefault>Wide</Button>
            <Button isDefault>Full</Button>
          </ButtonGroup>
        </BaseControl>
        <ToggleControl
          label="Default Block Styles"
          checked={true}
          onChange={value => alert(value)}
        />

        <ToggleControl
          label="Responsive Embeds"
          checked={true}
          onChange={value => alert(value)}
        />
      </PanelBody>

      <PanelBody title="Colors" initialOpen={false}>
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
        <Button isDefault className="wp-editor-preferences-sidebar__color-add">
          Add
        </Button>

        <ToggleControl
          label="Disable Custom Color"
          checked={true}
          onChange={value => alert(value)}
        />
      </PanelBody>
      <PanelBody title="Font Sizes" initialOpen={true}>
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
        <Button
          isDefault
          className="wp-editor-preferences-sidebar__fontsize-add"
        >
          Add
        </Button>

        <ToggleControl
          label="Disable Custom Fontsize"
          checked={true}
          onChange={value => alert(value)}
        />
      </PanelBody>

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
    </div>
  );
};

export default Preferences;
