/**
 * Internal dependencies
 */
import { PreferencesProvider } from "../context";
import General from "./general";
import Colors from "./colors";
import FontSizes from "./fontsizes";
import Widths from "./widths";

// Preference Component
const Preferences = () => {
  return (
    <PreferencesProvider>
      <div className="wp-editor-preferences-sidebar">
        <General />
        <Colors />
        <FontSizes />
        <Widths />
      </div>
    </PreferencesProvider>
  );
};

export default Preferences;
