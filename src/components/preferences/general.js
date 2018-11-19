/**
 * WordPress dependencies
 */
import { ToggleControl, PanelBody } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { PreferencesContext } from "../context";

const General = () => {
  const update = (context, key, value) => {
    let general = context.preferences.general;
    general[key] = value;
    context.updatePreferences(general);
  };

  return (
    <PreferencesContext.Consumer>
      {context => (
        <PanelBody title="General" initialOpen={false}>
          <ToggleControl
            label="Default Block Styles"
            checked={context.preferences.general.defaultBlockStyles}
            onChange={value => update(context, "defaultBlockStyles", value)}
          />

          <ToggleControl
            label="Responsive Embeds"
            checked={context.preferences.general.responsiveEmbed}
            onChange={value => update(context, "responsiveEmbed", value)}
          />
        </PanelBody>
      )}
    </PreferencesContext.Consumer>
  );
};

export default General;
