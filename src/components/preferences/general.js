/**
 * WordPress dependencies
 */
import {
  ToggleControl,
  Button,
  ButtonGroup,
  BaseControl,
  PanelBody
} from "@wordpress/components";

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
          <BaseControl label="Wide Alignment">
            <ButtonGroup>
              <Button
                isPrimary={
                  context.preferences.general.wideAlignment === "normal"
                }
                isDefault={
                  context.preferences.general.wideAlignment !== "normal"
                }
                onClick={() => update(context, "wideAlignment", "normal")}
              >
                Normal
              </Button>
              <Button
                isPrimary={context.preferences.general.wideAlignment === "wide"}
                isDefault={context.preferences.general.wideAlignment !== "wide"}
                onClick={() => update(context, "wideAlignment", "wide")}
              >
                Wide
              </Button>
              <Button
                isPrimary={context.preferences.general.wideAlignment === "full"}
                isDefault={context.preferences.general.wideAlignment !== "full"}
                onClick={() => update(context, "wideAlignment", "full")}
              >
                full
              </Button>
            </ButtonGroup>
          </BaseControl>
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
