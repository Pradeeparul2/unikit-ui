import { useClipboard } from '@pradeeparul2/mantine-hooks';
import { CodeHighlightControl } from '../CodeHighlightControl/CodeHighlightControl';
import { CopyIcon } from './CopyIcon';

interface CopyCodeButtonProps {
  code: string;
  copiedLabel?: string;
  copyLabel?: string;
}

export function CopyCodeButton({
  code,
  copyLabel = 'Copy',
  copiedLabel = 'Copied',
}: CopyCodeButtonProps) {
  const clipboard = useClipboard();

  return (
    <CodeHighlightControl
      onClick={() => clipboard.copy(code.trim())}
      variant="none"
      tooltipLabel={clipboard.copied ? copiedLabel : copyLabel}
    >
      <CopyIcon copied={clipboard.copied} />
    </CodeHighlightControl>
  );
}

CopyCodeButton.displayName = '@mantine/code-highlight/CopyCodeButton';
