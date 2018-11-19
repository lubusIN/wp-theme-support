/**
 * WordPress dependencies
 */
import { TextControl, PanelBody, PanelRow } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { PreferencesContext } from "../context";

const Widths = () => {
  const update = (context, key, value) => {
    let widths = context.preferences.widths;
    widths[key] = value;
    context.updatePreferences(widths);
  };

  return (
    <PreferencesContext.Consumer>
      {context => (
        <PanelBody title="Block Editor Width" initialOpen={false}>
          <TextControl
            label="Main Column"
            value={context.preferences.widths.main}
            className="wp-theme-support-sidebar__width-main"
            onChange={value => update(context, "main", value)}
          />
          <TextControl
            label="Wide Blocks"
            value={context.preferences.widths.wide}
            className="wp-theme-support-sidebar__width-wide"
            onChange={value => update(context, "wide", value)}
          />
          <TextControl
            label="Full Wide Blocks"
            value={context.preferences.widths.full}
            className="wp-theme-support-sidebar__width-full"
            onChange={value => update(context, "full", value)}
          />
        </PanelBody>
      )}
    </PreferencesContext.Consumer>
  );
};

export default Widths;
