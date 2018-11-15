/**
 * External Dependencies
 */
import { filter } from "lodash";

/**
 * WordPress dependencies
 */
import { ToggleControl, PanelBody } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { PreferencesContext } from "../context";
import Color from "../color";
import Add from "../color/add";
const Colors = () => {
  // Update color preferences
  const update = (context, key, value) => {
    let colors = context.preferences.colors;
    colors[key] = value;
    context.updatePreferences(colors);
  };

  // Delete color
  const onDelete = (context, index) => {
    const shades = context.preferences.colors.shades;
    const newShades = filter(shades, (shade, i) => index !== i);
    update(context, "shades", newShades);
  };

  // Update color
  const onUpdate = (context, index, key, value) => {
    const shades = context.preferences.colors.shades;
    shades[index][key] = value;
    update(context, "shades", shades);
  };

  // Add color
  const onAdd = (context, value) => {
    const shades = context.preferences.colors.shades;
    shades.push(value);
    update(context, "shades", shades);
  };

  // Component
  return (
    <PreferencesContext.Consumer>
      {context => (
        <PanelBody title="Colors" initialOpen={false}>
          {context.preferences.colors.shades.map((shade, index) => (
            <Color
              key={index}
              code={shade.code}
              name={shade.name}
              onDelete={() => onDelete(context, index)}
              onUpdate={(key, value) => onUpdate(context, index, key, value)}
            />
          ))}

          <Add onAdd={value => onAdd(context, value)} />

          <ToggleControl
            label="Disable Custom Color"
            checked={context.preferences.colors.custom}
            onChange={value => update(context, "custom", value)}
          />
        </PanelBody>
      )}
    </PreferencesContext.Consumer>
  );
};

export default Colors;
