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
      name="wp-theme-support-sidebar"
      isPinnable={false}
      title="Theme Support"
    >
      <Preferences />
    </PluginSidebar>
  );
};

export default PreferencesSidebar;
