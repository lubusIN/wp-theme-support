/**
 * WordPress dependencies
 */
import { PluginSidebar } from "@wordpress/editPost";

/**
 * Internal dependencies
 */
import Preferences from "../components/preferences";

const PreferencesSidebar = () => {
  return (
    <PluginSidebar
      name="wp-editor-preferences-sidebar"
      isPinnable={false}
      title="Editor Preferences"
    >
      <Preferences />
    </PluginSidebar>
  );
};

export default PreferencesSidebar;
