/**
 * External dependencies
 */
import { isEmpty } from "lodash";

/**
 * WordPress dependencies
 */
import { withState } from "@wordpress/compose";
import {
  TextControl,
  IconButton,
  Dropdown,
  PanelRow,
  Button
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import "./style.scss";

// Component
const add = ({ onAdd, name, short, size, setState }) => {
  return (
    <Dropdown
      className="wp-editor-preferences-sidebar__fontsize-add-container"
      contentClassName="wp-editor-preferences-sidebar__fontsize-add-content"
      position="bottom left"
      renderToggle={({ isOpen, onToggle }) => (
        <Button
          isDefault
          onClick={onToggle}
          aria-expanded={isOpen}
          className="wp-editor-preferences-sidebar__fontsize-add"
        >
          Add
        </Button>
      )}
      renderContent={({ onClose }) => (
        <div className="wp-editor-preferences-sidebar__fontsize-wrapper">
          <TextControl
            label="Name"
            value={name}
            className="wp-editor-preferences-sidebar__fontsize-name"
            onChange={name => setState(() => ({ name }))}
          />
          <PanelRow className="wp-editor-preferences-sidebar__fontsize">
            <TextControl
              label="Short name"
              value={short}
              className="wp-editor-preferences-sidebar__fontsize-short-name"
              onChange={short => setState(() => ({ short }))}
            />
            <TextControl
              type="number"
              label="size"
              value={size}
              className="wp-editor-preferences-sidebar__fontsize-size"
              onChange={size => setState(() => ({ size }))}
            />
            <IconButton
              className="wp-editor-preferences-sidebar__fontsize-save"
              disabled={isEmpty(name) || isEmpty(short) || isEmpty(size)}
              label="Save"
              icon="yes"
              isPrimary={true}
              onClick={() => {
                onAdd({ name, short, size });
                onClose();
              }}
            />
          </PanelRow>
        </div>
      )}
    />
  );
};

export default withState({ name: "", short: "", size: "" })(add);
