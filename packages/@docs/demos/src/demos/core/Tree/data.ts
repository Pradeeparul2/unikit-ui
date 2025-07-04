import { TreeNodeData } from '@pradeeparul2/mantine-core';

export const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Accordion.tsx', value: 'src/components/Accordion.tsx' },
          { label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
        ],
      },
    ],
  },
  {
    label: 'node_modules',
    value: 'node_modules',
    children: [
      {
        label: 'react',
        value: 'node_modules/react',
        children: [
          { label: 'index.d.ts', value: 'node_modules/react/index.d.ts' },
          { label: 'package.json', value: 'node_modules/react/package.json' },
        ],
      },
      {
        label: '@mantine',
        value: 'node_modules/@mantine',
        children: [
          {
            label: 'core',
            value: 'node_modules/@pradeeparul2/mantine-core',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@pradeeparul2/mantine-core/index.d.ts' },
              {
                label: 'package.json',
                value: 'node_modules/@pradeeparul2/mantine-core/package.json',
              },
            ],
          },
          {
            label: 'hooks',
            value: 'node_modules/@pradeeparul2/mantine-hooks',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@pradeeparul2/mantine-hooks/index.d.ts' },
              {
                label: 'package.json',
                value: 'node_modules/@pradeeparul2/mantine-hooks/package.json',
              },
            ],
          },
          {
            label: 'form',
            value: 'node_modules/@pradeeparul2/mantine-form',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@pradeeparul2/mantine-form/index.d.ts' },
              {
                label: 'package.json',
                value: 'node_modules/@pradeeparul2/mantine-form/package.json',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'package.json',
    value: 'package.json',
  },
  {
    label: 'tsconfig.json',
    value: 'tsconfig.json',
  },
];

export const dataCode = `import { TreeNodeData } from '@pradeeparul2/mantine-core';

export const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Accordion.tsx', value: 'src/components/Accordion.tsx' },
          { label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
        ],
      },
    ],
  },
  {
    label: 'node_modules',
    value: 'node_modules',
    children: [
      {
        label: 'react',
        value: 'node_modules/react',
        children: [
          { label: 'index.d.ts', value: 'node_modules/react/index.d.ts' },
          { label: 'package.json', value: 'node_modules/react/package.json' },
        ],
      },
      {
        label: '@mantine',
        value: 'node_modules/@mantine',
        children: [
          {
            label: 'core',
            value: 'node_modules/@pradeeparul2/mantine-core',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@pradeeparul2/mantine-core/index.d.ts' },
              { label: 'package.json', value: 'node_modules/@pradeeparul2/mantine-core/package.json' },
            ],
          },
          {
            label: 'hooks',
            value: 'node_modules/@pradeeparul2/mantine-hooks',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@pradeeparul2/mantine-hooks/index.d.ts' },
              { label: 'package.json', value: 'node_modules/@pradeeparul2/mantine-hooks/package.json' },
            ],
          },
          {
            label: 'form',
            value: 'node_modules/@pradeeparul2/mantine-form',
            children: [
              { label: 'index.d.ts', value: 'node_modules/@pradeeparul2/mantine-form/index.d.ts' },
              { label: 'package.json', value: 'node_modules/@pradeeparul2/mantine-form/package.json' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'package.json',
    value: 'package.json',
  },
  {
    label: 'tsconfig.json',
    value: 'tsconfig.json',
  },
];`;
