<?php
/**
 * Contributors: lubus, ajitbohra
 * Plugin Name: Theme Support
 * Plugin URI: https://www.lubus.in
 * Description: Quickly config theme support using UI
 * Author: LUBUS
 * Author URI: https://lubus.in
 * Version: 0.1.1
 * Text Domain: lts
 * Domain Path: /languages
 * GitHub Plugin URI: https://github.com/lubusIN/wp-theme-support
 * Tags: gutenberg, editor, theme, support
 * Requires at least: 3.0.1
 * Tested up to:  4.9.4
 * Stable tag: 0.1.1
 * License: GPLv3 or later
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 *
 * @package LubusIN_Theme_Support
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'LubusIN_Theme_Support' ) ) :
	/**
	 * LubusIN_Theme_Support Class.
	 *
	 * Main Class.
	 *
	 * @since 0.1.0
	 */
	class LubusIN_Theme_Support {
		/**
		 * Instance.
		 *
		 * @since
		 * @access private
		 * @var LubusIN_Theme_Support
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
		 * @return LubusIN_Theme_Support
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
		 * @since  0.1.0
		 */
		private function init_hooks() {
			// Set up localization on init Hook.
			add_action( 'init', array( $this, 'load_textdomain' ), 0 );
			add_action( 'init', array( $this, 'register_settings' ) );
			add_action( 'enqueue_block_editor_assets', array( $this, 'register_editor_plugin' ) );
			add_action( 'after_setup_theme', array( $this, 'load_theme_support' ) );
			add_action( 'admin_head', array( $this, 'load_editor_styles' ) );
			add_action( 'wp_head', array( $this, 'load_styles' ) );
		}

		/**
		 * Throw error on object clone
		 *
		 * The whole idea of the singleton design pattern is that there is a single
		 * object, therefore we don't want the object to be cloned.
		 *
		 * @since  0.1.0
		 * @access protected
		 *
		 * @return void
		 */
		public function __clone() {
			// Cloning instances of the class is forbidden.
			lts_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'lts' ), '1.0' );
		}

		/**
		 * Disable unserializing of the class
		 *
		 * @since  0.1.0
		 * @access protected
		 *
		 * @return void
		 */
		public function __wakeup() {
			// Unserializing instances of the class is forbidden.
			lts_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'lts' ), '1.0' );
		}

		/**
		 * Setup plugin constants
		 *
		 * @since  0.1.0
		 * @access private
		 *
		 * @return void
		 */
		private function setup_constants() {
			// Plugin version
			if ( ! defined( 'LTS_VERSION' ) ) {
				define( 'LTS_VERSION', '0.1.0' );
			}
			// Plugin Root File
			if ( ! defined( 'LTS_PLUGIN_FILE' ) ) {
				define( 'LTS_PLUGIN_FILE', __FILE__ );
			}
			// Plugin Folder Path
			if ( ! defined( 'LTS_PLUGIN_DIR' ) ) {
				define( 'LTS_PLUGIN_DIR', plugin_dir_path( LTS_PLUGIN_FILE ) );
			}
			// Plugin Folder URL
			if ( ! defined( 'LTS_PLUGIN_URL' ) ) {
				define( 'LTS_PLUGIN_URL', plugin_dir_url( LTS_PLUGIN_FILE ) );
			}
			// Plugin Basename aka: "wp-theme-support/wp-theme-support.php"
			if ( ! defined( 'LTS_PLUGIN_BASENAME' ) ) {
				define( 'LTS_PLUGIN_BASENAME', plugin_basename( LTS_PLUGIN_FILE ) );
			}
		}

		/**
		 * Loads the plugin language files.
		 *
		 * @since  0.1.0
		 * @access public
		 *
		 * @return void
		 */
		public function load_textdomain() {
			$locale = apply_filters( 'plugin_locale', get_locale(), 'lts' );
			// wp-content/languages/plugin-name/plugin-name-en_EN.mo.
			load_textdomain( 'lts', trailingslashit( WP_LANG_DIR ) . 'wp-theme-support' . '/' . 'wp-theme-support' . '-' . $locale . '.mo' );
			// wp-content/plugins/plugin-name/languages/plugin-name-en_EN.mo.
			load_plugin_textdomain( 'lts', false, basename( LTS_PLUGIN_DIR ) . '/languages/' );
		}

		/**
		 * Registers scripts
		 *
		 * @since 0.1.0
		 * @access public
		 *
		 * @return void
		 */
		public function register_editor_plugin() {
			$plugin_js  = 'build/script.js';
			$plugin_css = 'build/style.css';

			// Script
			wp_register_script(
				'wp-theme-support-js',
				LTS_PLUGIN_URL . $plugin_js,
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
				filemtime( LTS_PLUGIN_DIR . $plugin_js ),
				true
			);

			// Style
			wp_register_style(
				'wp-theme-support-style',
				LTS_PLUGIN_URL . $plugin_css,
				array(),
				filemtime( LTS_PLUGIN_DIR . $plugin_css )
			);

			wp_enqueue_style( 'wp-theme-support-style' );
			wp_enqueue_script( 'wp-theme-support-js' );
		}

		/**
		 * Register Settings
		 * 
		 * @since   0.1.0
		 * @access  public
		 */
		public function register_settings() {
			register_setting(
				'lubusin_theme_support',
				'lubusin_theme_support',
				array(
					'type'              => 'string',
					'description'       => __( 'Theme Support.', 'lts' ),
					'sanitize_callback' => 'sanitize_text_field',
					'show_in_rest'      => true,
					'default'           => ''
				)
			);
		}

		/**
		 * Load theme support
		 * 
		 * @since   0.1.0
		 * @access  public
		 */
		public function load_theme_support() {
			// Get settings
			$theme_support = json_decode(get_option( 'lubusin_theme_support' ));
			
			$colors = (array)$theme_support->colors->shades;
			$color_custom = $theme_support->colors->custom;

			$fontsizes = (array)$theme_support->fontsizes->sizes;
			$fontsizes_custom = $theme_support->fontsizes->custom;

			$block_styles = $theme_support->misc->defaultBlockStyles;
			$responsive_embeds = $theme_support->misc->responsiveEmbed;

			// General
			if( "normal" !== $wide_alignment ) {
				switch ( $wide_alignment ) {
					case 'wide':
							add_theme_support( 'align-wide' );
						break;
					
					case 'full':
							add_theme_support( 'align-full' );
						break;
				}
			}

			if( $block_styles ) {
				add_theme_support( 'wp-block-styles' );
			}

			if( $responsive_embeds ) {
				add_theme_support( 'responsive-embeds' );
			}

			// Colors
			if( $colors ) {
				add_theme_support( 'editor-color-palette', $colors );
			}

			if( $color_custom ) {
				add_theme_support( 'disable-custom-colors' );
			}

			// Fontsizes
			if( $fontsizes ) {
				add_theme_support( 'editor-font-sizes', $fontsizes );
			}

			if( $fontsizes_custom ) {
				add_theme_support( 'disable-custom-font-sizes' );
			}
		}

		/**
		 * Load editor styles
		 * 
		 * @since   0.1.0
		 * @access  public
		 */
		public function load_editor_styles() {
			// Get settings
			$theme_support = json_decode(get_option( 'lubusin_theme_support' ));

			$widths_main = $theme_support->widths->main;
			$widths_wide = $theme_support->widths->wide;
			$widths_full = $theme_support->widths->full;

			echo sprintf( '<style>
								/* Main column width */
								.wp-block {
									max-width: %s;
								}
								
								/* Width of "wide" blocks */
								.wp-block[data-align="wide"] {
									max-width: %s;
								}
								
								/* Width of "full-wide" blocks */
								.wp-block[data-align="full"] {
									max-width: %s;
								}
							</style>',
							$widths_main,
							$widths_wide,
							$widths_full

						);
			// Load custom css
			$this->load_styles();
		}

		/**
		 * Load styles for colors and fontsizes
		 * 
		 * @since   0.1.0
		 * @access  public
		 */
		public function load_styles() {
			// Get settings
			$theme_support = json_decode(get_option( 'lubusin_theme_support' ));

			$colors = (array)$theme_support->colors->shades;
			$fontsizes = (array)$theme_support->fontsizes->sizes;
	
			$color_styles = "";
			$fontsize_styles = "";

			foreach ($colors as $color) {
				$color_styles .= sprintf( '.has-%1$s-background-color { background-color: %2$s; }
				
										   .has-%1$s-color { color: %2$s; }',
											$color->slug,
											$color->color 
				 						);
			}

			foreach ($fontsizes as $fontsize) {
				$fontsize_styles .= sprintf( '.has-%1$s-font-size { font-size: %2$s; }',
												$fontsize->slug,
												$fontsize->size
											);
			}

			$custom_css = sprintf( '<style type="text/css">
										/* For colors */
										%s
										
										/* For fontsizes */
										%s
									</style>',
									$color_styles,
									$fontsize_styles
								);
			echo $custom_css;			
		}
	}

endif;

LubusIN_Theme_Support::get_instance();
