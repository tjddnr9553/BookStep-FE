import styles from '@/components/bookDetail/editor.module.scss'
import React, { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { Bold, Italic, Strike, SelectedDot, AlignLeft, AlignCenter, AlignRight, Highlighter } from '@/components/icons/customIcons'

interface EditorProps {
  category: string;
  onClose: () => void;
}

export default function Editor({ category, onClose }: EditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const sizeSelectorRef = useRef<HTMLDivElement>(null)
  const [showSizeSelector, setShowSizeSelector] = useState<boolean>(false)

  useClickAway(editorRef, () => {
    onClose()
  })

  useClickAway(sizeSelectorRef, () => {
    setShowSizeSelector(false)
  })

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
    ],
    content: `
      내용
    `,
  })
  if (!editor) return

  const EditorTools = () => {
    return (
      <div className={styles.tools}>
        <div className={styles.sizeSelectorWrapper} onClick={() => setShowSizeSelector(true)} ref={sizeSelectorRef}>
          <div className={styles.sizeSelectorText}>가</div>
          {showSizeSelector &&
            <div className={styles.sizeSelector}>
              <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                      className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
                <h1>제목</h1>
              </button>
              <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                      className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
                <h2>머리말</h2>
              </button>
              <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                      className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
                <h3>부머리말</h3>
              </button>
              <button onClick={() => editor.chain().focus().setParagraph().run()}
                      className={editor.isActive('paragraph') ? 'is-active' : ''}>
                <h4>본문</h4>
              </button>
            </div>
          }
        </div>

        <hr className={styles.divider} />

        <button onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}>
          <Bold width={1} height={1} />
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}>
          <Italic width={1} height={1} />
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}>
          <Strike width={1} height={1} />
        </button>

        <hr className={styles.divider} />


        <button onClick={() => editor.chain().focus().setTextAlign('left').run()}
                className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
          <AlignLeft width={1} height={1} />
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()}
                className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
          <AlignCenter width={1} height={1} />
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()}
                className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
          <AlignRight width={1} height={1} />
        </button>
        {/*<button onClick={() => editor.chain().focus().setTextAlign('justify').run()}*/}
        {/*        className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>*/}
        {/*  Justify*/}
        {/*</button>*/}

        <hr className={styles.divider} />

        <button onClick={() => editor.chain().focus().toggleHighlight().run()}
                className={editor.isActive('highlight') ? 'is-active' : ''}>
          <Highlighter width={1} height={1} />
        </button>
      </div>
    )
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.container} ref={editorRef}>
        <div className={styles.header}>
          <div className={styles.bookmarkTitle}><SelectedDot width={0.5} height={0.5} />{category}</div>
          <EditorTools />
        </div>
        <div className={styles.content}>
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  )
}
