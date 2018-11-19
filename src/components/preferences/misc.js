/**
 * WordPress dependencies
 */
import { ToggleControl, PanelBody } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { PreferencesContext } from "../context";

const Misc = () => {
  const update = (context, key, value) => {
    let misc = context.preferences.misc;
    misc[key] = value;
    context.updatePreferences(misc);
  };

  return (
    <PreferencesContext.Consumer>
      {context => (
        <PanelBody title="Misc" initialOpen={false}>
          <ToggleControl
            label="Default Block Styles"
            checked={context.preferences.misc.defaultBlockStyles}
            onChange={value => update(context, "defaultBlockStyles", value)}
          />

          <ToggleControl
            label="Responsive Embeds"
            checked={context.preferences.misc.responsiveEmbed}
            onChange={value => update(context, "responsiveEmbed", value)}
          />
        </PanelBody>
      )}
    </PreferencesContext.Consumer>
  );
};

export default Misc;
