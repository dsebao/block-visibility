/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl, Disabled, Slot } from '@wordpress/components';

/**
 * Internal dependencies
 */
import links from './../../../utils/links';
import { InformationPopover } from './../../../components';

/**
 * Renders the visibility control settings.
 *
 * @since 1.4.0
 * @param {Object} props All the props passed to this function
 */
export default function UserRole( props ) {
	const { visibilityControls, setVisibilityControls } = props;

	// Manually set defaults, this ensures the main settings function properly
	const enable = visibilityControls?.visibility_by_role?.enable ?? true; // eslint-disable-line
	const enableUserRoles = visibilityControls?.visibility_by_role?.enable_user_roles ?? true; // eslint-disable-line
	const enableUsers = visibilityControls?.visibility_by_role?.enable_users ?? true; // eslint-disable-line
	const enableUserRuleSets = visibilityControls?.visibility_by_role?.enable_user_rule_sets ?? true; // eslint-disable-line

	let enableUserRolesElement = (
		<ToggleControl
			label={ __(
				'Enable individual user role restrictions (Administrator, Editor, Subscriber, etc.)',
				'block-visibility'
			) }
			checked={ enableUserRoles }
			onChange={ () => {
				setVisibilityControls( {
					...visibilityControls,
					visibility_by_role: {
						...visibilityControls.visibility_by_role,
						enable_user_roles: ! enableUserRoles,
					},
				} );
			} }
		/>
	);

	let enableUsersElement = (
		<ToggleControl
			label={ __(
				'Enable individual user restrictions.',
				'block-visibility'
			) }
			checked={ enableUsers }
			onChange={ () => {
				setVisibilityControls( {
					...visibilityControls,
					visibility_by_role: {
						...visibilityControls.visibility_by_role,
						enable_users: ! enableUsers,
					},
				} );
			} }
		/>
	);

	let enableUserRuleSetsElement = (
		<ToggleControl
			label={ __(
				'Enable advanced user role restrictions (User rule sets)',
				'block-visibility'
			) }
			checked={ enableUserRuleSets }
			onChange={ () => {
				setVisibilityControls( {
					...visibilityControls,
					visibility_by_role: {
						...visibilityControls.visibility_by_role,
						enable_user_rule_sets: ! enableUserRuleSets,
					},
				} );
			} }
		/>
	);

	if ( ! enable ) {
		enableUserRolesElement = (
			<Disabled>{ enableUserRolesElement }</Disabled>
		);
		enableUsersElement = <Disabled>{ enableUsersElement }</Disabled>;
		enableUserRuleSetsElement = (
			<Disabled>{ enableUserRuleSetsElement }</Disabled>
		);
	}

	return (
		<div className="settings-panel">
			<div className="settings-panel__header">
				<span className="settings-panel__header-title">
					{ __( 'User Role', 'block-visibility' ) }
				</span>
			</div>
			<div className="settings-panel__container">
				<div className="settings-type__toggle has-info-popover">
					<ToggleControl
						label={ __(
							'Enable the User Role controls.',
							'block-visibility'
						) }
						checked={ enable }
						onChange={ () => {
							setVisibilityControls( {
								...visibilityControls,
								visibility_by_role: {
									...visibilityControls.visibility_by_role,
									enable: ! enable,
								},
							} );
						} }
					/>
					<InformationPopover
						message={ __(
							'The User Role control allows you to conditionally display blocks based on whether a user is logged-in, logged-out, and more.',
							'block-visibility'
						) }
						link={ links.settingsUserRole }
					/>
				</div>
				<div className="settings-type__toggle first has-info-popover subsetting">
					{ enableUserRolesElement }
					<InformationPopover
						message={ __(
							'Restrict visibility by any user role (Administrator, Editor, Subscriber, etc.). Roles added by third-party plugins will also be available to choose from.',
							'block-visibility'
						) }
						link={ links.settingsUserRole }
					/>
				</div>
				<div className="settings-type__toggle has-info-popover subsetting">
					{ enableUsersElement }
					<InformationPopover
						message={ __(
							'Restrict visibility to specific individual users on your website based on user ID. You can select multiple users at once.',
							'block-visibility'
						) }
						link={ links.settingsUserRole }
					/>
				</div>
				<div className="settings-type__toggle has-info-popover subsetting">
					{ enableUserRuleSetsElement }
					<InformationPopover
						message={ __(
							'This functionality allows you to create user-based rule sets, which provide extensive configuration options and greater flexibility.',
							'block-visibility'
						) }
						link={ links.settingsUserRole }
					/>
				</div>
				<Slot name="VisibilityByRoleControls" />
			</div>
		</div>
	);
}
