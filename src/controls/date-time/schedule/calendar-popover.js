/**
 * WordPress dependencies
 */
import { DateTimePicker, Popover } from '@wordpress/components';
import { __experimentalGetSettings } from '@wordpress/date'; // eslint-disable-line

/**
 * Renders the popover for the date/time calender input
 *
 * @since 1.1.0
 * @param {Object} props All the props passed to this function
 * @return {string}		 Return the rendered JSX
 */
export default function CalendarPopover( props ) {
	const { label, currentDate, onDateChange, isOpen, setAttribute, pickerType, setPickerType } = props;
	const dateSettings = __experimentalGetSettings();

	// To know if the current time format is a 12 hour time, look for "a".
	// Also make sure this "a" is not escaped by a "/".
	const is12Hour = /a(?!\\)/i.test(
		dateSettings.formats.time
			.toLowerCase() // Test only for the lower case "a".
			.replace( /\\\\/g, '' ) // Replace "//" with empty strings.
			.split( '' )
			.reverse()
			.join( '' ) // Reverse the string and test for "a" not followed by a slash.
	);

	return (
		<Popover
			className="block-visibility__date-time-popover"
			onClose={ isOpen.bind( null, false ) }
		>
			<div className="date-time-popover__header">
				<h2>{ label }</h2>

			</div>
			<DateTimePicker
				currentDate={ currentDate }
				onChange={ ( date ) => {
					setAttribute( pickerType, date );
				} }
				is12Hour={ is12Hour }
				__nextRemoveHelpButton={ true }
				__nextRemoveResetButton={ true }
			/>
		</Popover>
	);
}
