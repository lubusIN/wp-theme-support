<?php 
// if uninstall.php is not called by WordPress, die
if (!defined('WP_UNINSTALL_PLUGIN')) {
    die;
}
 
$option_name = 'lubusin_theme_support';
delete_option($option_name);
?>