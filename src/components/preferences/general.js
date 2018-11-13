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
  return (
    <PreferencesContext.Consumer>
      {context => (
        <PanelBody title="General" initialOpen={false}>
          <BaseControl label="Wide Alignment">
            <ButtonGroup>
              <Button
                isPrimary={context.preferences.general.wideAlignment === "wide"}
                isDefault={context.preferences.general.wideAlignment !== "wide"}
              >
                Wide
              </Button>
              <Button
                isPrimary={context.preferences.general.wideAlignment === "full"}
                isDefault={context.preferences.general.wideAlignment !== "full"}
              >
                full
              </Button>
            </ButtonGroup>
          </BaseControl>
          <ToggleControl
            label="Default Block Styles"
            checked={context.preferences.general.defaultBlockStyles}
            onChange={value => value}
          />

          <ToggleControl
            label="Responsive Embeds"
            checked={context.preferences.general.responsiveEmbed}
            onChange={value => value}
          />
        </PanelBody>
      )}
    </PreferencesContext.Consumer>
  );
};

export default General;
