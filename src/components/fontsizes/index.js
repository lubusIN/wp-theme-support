/**
 * WordPress dependencies
 */
import { Fragment } from "@wordpress/element";
import { Button } from "@wordpress/components";

/**
 * Internal dependencies
 */
import FontSize from "./fontsize";

// Component

const FontSizes = ({ sizes }) => {
  return (
    <Fragment>
      {sizes.map((fontsize, index) => (
        <FontSize
          key={index}
          name={fontsize.name}
          shortName={fontsize.short}
          value={fontsize.size}
        />
      ))}

      <Button isDefault className="wp-editor-preferences-sidebar__fontsize-add">
        Add
      </Button>
    </Fragment>
  );
};

export default FontSizes;
