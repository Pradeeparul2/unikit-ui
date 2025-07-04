import { Link, RichTextEditor } from '@pradeeparul2/mantine-tiptap';
import { BubbleMenu, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useEditor, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor, Link } from '@pradeeparul2/mantine-tiptap';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: '<p>Select some text to see bubble menu</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      {editor && (
        <BubbleMenu editor={editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Link />
          </RichTextEditor.ControlsGroup>
        </BubbleMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`;

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: '<p>Select some text to see bubble menu</p>',
  });

  return (
    <RichTextEditor editor={editor}>
      {editor && (
        <BubbleMenu editor={editor}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Link />
          </RichTextEditor.ControlsGroup>
        </BubbleMenu>
      )}
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export const bubbleMenu: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
