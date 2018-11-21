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
  Dropdown,
  PanelRow,
  Button
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import "./style.scss";

// Component
const add = ({ onAdd, name, size, setState }) => {
  return (
    <Dropdown
      className="wp-theme-support-sidebar__fontsize-add-container"
      contentClassName="wp-theme-support-sidebar__fontsize-add-content"
      position="bottom left"
      renderToggle={({ isOpen, onToggle }) => (
        <Button
          isDefault
          onClick={onToggle}
          aria-expanded={isOpen}
          className="wp-theme-support-sidebar__fontsize-add"
        >
          Add
        </Button>
      )}
      renderContent={({ onClose }) => (
        <div className="wp-theme-support-sidebar__fontsize-wrapper">
          <PanelRow className="wp-theme-support-sidebar__fontsize">
            <TextControl
              label="Name"
              value={name}
              className="wp-theme-support-sidebar__fontsize-name"
              onChange={name => setState(() => ({ name }))}
            />
            <TextControl
              type="number"
              label="size"
              value={size}
              className="wp-theme-support-sidebar__fontsize-size"
              onChange={size => setState(() => ({ size }))}
            />
            <IconButton
              className="wp-theme-support-sidebar__fontsize-save"
              disabled={isEmpty(name) || isEmpty(size)}
              label="Save"
              icon="yes"
              isPrimary={true}
              onClick={() => {
                onAdd({
                  name,
                  slug: slugify(name),
                  size
                });
                setState(() => ({ name: "", size: "" }));
                onClose();
              }}
            />
          </PanelRow>
        </div>
      )}
    />
  );
};

export default withState({ name: "", size: "" })(add);
