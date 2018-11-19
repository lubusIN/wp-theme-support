/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { PluginSidebarMoreMenuItem } from "@wordpress/editPost";

/**
 * Internal dependencies
 */
import { Icon } from "../components/icon";

const PreferencesMenuItem = () => (
  <PluginSidebarMoreMenuItem icon={Icon} target="wp-theme-support-sidebar">
    {__("Theme Support")}
  </PluginSidebarMoreMenuItem>
);

export default PreferencesMenuItem;
