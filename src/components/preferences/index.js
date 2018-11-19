/**
 * Internal dependencies
 */
import { PreferencesProvider } from "../context";
import Misc from "./misc";
import Colors from "./colors";
import FontSizes from "./fontsizes";
import Widths from "./widths";

// Preference Component
const Preferences = () => {
  return (
    <PreferencesProvider>
      <div className="wp-editor-preferences-sidebar">
        <Colors />
        <FontSizes />
        <Widths />
        <Misc />
      </div>
    </PreferencesProvider>
  );
};

export default Preferences;
