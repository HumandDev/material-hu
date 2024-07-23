var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Controller } from 'react-hook-form';
import i18next from 'i18next';
import { Editor } from '@tinymce/tinymce-react';
// https://www.tiny.cloud/docs/tinymce/latest/react-zip-bundle/
// TinyMCE so the global var exists
import 'tinymce/tinymce';
// DOM model
import 'tinymce/models/dom/model';
// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin';
// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/help/js/i18n/keynav/en';
import 'tinymce/plugins/help/js/i18n/keynav/es';
import 'tinymce/plugins/help/js/i18n/keynav/pt_BR';
import 'tinymce/plugins/image';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';
// importing plugin resources
import 'tinymce/plugins/emoticons/js/emojis';
// Content styles, including inline UI like fake cursors
import 'tinymce/skins/content/default/content';
import 'tinymce/skins/ui/oxide/content';
const transformPaste = (elem) => {
    const elementIsTable = elem.tagName.toLowerCase() === 'table';
    const elementIsList = ['ul', 'ol'].includes(elem.tagName.toLowerCase());
    elem.style.width = 'auto';
    if (elementIsTable) {
        elem.style.display = 'block';
        elem.style['overflow-x'] = 'auto';
    }
    if (elementIsList) {
        elem.style['overflow-x'] = 'auto';
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const item of elem.children) {
        // foreach doesnt work here https://stackoverflow.com/a/22754453
        transformPaste(item);
    }
};
function FormRichEditor(_a) {
    var { editorProps, onEditorChange = value => value, onInit = () => null, handleBlur, hideModalButtons, simplifyEditor = false, placeholder, disabled = false, imagesUploadHandler, addVideoEditorPlugin, fontsURL } = _a, props = __rest(_a, ["editorProps", "onEditorChange", "onInit", "handleBlur", "hideModalButtons", "simplifyEditor", "placeholder", "disabled", "imagesUploadHandler", "addVideoEditorPlugin", "fontsURL"]);
    const allEditorProps = Object.assign(Object.assign({}, editorProps), { init: Object.assign({ language: i18next.language, menubar: false, height: 500, elementpath: false, contextmenu: false, branding: false, placeholder, statusbar: !simplifyEditor, resize: !simplifyEditor, max_height: simplifyEditor ? 180 : undefined, plugins: simplifyEditor
                ? 'lists'
                : 'image media lists link charmap emoticons table anchor videoupload', toolbar: simplifyEditor
                ? 'bold italic underline strikethrough | bullist numlist'
                : `undo redo | bold italic underline forecolor backcolor removeformat | fontfamily fontsize styles | alignleft aligncenter alignright alignjustify | numlist bullist | outdent indent | charmap emoticons${hideModalButtons ? '' : '| anchor link media image videoupload'}| table`, font_family_formats: simplifyEditor
                ? ''
                : 'Andale Mono=andale mono; Arial=arial; Arial Black=arial black; Book Antiqua=book antiqua; Comic Sans MS=comic sans ms; Courier New=courier new; Georgia=georgia; Helvetica=helvetica; Impact=impact; Ogi Sans=ogilvy sans web; Ogi Serif=ogilvy serif web; Tahoma=tahoma; Terminal=terminal; Times New Roman=times new roman; Trebuchet MS=trebuchet ms; Verdana=verdana; Darker Grotesque=darker grotesque; Work Sans=work sans; Montserrat=montserrat; Abril Fatface=abril fatface; Satisfy=satisfy; Lato=lato; Poppins=poppins; Ludicrous=ludicrous; Nunito=nunito; MavenPro=maven pro', content_style: `
      @import url(${fontsURL});
      body { font-family: arial; overflow-x: hidden; }
      `, toolbar_mode: 'wrap', images_upload_handler: imagesUploadHandler, setup: ({ editorManager }) => addVideoEditorPlugin(editorManager), link_target_list: false, link_title: false, media_alt_source: false, media_poster: false, media_dimensions: false, paste_remove_styles_if_webkit: false, paste_postprocess: (editor, args) => {
                transformPaste(args.node);
            }, table_default_styles: {
                display: 'block',
                'overflow-x': 'auto',
                'border-collapse': 'collapse',
            } }, ((editorProps === null || editorProps === void 0 ? void 0 : editorProps.init) || {})) });
    const handleEditorChange = (onChange) => (value, editor) => {
        onChange(onEditorChange(value, editor));
    };
    return (_jsx(Controller, Object.assign({ render: (_a) => {
            var _b = _a.field, { onChange } = _b, field = __rest(_b, ["onChange"]);
            return (_jsx(Editor, Object.assign({}, field, { onEditorChange: handleEditorChange(onChange), onInit: onInit }, allEditorProps, { apiKey: 'gpl', onBlur: () => (handleBlur ? handleBlur(field.value) : null), disabled: disabled })));
        } }, props)));
}
export default FormRichEditor;
