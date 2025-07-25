import {
  MantineProvider,
  MantineProviderProps,
  MantineThemeOverride,
} from '@pradeeparul2/mantine-core';
import { act, RenderResult, render as testingLibraryRender } from '@testing-library/react';

export function render(
  ui: React.ReactNode,
  themeOverride?: MantineThemeOverride,
  providerProps?: Omit<MantineProviderProps, 'theme'>
) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={themeOverride} env="test" {...providerProps}>
        {children}
      </MantineProvider>
    ),
  });
}

export async function renderWithAct(ui: React.ReactNode) {
  let result: RenderResult | null = null;
  await act(async () => {
    result = render(ui);
  });
  return result!;
}
