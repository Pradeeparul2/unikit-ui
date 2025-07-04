import { useColorScheme, UseMediaQueryOptions } from '@pradeeparul2/mantine-hooks';
import { useMantineColorScheme } from './use-mantine-color-scheme';

export function useComputedColorScheme(
  defaultValue?: 'light' | 'dark',
  options: UseMediaQueryOptions = { getInitialValueInEffect: true }
) {
  const osColorScheme = useColorScheme(defaultValue, options);
  const { colorScheme } = useMantineColorScheme();
  return colorScheme === 'auto' ? osColorScheme : colorScheme;
}
