import { createSafeContext } from '@pradeeparul2/mantine-core';

export interface DropzoneContextValue {
  idle: boolean;
  accept: boolean;
  reject: boolean;
}

export const [DropzoneProvider, useDropzoneContext] = createSafeContext<DropzoneContextValue>(
  'Dropzone component was not found in tree'
);
