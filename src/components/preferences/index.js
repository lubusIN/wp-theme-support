/**
 * Internal dependencies
 */
import General from "./general";
import Colors from "./colors";
import FontSizes from "./fontsizes";
import Styles from "./Styles";
import Widths from "./Widths";

const Preferences = () => {
  return (
    <div className="wp-editor-preferences-sidebar">
      <General />
      <Colors />
      <FontSizes />
      <Styles />
      <Widths />
    </div>
  );
};

export default Preferences;
