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
import FontSize from "../fontsize";
import Add from "../fontsize/add";

const FontSizes = () => {
  // Update Fontsizes preferences
  const update = (context, key, value) => {
    let fontsizes = context.preferences.fontsizes;
    fontsizes[key] = value;
    context.updatePreferences(fontsizes);
  };

  // Delete Fontsize
  const onDelete = (context, index) => {
    const sizes = context.preferences.fontsizes.sizes;
    const newSizes = filter(sizes, (size, i) => index !== i);
    update(context, "sizes", newSizes);
  };

  // Update Fontsize
  const onUpdate = (context, index, key, value) => {
    const sizes = context.preferences.fontsizes.sizes;
    sizes[index][key] = value;
    update(context, "sizes", sizes);
  };

  // Add color
  const onAdd = (context, value) => {
    const sizes = context.preferences.fontsizes.sizes;
    sizes.push(value);
    update(context, "sizes", sizes);
  };

  return (
    <PreferencesContext.Consumer>
      {context => (
        <PanelBody title="Font Sizes" initialOpen={false}>
          {context.preferences.fontsizes.sizes.map((fontsize, index) => (
            <FontSize
              key={index}
              name={fontsize.name}
              value={fontsize.size}
              onDelete={() => onDelete(context, index)}
              onUpdate={(key, value) => onUpdate(context, index, key, value)}
            />
          ))}

          <Add onAdd={value => onAdd(context, value)} />

          <ToggleControl
            label="Disable Custom Fontsize"
            checked={context.preferences.fontsizes.custom}
            onChange={value => update(context, "custom", value)}
          />
        </PanelBody>
      )}
    </PreferencesContext.Consumer>
  );
};

export default FontSizes;
