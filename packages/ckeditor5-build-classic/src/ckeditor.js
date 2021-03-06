/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Link from '@ckeditor/ckeditor5-link/src/link';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';

import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	RemoveFormat,
	Heading,
	Paragraph,
	Bold,
	Italic,
	Underline,
	Alignment,
	Indent,
	HorizontalLine,
	HtmlEmbed,
	Link,
	AutoLink,
	ListStyle,
	SpecialCharacters,
	SpecialCharactersCurrency,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	Image,
	ImageInsert,
	ImageToolbar,
	ImageStyle,
	ImageResize,
	LinkImage,
	SimpleUploadAdapter
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'removeFormat',
			'|',
			'heading',
			'bold',
			'italic',
			'underline',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'alignment',
			'|',
			'imageInsert',
			'insertTable',
			'horizontalLine',
			'specialCharacters',
			'htmlEmbed',
			'|',
			'undo',
			'redo'
		]
	},
	table: {
        contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
    },
    simpleUpload: {
        uploadUrl: '/ckeditor/upload',
        headers: {
            'X-CSRF-TOKEN': 'CSRF-Token'
        }
    },
    image: {
    	styles: [
            'alignLeft', 'alignCenter', 'alignRight'
        ],
        resizeOptions: [
            {
                name: 'imageResize:original',
                label: 'Original',
                value: null
            },
            {
                name: 'imageResize:25',
                label: '25%',
                value: '25'
            },
            {
                name: 'imageResize:50',
                label: '50%',
                value: '50'
            },
            {
                name: 'imageResize:75',
                label: '75%',
                value: '75'
            }
        ],
        toolbar: [
            'imageStyle:alignLeft',
            'imageStyle:alignCenter',
            'imageStyle:alignRight',
            '|',
            'imageResize',
            '|',
            'linkImage'
        ]
	},
	language: 'en'
};
