import { Controller, UseControllerProps } from 'react-hook-form';
import i18next from 'i18next';
import { Editor, IAllProps } from '@tinymce/tinymce-react';
import { Editor as EditorType } from 'tinymce';

// TinyMCE so the global var exists
import '../../vendors/tinymce/tinymce.min.js';
// DOM model
import '../../vendors/tinymce/models/dom/model.min.js';
// Theme
import '../../vendors/tinymce/themes/silver/theme.min.js';
// Toolbar icons
import '../../vendors/tinymce/icons/default/icons.min.js';
// Editor styles
import '../../vendors/tinymce/skins/ui/oxide/skin.min.js';

// importing the plugin index.js file.
// if you use a plugin that is not listed here the editor will fail to load
import '../../vendors/tinymce/plugins/advlist';
import '../../vendors/tinymce/plugins/anchor';
import '../../vendors/tinymce/plugins/autolink';
import '../../vendors/tinymce/plugins/autoresize';
import '../../vendors/tinymce/plugins/autosave';
import '../../vendors/tinymce/plugins/charmap';
import '../../vendors/tinymce/plugins/code';
import '../../vendors/tinymce/plugins/codesample';
import '../../vendors/tinymce/plugins/directionality';
import '../../vendors/tinymce/plugins/emoticons';
import '../../vendors/tinymce/plugins/fullscreen';
import '../../vendors/tinymce/plugins/help';
import '../../vendors/tinymce/plugins/image';
import '../../vendors/tinymce/plugins/importcss';
import '../../vendors/tinymce/plugins/insertdatetime';
import '../../vendors/tinymce/plugins/link';
import '../../vendors/tinymce/plugins/lists';
import '../../vendors/tinymce/plugins/media';
import '../../vendors/tinymce/plugins/nonbreaking';
import '../../vendors/tinymce/plugins/pagebreak';
import '../../vendors/tinymce/plugins/preview';
import '../../vendors/tinymce/plugins/quickbars';
import '../../vendors/tinymce/plugins/save';
import '../../vendors/tinymce/plugins/searchreplace';
import '../../vendors/tinymce/plugins/table';
import '../../vendors/tinymce/plugins/visualblocks';
import '../../vendors/tinymce/plugins/visualchars';
import '../../vendors/tinymce/plugins/wordcount';

// importing plugin resources
import '../../vendors/tinymce/plugins/emoticons/js/emojis.js';

// Content styles, including inline UI like fake cursors
import '../../vendors/tinymce/skins/content/default/content.js';
import '../../vendors/tinymce/skins/ui/oxide/content.js';

type Props = UseControllerProps & {
  editorProps?: IAllProps;
  onEditorChange?: (value: string, editor: EditorType) => string;
  onInit?: (event: any, editor: EditorType) => void;
  handleBlur?: Function;
  hideModalButtons?: boolean; // some toolbar buttons don't work when tinymce is rendered on a modal
  simplifyEditor?: boolean;
  disabled?: boolean;
  placeholder?: string;
  imagesUploadHandler: any;
  addVideoEditorPlugin: Function;
  tinyKey: string;
  fontsURL: string;
};

const transformPaste = (elem: any) => {
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

function FormRichEditor({
  editorProps,
  onEditorChange = value => value,
  onInit = () => null,
  handleBlur,
  hideModalButtons,
  simplifyEditor = false,
  placeholder,
  disabled = false,
  imagesUploadHandler,
  addVideoEditorPlugin,
  tinyKey,
  fontsURL,
  ...props
}: Props) {
  const allEditorProps: IAllProps = {
    ...editorProps,
    init: {
      language: i18next.language,
      menubar: false,
      height: 500,
      elementpath: false,
      contextmenu: false,
      branding: false,
      placeholder,
      statusbar: !simplifyEditor,
      resize: !simplifyEditor,
      max_height: simplifyEditor ? 180 : undefined,
      plugins: simplifyEditor
        ? 'lists'
        : 'image media lists link charmap emoticons table anchor videoupload',
      toolbar: simplifyEditor
        ? 'bold italic underline strikethrough | bullist numlist'
        : `undo redo | bold italic underline forecolor backcolor removeformat | fontfamily fontsize styles | alignleft aligncenter alignright alignjustify | numlist bullist | outdent indent | charmap emoticons${hideModalButtons ? '' : '| anchor link media image videoupload'}| table`,
      font_family_formats: simplifyEditor
        ? ''
        : 'Andale Mono=andale mono; Arial=arial; Arial Black=arial black; Book Antiqua=book antiqua; Comic Sans MS=comic sans ms; Courier New=courier new; Georgia=georgia; Helvetica=helvetica; Impact=impact; Ogi Sans=ogilvy sans web; Ogi Serif=ogilvy serif web; Tahoma=tahoma; Terminal=terminal; Times New Roman=times new roman; Trebuchet MS=trebuchet ms; Verdana=verdana; Darker Grotesque=darker grotesque; Work Sans=work sans; Montserrat=montserrat; Abril Fatface=abril fatface; Satisfy=satisfy; Lato=lato; Poppins=poppins; Ludicrous=ludicrous; Nunito=nunito; MavenPro=maven pro', // custom fonts
      content_style: `
      @import url(${fontsURL});
      body { font-family: arial; overflow-x: hidden; }
      `,
      toolbar_mode: 'wrap',
      images_upload_handler: imagesUploadHandler,
      setup: ({ editorManager }) => addVideoEditorPlugin(editorManager),
      link_target_list: false, // dont ask whether it should open the link in a new window
      link_title: false, // dont ask for link alt title
      media_alt_source: false, // dont ask for media alt source
      media_poster: false, // dont ask for media poster
      media_dimensions: false, // dont ask for media source
      paste_remove_styles_if_webkit: false, // dont remove fontfamily when pasting in chrome/safari
      paste_postprocess: (editor, args) => {
        transformPaste(args.node);
      },
      table_default_styles: {
        display: 'block',
        'overflow-x': 'auto',
        'border-collapse': 'collapse',
      },
      ...(editorProps?.init || {}),
    },
  };

  const handleEditorChange =
    (onChange: Function) => (value: string, editor: EditorType) => {
      onChange(onEditorChange(value, editor));
    };

  return (
    <Controller
      render={({ field: { onChange, ...field } }) => (
        <Editor
          {...field}
          onEditorChange={handleEditorChange(onChange)}
          onInit={onInit}
          {...allEditorProps}
          apiKey={'gpl'}
          onBlur={() => (handleBlur ? handleBlur(field.value) : null)}
          disabled={disabled}
        />
      )}
      {...props}
    />
  );
}

export default FormRichEditor;
