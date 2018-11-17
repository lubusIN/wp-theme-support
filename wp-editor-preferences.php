<?php
/**
 * Contributors: lubus, ajitbohra
 * Plugin Name: Editor Preferences
 * Plugin URI: https://www.lubus.in
 * Description: Quickly config theme support for editor without any code
 * Author: LUBUS
 * Author URI: https://lubus.in
 * Version: 1.1.0
 * Text Domain: wep
 * Domain Path: /languages
 * GitHub Plugin URI: https://github.com/lubusIN/wp-editor-preferences
 * Tags: gutenberg, editor, settings, preferences
 * Requires at least: 3.0.1
 * Tested up to:  4.9.4
 * Stable tag: 1.0.0
 * License: GPLv3 or later
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 *
 * @package LubusIN_Editor_Preferences
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'LubusIN_Editor_Preferences' ) ) :
	/**
	 * LubusIN_Editor_Preferences Class.
	 *
	 * Main Class.
	 *
	 * @since 1.0.0
	 */
	class LubusIN_Editor_Preferences {
		/**
		 * Instance.
		 *
		 * @since
		 * @access private
		 * @var LubusIN_Editor_Preferences
		 */
		static private $instance;

		/**
		 * Singleton pattern.
		 *
		 * @since
		 * @access private
		 */
		private function __construct() {
			$this->setup_constants();
			$this->init_hooks();
		}


		/**
		 * Get instance.
		 *
		 * @since
		 * @access public
		 * @return LubusIN_Editor_Preferences
		 */
		public static function get_instance() {
			if ( null === static::$instance ) {
				self::$instance = new static();
			}

			return self::$instance;
		}

		/**
		 * Hook into actions and filters.
		 *
		 * @since  1.0.0
		 */
		private function init_hooks() {
			// Set up localization on init Hook.
			add_action( 'init', array( $this, 'load_textdomain' ), 0 );
			add_action( 'init', array( $this, 'register_settings' ) );
			add_action( 'enqueue_block_editor_assets', array( $this, 'register_editor_plugin' ) );
			add_action( 'after_setup_theme', array( $this, 'load_theme_support') );
		}

		/**
		 * Throw error on object clone
		 *
		 * The whole idea of the singleton design pattern is that there is a single
		 * object, therefore we don't want the object to be cloned.
		 *
		 * @since  1.0
		 * @access protected
		 *
		 * @return void
		 */
		public function __clone() {
			// Cloning instances of the class is forbidden.
			wep_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'wep' ), '1.0' );
		}

		/**
		 * Disable unserializing of the class
		 *
		 * @since  1.0
		 * @access protected
		 *
		 * @return void
		 */
		public function __wakeup() {
			// Unserializing instances of the class is forbidden.
			wep_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'wep' ), '1.0' );
		}

		/**
		 * Setup plugin constants
		 *
		 * @since  1.0
		 * @access private
		 *
		 * @return void
		 */
		private function setup_constants() {
			// Plugin version
			if ( ! defined( 'WEP_VERSION' ) ) {
				define( 'WEP_VERSION', '1.0.0' );
			}
			// Plugin Root File
			if ( ! defined( 'WEP_PLUGIN_FILE' ) ) {
				define( 'WEP_PLUGIN_FILE', __FILE__ );
			}
			// Plugin Folder Path
			if ( ! defined( 'WEP_PLUGIN_DIR' ) ) {
				define( 'WEP_PLUGIN_DIR', plugin_dir_path( WEP_PLUGIN_FILE ) );
			}
			// Plugin Folder URL
			if ( ! defined( 'WEP_PLUGIN_URL' ) ) {
				define( 'WEP_PLUGIN_URL', plugin_dir_url( WEP_PLUGIN_FILE ) );
			}
			// Plugin Basename aka: "wp-editor-preferences/wp-editor-preferences.php"
			if ( ! defined( 'WEP_PLUGIN_BASENAME' ) ) {
				define( 'WEP_PLUGIN_BASENAME', plugin_basename( WEP_PLUGIN_FILE ) );
			}
		}

		/**
		 * Loads the plugin language files.
		 *
		 * @since  1.0.0
		 * @access public
		 *
		 * @return void
		 */
		public function load_textdomain() {
			$locale = apply_filters( 'plugin_locale', get_locale(), 'wep' );
			// wp-content/languages/plugin-name/plugin-name-en_EN.mo.
			load_textdomain( 'wep', trailingslashit( WP_LANG_DIR ) . 'wp-editor-preferences' . '/' . 'wp-editor-preferences' . '-' . $locale . '.mo' );
			// wp-content/plugins/plugin-name/languages/plugin-name-en_EN.mo.
			load_plugin_textdomain( 'wep', false, basename( WEP_PLUGIN_DIR ) . '/languages/' );
		}

		/**
		 * Registers scripts
		 *
		 * @since 1.0.0
		 * @access public
		 *
		 * @return void
		 */
		public function register_editor_plugin() {
			$plugin_js  = 'build/script.js';
			$plugin_css = 'build/style.css';

			// Script
			wp_register_script(
				'wp-editor-preferences-js',
				WEP_PLUGIN_URL . $plugin_js,
				array(
					'wp-plugins',
					'wp-element',
					'wp-edit-post',
					'wp-i18n',
					'wp-data',
					'wp-components',
					'wp-editor',
					'wp-api'
				),
				filemtime( WEP_PLUGIN_DIR . $plugin_js ),
				true
			);

			// Style
			wp_register_style(
				'wp-editor-preferences-style',
				WEP_PLUGIN_URL . $plugin_css,
				array(),
				filemtime( WEP_PLUGIN_DIR . $plugin_css )
			);

			wp_enqueue_style( 'wp-editor-preferences-style' );
			wp_enqueue_script( 'wp-editor-preferences-js' );
		}

		/**
		 * Register Settings
		 * 
		 * @since   1.0.0
		 * @access  public
		 */
		public function register_settings() {
			register_setting(
				'lubusin_theme_preferences',
				'lubusin_theme_preferences',
				array(
					'type'              => 'string',
					'description'       => __( 'Editor theme preferences.', 'wep' ),
					'sanitize_callback' => 'sanitize_text_field',
					'show_in_rest'      => true,
					'default'           => ''
				)
			);
		}
	}

endif;

LubusIN_Editor_Preferences::get_instance();

