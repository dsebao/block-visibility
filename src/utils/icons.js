/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/components';

/**
 * Plugin user interface icons
 */
const icons = {};

icons.logo = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<Path d="M128,0 C198.692448,0 256,57.307552 256,128 C256,198.692448 198.692448,256 128,256 C57.307552,256 0,198.692448 0,128 C0,57.307552 57.307552,0 128,0 Z M128,67 C88.7744776,67 54.0129388,90.9022691 39.4355448,126.649105 L39,127.735956 L39,128.264044 L39.4740036,129.445062 C54.0740078,165.139702 88.8089313,189 128,189 C167.225522,189 201.987061,165.097731 216.564455,129.350895 L217,128.264044 L217,127.735956 L216.525996,126.554938 C201.925992,90.8602984 167.191069,67 128,67 Z M128,88 C150.09139,88 168,105.90861 168,128 C168,150.09139 150.09139,168 128,168 C105.90861,168 88,150.09139 88,128 C88,105.90861 105.90861,88 128,88 Z M136,104 C127.163444,104 120,111.163444 120,120 C120,128.836556 127.163444,136 136,136 C144.836556,136 152,128.836556 152,120 C152,111.163444 144.836556,104 136,104 Z" />
	</SVG>
);

icons.error = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M13,17 L11,17 L11,15 L13,15 L13,17 Z M13,13 L11,13 L11,7 L13,7 L13,13 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);
icons.errorOutline = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M13,17 L11,17 L11,15 L13,15 L13,17 Z M13,13 L11,13 L11,7 L13,7 L13,13 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);
icons.trash = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M20,5.5 L14.3,5.5 C14.3,4.2 13.3,3.2 12,3.2 C10.7,3.2 9.7,4.2 9.7,5.5 L4,5.5 L4,7.5 L5.5,7.5 L5.5,7.8 L7.2,18.9 C7.3,19.9 8.2,20.6 9.2,20.6 L14.9,20.6 C15.9,20.6 16.7,19.9 16.9,18.9 L18.6,7.8 L18.6,7.5 L20,7.5 L20,5.5 Z M16.8,7.5 L15.1,18.6 C15.1,18.7 15,18.8 14.8,18.8 L9.1,18.8 C9,18.8 8.8,18.7 8.8,18.6 L7.2,7.5 L16.8,7.5 Z" />
	</SVG>
);
icons.warning = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M1,21 L23,21 L12,2 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);
icons.image = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z" />
	</SVG>
);
icons.replaceImage = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		width="20"
		height="20"
	>
		<rect x="11" y="3" width="7" height="5" rx="1"></rect>
		<rect x="2" y="12" width="7" height="5" rx="1"></rect>
		<Path d="M13,12h1a3,3,0,0,1-3,3v2a5,5,0,0,0,5-5h1L15,9Z" />
		<Path d="M4,8H3l2,3L7,8H6A3,3,0,0,1,9,5V3A5,5,0,0,0,4,8Z" />
	</SVG>
);
icons.link = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z" />
	</SVG>
);
icons.help = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M2,12 C2,6.48 6.48,2 12,2 C17.52,2 22,6.48 22,12 C22,17.52 17.52,22 12,22 C6.48,22 2,17.52 2,12 Z M12,20 C16.41,20 20,16.41 20,12 C20,7.59001 16.41,4.00002 12,4.00002 C7.59,4.00002 4,7.59001 4,12 C4,16.41 7.59,20 12,20 Z" />
		<polygon points="13 16 13 18 11 18 11 16"></polygon>
		<Path d="M8,10 C8,7.79 9.79,6 12,6 C14.21,6 16,7.79 16,10 C16,11.28291 15.21,11.97331 14.4408,12.6455 C13.711,13.2833 13,13.9046 13,15 L11,15 C11,13.1787 11.94212,12.4566 12.7704,11.82167 C13.4202,11.3236 14,10.87921 14,10 C14,8.9 13.1,8 12,8 C10.9,8 10,8.9 10,10 L8,10 Z" />
	</SVG>
);
icons.star = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<polygon points="12 17.7371778 5.81966011 21.5 7.49246652 14.4659011 2 9.75735421 9.2141911 9.1728642 12 2.5 14.7858089 9.1728642 22 9.75735421 16.5075335 14.4659011 18.1803399 21.5"></polygon>
	</SVG>
);
icons.school = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
	</SVG>
);
icons.support = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M19.46,9.12l-2.78,1.15 c-0.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78C16.98,5.35,18.65,7.02,19.46,9.12z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3 S13.66,15,12,15z M9.13,4.54l1.17,2.78c-1.38,0.5-2.47,1.59-2.98,2.97L4.54,9.13C5.35,7.02,7.02,5.35,9.13,4.54z M4.54,14.87 l2.78-1.15c0.51,1.38,1.59,2.46,2.97,2.96l-1.17,2.78C7.02,18.65,5.35,16.98,4.54,14.87z M14.88,19.46l-1.15-2.78 c1.37-0.51,2.45-1.59,2.95-2.97l2.78,1.17C18.65,16.98,16.98,18.65,14.88,19.46z" />
	</SVG>
);
icons.cloud = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M18.3529412,9.83333333 C20.4705882,10.0666667 22,11.8166667 22,13.9166667 C22,16.1333333 20.1176471,18 17.8823529,18 L6.11764706,18 C3.88235294,18 2,16.1333333 2,13.9166667 C2,11.8166667 3.52941176,10.1833333 5.64705882,9.83333333 C5.52941176,9.71666667 5.52941176,9.48333333 5.52941176,9.25 C5.52941176,7.61666667 6.82352941,6.33333333 8.47058824,6.33333333 C8.82352941,6.33333333 9.29411765,6.45 9.52941176,6.56666667 C10.3529412,5.05 11.8823529,4 13.7647059,4 C16.3529412,4 18.4705882,6.1 18.4705882,8.66666667 C18.4705882,9.13333333 18.3529412,9.48333333 18.3529412,9.83333333 Z" />
	</SVG>
);
icons.visibility = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M12,5 C17,5 21.27,8.11 23,12.5 C21.27,16.89 17,20 12,20 C7,20 2.73,16.89 1,12.5 C2.73,8.11 7,5 12,5 Z M12,17.5 C14.76,17.5 17,15.26 17,12.5 C17,9.74 14.76,7.5 12,7.5 C9.24,7.5 7,9.74 7,12.5 C7,15.26 9.24,17.5 12,17.5 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M12,9.5 C10.34,9.5 9,10.84 9,12.5 C9,14.16 10.34,15.5 12,15.5 C13.66,15.5 15,14.16 15,12.5 C15,10.84 13.66,9.5 12,9.5 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);
icons.visibilityHidden = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M19.1145976,17.6145976 C17.1357397,19.111758 14.6721169,20 12,20 C7,20 2.73,16.89 1,12.5 C2.1681438,9.53575071 4.49435577,7.15509483 7.42141271,5.92141271 L9.60854669,8.10854669 C8.05477185,8.95699413 7,10.6060682 7,12.5 C7,15.26 9.24,17.5 12,17.5 C13.8939318,17.5 15.5430059,16.4452281 16.3914533,14.8914533 L19.1145976,17.6145976 L19.1145976,17.6145976 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M20.6043865,16.2759593 L16.9972006,12.6687735 C16.9990619,12.6127432 17,12.5564805 17,12.5 C17,9.74 14.76,7.5 12,7.5 C11.9435195,7.5 11.8872568,7.50093805 11.8312265,7.50279942 L9.57740803,5.2489809 C10.3592736,5.08578831 11.1695684,5 12,5 C17,5 21.27,8.11 23,12.5 C22.4438856,13.9111805 21.6253071,15.1900957 20.6043865,16.2759593 L20.6043865,16.2759593 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M13.6675474,14.9959745 C13.1910334,15.314476 12.6176688,15.5 12,15.5 C10.34,15.5 9,14.16 9,12.5 C9,11.8823312 9.18552396,11.3089666 9.50402547,10.8324526 L2.66116524,3.98959236 C2.27064094,3.59906807 2.27064094,2.96590309 2.66116524,2.5753788 C3.05168953,2.18485451 3.68485451,2.18485451 4.0753788,2.5753788 L21.0459415,19.5459415 C21.4364658,19.9364658 21.4364658,20.5696308 21.0459415,20.9601551 C20.6554173,21.3506794 20.0222523,21.3506794 19.631728,20.9601551 L13.6675474,14.9959745 L13.6675474,14.9959745 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);
icons.visibilityAlt = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M12,16 C14.208,16 16,14.208 16,12 C16,9.792 14.208,8 12,8 C9.792,8 8,9.792 8,12 C8,14.208 9.792,16 12,16 Z M12,14.5 C10.6204271,14.5 9.5,13.3795729 9.5,12 C9.5,10.6204271 10.6204271,9.5 12,9.5 C13.3795729,9.5 14.5,10.6204271 14.5,12 C14.5,13.3795729 13.3795729,14.5 12,14.5 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M12,16 C14.208,16 16,14.208 16,12 C16,9.792 14.208,8 12,8 C9.792,8 8,9.792 8,12 C8,14.208 9.792,16 12,16 Z M12,14.5 C10.6204271,14.5 9.5,13.3795729 9.5,12 C9.5,10.6204271 10.6204271,9.5 12,9.5 C13.3795729,9.5 14.5,10.6204271 14.5,12 C14.5,13.3795729 13.3795729,14.5 12,14.5 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M12,4.5 C17,4.5 21.27,7.61 23,12 C21.27,16.39 17,19.5 12,19.5 C7,19.5 2.73,16.39 1,12 C2.73,7.61 7,4.5 12,4.5 Z M21.3473903,12 C19.6713562,8.45851492 16.065323,6.10714286 12,6.10714286 C7.934677,6.10714286 4.32864381,8.45851492 2.65260973,12 C4.32864381,15.5414851 7.934677,17.8928571 12,17.8928571 C16.065323,17.8928571 19.6713562,15.5414851 21.3473903,12 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);
icons.visibilityHiddenAlt = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M13.9708958,15.4810143 C13.389064,15.8113365 12.7164305,16 12,16 C9.792,16 8,14.208 8,12 C8,11.3082051 8.17591163,10.6572469 8.48541416,10.089446 L9.62711077,11.2115964 C9.54465452,11.4595008 9.5,11.7245863 9.5,12 C9.5,13.3795729 10.6204271,14.5 12,14.5 C12.2905966,14.5 12.5696948,14.4502864 12.8292449,14.3589089 L13.9708958,15.4810143 L13.9708958,15.4810143 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M15.8136867,13.2093721 L14.4986393,11.9168387 C14.4551273,10.5889421 13.3734522,9.52129787 12.040023,9.50031471 L10.7249635,8.20776951 C11.1254753,8.07302998 11.554261,8 12,8 C14.208,8 16,9.792 16,12 C16,12.4214718 15.9347055,12.8277859 15.8136867,13.2093721 L15.8136867,13.2093721 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M16.9542237,18.4124655 C15.4477475,19.1104464 13.7695931,19.5 12,19.5 C7,19.5 2.73,16.39 1,12 C1.83549245,9.87987753 3.26340063,8.05829526 5.0798477,6.74138281 L6.22058871,7.86259395 C4.69709513,8.8848633 3.45414836,10.3063369 2.65260973,12 C4.32864381,15.5414851 7.934677,17.8928571 12,17.8928571 C13.3051937,17.8928571 14.5630455,17.6504858 15.7248846,17.2041731 L16.9542237,18.4124655 L16.9542237,18.4124655 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M19.489889,16.8185998 L18.3656404,15.7135987 C19.6222382,14.7364947 20.6512781,13.4708955 21.3473903,12 C19.6713562,8.45851492 16.065323,6.10714286 12,6.10714286 C10.9730526,6.10714286 9.97541373,6.25718996 9.03079081,6.53856491 L7.75659725,5.28618597 C9.07339857,4.77839975 10.5040254,4.5 12,4.5 C17,4.5 21.27,7.61 23,12 C22.2539458,13.8931665 21.0355216,15.5482882 19.489889,16.8185998 L19.489889,16.8185998 Z"
			fill-rule="nonzero"
		/>
		<Path
			d="M2.72426842,4.42613185 L19.2242684,20.6436463 C19.5196795,20.9339998 19.9945355,20.9298999 20.2848891,20.6344888 C20.5752426,20.3390777 20.5711426,19.8642217 20.2757316,19.5738682 L3.77573158,3.35635373 C3.48032051,3.0660002 3.00546447,3.07010014 2.71511094,3.36551121 C2.42475741,3.66092228 2.42885735,4.13577832 2.72426842,4.42613185 Z"
			fill-rule="nonzero"
		/>
	</SVG>
);
icons.wpFusion = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M5.05263158,0 L24,0 L24,0 L24,18.9473684 C24,21.7378598 21.7378598,24 18.9473684,24 L0,24 L0,24 L0,5.05263158 C0,2.26214021 2.26214021,0 5.05263158,0 Z"
			fill="#E55B10"
		/>
		<Path
			d="M19.5789474,9.78947368 C19.5789474,10.3126908 19.1547961,10.7368421 18.6315789,10.7368421 L11.0526316,10.7362105 L11.0526316,18.3157895 C11.0526316,18.8390066 10.6284803,19.2631579 10.1052632,19.2631579 L9.47368421,19.2631579 C8.95046709,19.2631579 8.52631579,18.8390066 8.52631579,18.3157895 L8.52631579,9.47368421 C8.52631579,9.13121956 8.70802977,8.83119651 8.98029891,8.66477387 C9.14698598,8.39224029 9.44700903,8.21052632 9.78947368,8.21052632 L18.6315789,8.21052632 C19.1547961,8.21052632 19.5789474,8.63467762 19.5789474,9.15789474 L19.5789474,9.78947368 Z"
			fill="#FFFFFF"
		/>
		<Path
			d="M5.05263158,14.5263158 C5.05263158,14.0030987 5.47678287,13.5789474 6,13.5789474 L13.5789474,13.5795789 L13.5789474,6 C13.5789474,5.47678287 14.0030987,5.05263158 14.5263158,5.05263158 L15.1578947,5.05263158 C15.6811119,5.05263158 16.1052632,5.47678287 16.1052632,6 L16.1052632,14.8421053 C16.1052632,15.1845699 15.9235492,15.484593 15.65128,15.6510156 C15.484593,15.9235492 15.1845699,16.1052632 14.8421053,16.1052632 L6,16.1052632 C5.47678287,16.1052632 5.05263158,15.6811119 5.05263158,15.1578947 L5.05263158,14.5263158 Z"
			fill="#FFFFFF"
		/>
	</SVG>
);
icons.acf = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			d="M19.2,0 C21.8509668,0 24,2.1490332 24,4.8 L24,19.2 C24,21.8509668 21.8509668,24 19.2,24 L4.8,24 C2.1490332,24 0,21.8509668 0,19.2 L0,4.8 C0,2.1490332 2.1490332,0 4.8,0 L19.2,0 Z M6.89048872,7.2 L5.10930627,7.2 L1.24499674,16.9860194 L1.24732975,16.9866974 L1.2,17.1 L3.65563145,17.1 L4.2996,15.468 L7.7016,15.4704 L8.34587867,17.1 L10.8,17.1 L10.7526702,16.9866974 L10.7550033,16.9860194 L10.6063073,16.6130016 C11.2549234,16.9251163 11.9820385,17.1 12.75,17.1 C14.249715,17.1 15.5936573,16.433058 16.5014094,15.3795917 L16.5,17.1 L18.9,17.1 L18.9,13.5 L22.65,13.5 L22.65,11.1 L18.9,11.0988 L18.9,9.5988 L22.8,9.6 L22.8,7.2 L16.5,7.2 L16.5014746,8.92048398 C15.5937217,7.86697391 14.2497509,7.2 12.75,7.2 C10.6493455,7.2 8.85431186,8.50851842 8.13552383,10.3549305 L6.89048872,7.2 Z M12.75,9.48 C13.89314,9.48 14.8684898,10.1983951 15.2492094,11.2083452 L15.3135218,11.4010233 L16.5,11.4 L16.5,13.2012 L15.2051151,13.2011741 C14.8224969,14.0936466 13.9674734,14.7355294 12.9545886,14.8122785 L12.75,14.82 C11.2753997,14.82 10.08,13.6246003 10.08,12.15 C10.08,10.6753997 11.2753997,9.48 12.75,9.48 Z M6.0012,11.16 L6.8916,13.4172 L5.1108,13.416 L6.0012,11.16 Z"
			fill="#5DE8BF"
		/>
	</SVG>
);

export default icons;
