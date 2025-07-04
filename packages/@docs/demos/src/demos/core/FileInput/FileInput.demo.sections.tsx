import { FileInput } from '@pradeeparul2/mantine-core';
import { IconFileCv } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FileInput } from '@pradeeparul2/mantine-core';
import { IconFileCv } from '@tabler/icons-react';

function Demo() {
  const icon = <IconFileCv size={18} stroke={1.5} />;

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  const icon = <IconFileCv size={18} stroke={1.5} />;

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}

export const sections: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
