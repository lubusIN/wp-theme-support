/**
 * WordPress dependencies
 */
import { Fragment } from "@wordpress/element";
import { registerPlugin } from "@wordpress/plugins";

/**
 * Internal dependencies
 */
import PreferencesMenuItem from "./components/menuitem";
import PreferencesSidebar from "./components/sidebar";
import "./style.scss";

const WpEditorPreferencesPlugin = () => (
  <Fragment>
    <PreferencesMenuItem />
    <PreferencesSidebar />
  </Fragment>
);

registerPlugin("wp-theme-support", {
  render: WpEditorPreferencesPlugin
});
