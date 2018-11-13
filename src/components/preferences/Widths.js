/**
 * WordPress dependencies
 */
import { TextControl, PanelBody, PanelRow } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { PreferencesContext } from "../context";

const Widths = () => {
  return (
    <PreferencesContext.Consumer>
      {context => (
        <PanelBody title="Width" initialOpen={false}>
          <PanelRow className="wp-editor-preferences-sidebar__fontsize">
            <TextControl
              label="Main"
              value={context.preferences.widths.main}
              className="wp-editor-preferences-sidebar__width-main"
            />
            <TextControl
              label="Wide"
              value={context.preferences.widths.wide}
              className="wp-editor-preferences-sidebar__width-wide"
            />
            <TextControl
              label="Full"
              value={context.preferences.widths.full}
              className="wp-editor-preferences-sidebar__width-full"
            />
          </PanelRow>
        </PanelBody>
      )}
    </PreferencesContext.Consumer>
  );
};

export default Widths;
