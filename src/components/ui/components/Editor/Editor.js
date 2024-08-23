import { $getRoot, $getSelection } from 'lexical';
import { useEffect, useState } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { CodeNode, CodeHighlightNode } from '@lexical/code';
import { TableNode, TableCellNode, TableRowNode } from '@lexical/table';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { TRANSFORMERS } from '@lexical/markdown';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import classNames from '@/lib/classNames';

import EditorTheme from './EditorTheme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import AutoLinkPlugin from './plugins/AutoLinkPlugin';
import './editor.css';
import TreeViewPlugin from './plugins/TreeViewPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ImageNode } from './Nodes/ImageNode';
import ImagesPlugin from './plugins/ImagePlugin';
import EmojisPlugin from './plugins/EmojisPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import KeywordsPlugin from './plugins/KeywordsPlugin';
import MentionsPlugin from './plugins/MentionsPlugin';
import { EmojiNode } from './Nodes/EmojiNode';
import { MentionNode } from './Nodes/MentionNode';
import { KeywordNode } from './Nodes/KeywordNode';
import { HashtagNode } from '@lexical/hashtag';
import { useSettings } from './context/SettingsContext';
import { useSharedHistoryContext } from './context/SharedHistoryContext';
import Placeholder from './ui/Placeholder';

function onError(error) {
	throw error;
}
const editorConfig = {
	theme: EditorTheme,
	namespace: 'MyEditor',
	onError,
	nodes: [
		HeadingNode,
		ListNode,
		ListItemNode,
		QuoteNode,
		CodeNode,
		CodeHighlightNode,
		TableNode,
		TableCellNode,
		TableRowNode,
		AutoLinkNode,
		LinkNode,
		ImageNode,
		EmojiNode,
		MentionNode,
		KeywordNode,
		HashtagNode,
	],
};

const Editor = (props) => {
	const { value, onChange } = props;
	const [isLinkEditMode, setIsLinkEditMode] = useState(false);
	const { historyState } = useSharedHistoryContext();
	const {
		settings: {
			isCollab,
			isAutocomplete,
			isMaxLength,
			isCharLimit,
			isCharLimitUtf8,
			isRichText,
			showTreeView,
			showTableOfContents,
			shouldUseLexicalContextMenu,
			tableCellMerge,
			tableCellBackgroundColor,
		},
	} = useSettings();
	const editable = props.editable ?? true;
	// const isEditable = useLexicalEditable();
	const text = isCollab;
	//   ? "Enter some collaborative rich text..."
	//   : isRichText
	//   ? "Enter some rich text..."
	//   : "Enter some plain text...";
	const placeholder = <Placeholder>{text}</Placeholder>;

	return (
		<div className='editor rounded-md'>
			<LexicalComposer initialConfig={editorConfig}>
				<div className='editor-container hover:border-emphasis focus-within:ring-brand-default rounded-md p-0 focus-within:ring-2'>
					<ToolbarPlugin
						getText={props.getText}
						setText={props.setText}
						editable={true}
						excludedToolbarItems={props.excludedToolbarItems}
						updateTemplate={props.updateTemplate}
						firstRender={props.firstRender}
						setFirstRender={props.setFirstRender}
					/>
					<div className={classNames('editor-inner scroll-bar', !editable && '!bg-subtle')} style={{ height: props.height }}>
						<RichTextPlugin
							contentEditable={<ContentEditable readOnly={!editable} style={{ height: props.height }} className='editor-input' />}
							placeholder={props?.placeholder ? <div className='text-muted -mt-11 p-3 text-sm'>{props.placeholder}</div> : null}
							ErrorBoundary={LexicalErrorBoundary}
						/>
						<ListPlugin />
						<LinkPlugin />
						<ImagesPlugin />
						<AutoLinkPlugin />
						<HistoryPlugin />
						<MentionsPlugin />
						<EmojisPlugin />
						<HashtagPlugin />
						<KeywordsPlugin />
						<MarkdownShortcutPlugin
							transformers={
								props.disableLists
									? TRANSFORMERS.filter((value, index) => {
											if (index !== 3 && index !== 4) return value;
										})
									: TRANSFORMERS
							}
						/>
					</div>
				</div>
			</LexicalComposer>
		</div>
		// <>
		//   {isRichText && <ToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} />}
		//   <div
		//     className={`editor-container ${showTreeView ? "tree-view" : ""} ${
		//       !isRichText ? "plain-text" : ""
		//     }`}
		//   >
		//     {isMaxLength && <MaxLengthPlugin maxLength={30} />}

		//     <MentionsPlugin />
		//     <EmojisPlugin />
		//     <HashtagPlugin />
		//     <KeywordsPlugin />
		//     {/* {!isEditable && <LexicalClickableLinkPlugin />} */}
		//     {isRichText ? (
		//       <>
		//         {isCollab ? (
		//           <CollaborationPlugin
		//             id="main"
		//             providerFactory={createWebsocketProvider}
		//             shouldBootstrap={!skipCollaborationInit}
		//           />
		//         ) : (
		//           <HistoryPlugin externalHistoryState={historyState} />
		//         )}
		//         <RichTextPlugin
		//           contentEditable={
		//             <div className="editor-scroller">
		//               <div className="editor">
		//                 <ContentEditable />
		//               </div>
		//             </div>
		//           }
		//           placeholder={placeholder}
		//           ErrorBoundary={LexicalErrorBoundary}
		//         />

		//         <ImagesPlugin />
		//       </>
		//     ) : (
		//       <>
		//         <HistoryPlugin externalHistoryState={historyState} />
		//       </>
		//     )}
		//   </div>
		//   {showTreeView && <TreeViewPlugin />}
		// </>
	);
};

export default Editor;
