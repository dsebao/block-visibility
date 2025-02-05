/**
 * External dependencies
 */
import { assign, omit } from 'lodash';

/**
 * WordPress dependencies
 */
import { speak } from '@wordpress/a11y';
import { __, sprintf } from '@wordpress/i18n';
import {
	DropdownMenu,
	MenuGroup,
	MenuItem,
	Slot,
	withFilters,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { Icon, moreVertical, check, plus } from '@wordpress/icons';

// Provides an entry point to slot in additional settings. Must be placed
// outside of function to avoid unnecessary rerenders.
const AdditionalControlSetOptions = withFilters(
	'blockVisibility.addControlSetOptions'
)( ( props ) => <></> ); // eslint-disable-line

const AdditionalControlSetModals = withFilters(
	'blockVisibility.addControlSetModals'
)( ( props ) => <></> ); // eslint-disable-line

/**
 * Render the control set header.
 *
 * @since 1.6.0
 * @param {Object} props All the props passed to this function
 */
export default function ControlsPanelHeader( props ) {
	const [ modalOpen, setModalOpen ] = useState( false );
	const {
		activeControls,
		attributes,
		setAttributes,
		enabledControls,
		controlSetAtts,
		setControlSetAtts,
	} = props;

	const blockAtts = attributes?.blockVisibility ?? {};
	const defaultControls = enabledControls.filter(
		( control ) => control.isDefault
	);

	// Detect whether default controls have edits. Used to determine
	// whether the reset button should be enabled.
	defaultControls.forEach( ( control ) => {
		if (
			control.attributeSlug === 'hideBlock' ||
			control.attributeSlug === 'visibilityPresets'
		) {
			control.hasEdits = blockAtts.hasOwnProperty(
				control.attributeSlug
			);
		} else {
			control.hasEdits = controlSetAtts?.controls?.hasOwnProperty(
				control.attributeSlug
			);
		}
	} );

	const coreControls = enabledControls.filter(
		( control ) => control.type !== 'integration' && ! control.isDefault
	);
	const integrationControls = enabledControls.filter(
		( control ) => control.type === 'integration' && ! control.isDefault
	);

	function toggleControls( control, type ) {
		if (
			control.attributeSlug === 'hideBlock' ||
			control.attributeSlug === 'visibilityPresets'
		) {
			// Handle the Hide Block and Visibility Preset separately.
			if (
				control.hasEdits ||
				( control.isActive && ! control.isDefault )
			) {
				setAttributes( {
					blockVisibility: omit( { ...blockAtts }, [
						control.attributeSlug,
					] ),
				} );
			} else {
				setAttributes( {
					blockVisibility: assign(
						{ ...blockAtts },
						{
							[ control.attributeSlug ]:
								control.attributeSlug === 'hideBlock'
									? false
									: {},
						}
					),
				} );
			}
		} else if ( type === 'reset' ) {
			setControlSetAtts(
				assign(
					{ ...controlSetAtts },
					{
						controls: {
							...omit( { ...controlSetAtts.controls }, [
								control.attributeSlug,
							] ),
						},
					}
				)
			);
		} else {
			let newControls;

			if ( control.isActive ) {
				newControls = omit( { ...controlSetAtts.controls }, [
					control.attributeSlug,
				] );
			} else {
				newControls = assign(
					{ ...controlSetAtts.controls },
					{ [ control.attributeSlug ]: {} }
				);
			}

			setControlSetAtts(
				assign(
					{ ...controlSetAtts },
					{ controls: { ...newControls } }
				)
			);
		}
	}

	const canResetAll = [
		...defaultControls,
		...coreControls,
		...integrationControls,
	].some(
		( control ) =>
			( control.isActive && ! control.isDefault ) ||
			( control.isDefault && control.hasEdits )
	);

	const controlsDropdown = (
		<DropdownMenu
			className="controls-dropdown"
			icon={ activeControls.length === 0 ? plus : moreVertical }
			label={ __( 'Visibility Controls', 'block-visibility' ) }
			popoverProps={ {
				className:
					'block-visibility__control-popover visibility-controls',
				focusOnMount: 'container',
			} }
			toggleProps={ {
				isSmall: true,
				disabled: enabledControls.length === 0,
			} }
		>
			{ ( { onClose } ) => (
				<>
					{ defaultControls.length !== 0 && (
						<MenuGroup
							label={ __( 'Defaults', 'block-visibility' ) }
						>
							{ defaultControls.map( ( control, index ) => (
								<DefaultControlMenuItem
									key={ index }
									control={ control }
									toggleControls={ toggleControls }
								/>
							) ) }
						</MenuGroup>
					) }
					<MenuGroup label={ __( 'Controls', 'block-visibility' ) }>
						{ coreControls.map( ( control, index ) => (
							<ControlMenuItem
								key={ index }
								control={ control }
								toggleControls={ toggleControls }
							/>
						) ) }
					</MenuGroup>
					{ integrationControls.length !== 0 && (
						<MenuGroup
							label={ __( 'Integrations', 'block-visibility' ) }
						>
							{ integrationControls.map( ( control, index ) => (
								<ControlMenuItem
									key={ index }
									control={ control }
									toggleControls={ toggleControls }
								/>
							) ) }
						</MenuGroup>
					) }
					<MenuGroup>
						<Slot name="ControlSetOptionsToolsTop" />
						<MenuItem
							aria-disabled={ ! canResetAll }
							onClick={ () => {
								if ( canResetAll ) {
									setAttributes( {
										blockVisibility: undefined,
									} );
									speak(
										__(
											'All controls reset',
											'block-visibility'
										),
										'assertive'
									);
								}
							} }
							variant="tertiary"
						>
							{ __( 'Reset all', 'block-visibility' ) }
						</MenuItem>
						<Slot name="ControlSetOptionsToolsBottom" />
					</MenuGroup>
					<AdditionalControlSetOptions
						canResetAll={ canResetAll }
						coreControls={ coreControls }
						integrationControls={ integrationControls }
						modalOpen={ modalOpen }
						onClose={ onClose }
						setModalOpen={ setModalOpen }
						toggleControls={ toggleControls }
						{ ...props }
					/>
				</>
			) }
		</DropdownMenu>
	);

	return (
		<>
			<div className="controls-panel-header">
				<h2>{ __( 'Visibility', 'block-visibility' ) }</h2>
				<div className="controls-panel-header__dropdown-menus">
					{ controlsDropdown }
				</div>
			</div>
			{ modalOpen && (
				<ControlSetModals
					coreControls={ coreControls }
					integrationControls={ integrationControls }
					modalOpen={ modalOpen }
					setModalOpen={ setModalOpen }
					toggleControls={ toggleControls }
					{ ...props }
				/>
			) }
		</>
	);
}

/**
 * Render all Control Set modals.
 *
 * @since 2.1.1
 * @param {Object} props All the props passed to this function
 */
function ControlSetModals( props ) {
	return (
		<>
			<Slot name="ControlSetModals" />
			<AdditionalControlSetModals { ...props } />
		</>
	);
}

/**
 * Render a control menu item.
 *
 * @since 1.9.0
 * @param {Object} props All the props passed to this function
 */
function ControlMenuItem( props ) {
	const { control, toggleControls } = props;

	return (
		<MenuItem
			key={ control.attributeSlug }
			icon={ control.isActive && check }
			label={ sprintf(
				// translators: %s: The name of the control being toggled e.g. "Hide Block".
				__( 'Toggle %s', 'block-visibility' ),
				control.label
			) }
			onClick={ () => {
				toggleControls( control );
				speak(
					sprintf(
						// translators: %s: The name of the control being toggled e.g. "Hide Block".
						__( '%s toggled', 'block-visibility' ),
						control.label
					),
					'assertive'
				);
			} }
		>
			{ control.icon && (
				<Icon className="control-branding-icon" icon={ control.icon } />
			) }
			{ control.label }
		</MenuItem>
	);
}

/**
 * Render a default control menu item.
 *
 * @since 2.5.0
 * @param {Object} props All the props passed to this function
 */
function DefaultControlMenuItem( props ) {
	const { control, toggleControls } = props;

	if ( control.hasEdits ) {
		return (
			<MenuItem
				key={ control.attributeSlug }
				disabled={ ! control.hasEdits }
				className="has-reset"
				label={ sprintf(
					// translators: %s: The name of the control being reset e.g. "Hide Block".
					__( 'Reset %s', 'block-visibility' ),
					control.label
				) }
				onClick={ () => {
					toggleControls( control, 'reset' );
					speak(
						sprintf(
							// translators: %s: The name of the control being reset e.g. "Hide Block".
							__( '%s reset to default', 'block-visibility' ),
							control.label
						),
						'assertive'
					);
				} }
				role="menuitem"
			>
				{ control.icon && (
					<Icon
						className="control-branding-icon"
						icon={ control.icon }
					/>
				) }
				{ control.label }
				{ control.hasEdits && (
					<span aria-hidden="true" className="menu-item-reset">
						{ __( 'Reset', 'block-visibility' ) }
					</span>
				) }
			</MenuItem>
		);
	}

	return (
		<MenuItem
			aria-disabled
			isSelected
			key={ control.attributeSlug }
			role="menuitemcheckbox"
		>
			{ control.icon && (
				<Icon className="control-branding-icon" icon={ control.icon } />
			) }
			{ control.label }
		</MenuItem>
	);
}
