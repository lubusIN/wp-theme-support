/**
 * Internal dependencies
 */
import { PreferencesProvider } from "../context";
import General from "./general";
import Colors from "./colors";
import FontSizes from "./fontsizes";
import Styles from "./Styles";
import Widths from "./Widths";

// Preference Component
const Preferences = () => {
  return (
    <PreferencesProvider>
      <div className="wp-editor-preferences-sidebar">
        <General />
        <Colors />
        <FontSizes />
        <Styles />
        <Widths />
      </div>
    </PreferencesProvider>
  );
};

export default Preferences;
