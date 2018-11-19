/**
 * External dependencies
 */
import { isEmpty } from "lodash";
import slugify from "@sindresorhus/slugify";

/**
 * WordPress dependencies
 */
import { withState } from "@wordpress/compose";
import {
  TextControl,
  IconButton,
  ColorPicker,
  Dropdown,
  ColorIndicator,
  PanelRow,
  Button
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import "./style.scss";

// Component
const add = ({ onAdd, code, name, setState }) => {
  return (
    <Dropdown
      className="wp-editor-preferences-sidebar__color-add-container"
      contentClassName="wp-editor-preferences-sidebar__color-add-content"
      position="bottom left"
      renderToggle={({ isOpen, onToggle }) => (
        <Button
          isDefault
          onClick={onToggle}
          aria-expanded={isOpen}
          className="wp-editor-preferences-sidebar__color-add"
        >
          Add
        </Button>
      )}
      renderContent={({ onClose }) => (
        <div>
          <ColorPicker
            color={code}
            onChangeComplete={code =>
              setState(() => ({
                code: code.hex
              }))
            }
            disableAlpha
          />

          <PanelRow className="wp-editor-preferences-sidebar__color">
            <ColorIndicator colorValue={code} />
            <TextControl
              label="Name"
              value={name}
              className="wp-editor-preferences-sidebar__color-name"
              onChange={name => setState(() => ({ name }))}
            />
            <IconButton
              className="wp-editor-preferences-sidebar__color-save"
              label="Save"
              icon="yes"
              disabled={isEmpty(name) || isEmpty(code)}
              isPrimary={true}
              onClick={() => {
                onAdd({ name: name, slug: slugify(name), color: code });
                onClose();
              }}
            />
          </PanelRow>
        </div>
      )}
    />
  );
};

export default withState({ code: "#333333", name: "" })(add);
