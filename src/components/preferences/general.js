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

const General = () => {
  return (
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
  );
};

export default General;
