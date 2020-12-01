<?php
/**
 * Add assets for the block editor
 *
 * @package block-visibility
 * @since   1.0.0
 */

namespace BlockVisibility\Admin;

use function BlockVisibility\Utils\get_asset_file as get_asset_file;
use function BlockVisibility\Utils\get_user_roles as get_user_roles;

/**
 * Enqueue plugin specific editor scripts and styles
 *
 * @since 1.0.0
 */
function enqueue_editor_assets() {

	/**
	 * Since we are using admin_init, we need to make sure the js is only loaded
	 * on post edit, or new post screens.
	 *
	 * This will need to be adapted if we want to allow vsibility settings
	 * within full-site editing and whatnot.
	 */
	if ( ! is_edit_or_new_admin_page() ) {
		return;
	}

	// Scripts.
	$asset_file = get_asset_file( 'dist/block-visibility-editor' );

	wp_enqueue_script(
		'block-visibility-editor-scripts',
		BLOCK_VISIBILITY_PLUGIN_URL . 'dist/block-visibility-editor.js',
		array_merge( $asset_file['dependencies'], array( 'wp-api' ) ),
		$asset_file['version'],
		false // Need false to ensure our filters can target third-party plugins.
	);

	$plugin_variables = array(
		'version'     => BLOCK_VISIBILITY_VERSION,
		'settingsUrl' => BLOCK_VISIBILITY_SETTINGS_URL,
	);

	// Create a global variable to hold all our plugin variables and user roles,
	// not ideal, but does the trick for now...
	$stringified_editor_data  = 'const blockVisibilityUserRoles = ' . wp_json_encode( get_user_roles() ) . ';';
	$stringified_editor_data .= 'const blockVisibilityVariables = ' . wp_json_encode( $plugin_variables ) . ';';
	$stringified_editor_data .= 'const blockVisibilityFullControlMode = ' . wp_json_encode( is_full_control_mode() ) . ';';
	$stringified_editor_data .= 'const blockVisibilitySettings = ' . wp_json_encode( get_option( 'block_visibility_settings' ) ) . ';';

	$global_variables = array(
		'userRoles' 		=> get_user_roles(),
		'pluginVariables' 	=> $plugin_variables,
		'isFullControlMode' => is_full_control_mode(),
	);

	$stringified_global_variable = 'const blockVisibilityData = ' . wp_json_encode( $global_variables ) . ';';
	$stringified_editor_data .= $stringified_global_variable;

	wp_add_inline_script(
		'block-visibility-editor-scripts',
		$stringified_editor_data,
		'before'
	);

	// Styles.
	$asset_file = get_asset_file( 'dist/block-visibility-editor-styles' );

	wp_enqueue_style(
		'block-visibility-editor-styles',
		BLOCK_VISIBILITY_PLUGIN_URL . 'dist/block-visibility-editor-styles.css',
		array(),
		$asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor_assets' );



/**
 * Make sure we are either on a post edit screen, or new post screen.
 *
 * @since 1.0.0
 *
 * @return bool Returns true or false.
 */
function is_edit_or_new_admin_page() {
	global $pagenow;

	return (
		is_admin() &&
		( 'post.php' === $pagenow || 'post-new.php' === $pagenow )
	);
}

/**
 * See if we are in full control mode.
 *
 * @since 1.0.0
 *
 * @return bool Returns true or false.
 */
function is_full_control_mode() {
	$settings = get_option( 'block_visibility_settings' );

	if ( isset( $settings['plugin_settings']['enable_full_control_mode'] ) ) {
		return $settings['plugin_settings']['enable_full_control_mode'];
	} else {
		return false;
	}
}
