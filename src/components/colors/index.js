/**
 * WordPress dependencies
 */
import { Fragment } from "@wordpress/element";
import { Button } from "@wordpress/components";

/**
 * Internal dependencies
 */
import Color from "./color";

// Component

const Colors = ({ shades }) => {
  return (
    <Fragment>
      {shades.map((shade, index) => (
        <Color key={index} code={shade.code} name={shade.name} />
      ))}

      <Button isDefault className="wp-editor-preferences-sidebar__color-add">
        Add
      </Button>
    </Fragment>
  );
};

export default Colors;
