import { cloneElement } from 'react';
import { useMergedRef } from '@pradeeparul2/mantine-hooks';
import { factory, Factory, getRefProp, isElement, useProps } from '../../../core';
import { useComboboxContext } from '../Combobox.context';
import { useComboboxTargetProps } from '../use-combobox-target-props/use-combobox-target-props';

export interface ComboboxEventsTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to access element ref */
  refProp?: string;

  /** Determines whether component should respond to keyboard events, `true` by default */
  withKeyboardNavigation?: boolean;

  /** Determines whether the target should have `aria-` attributes, `true` by default */
  withAriaAttributes?: boolean;

  /** Determines whether the target should have `aria-expanded` attribute, `false` by default */
  withExpandedAttribute?: boolean;

  /** Determines which events should be handled by the target element.
   * `button` target type handles `Space` and `Enter` keys to toggle dropdown opened state.
   * `input` by default.
   * */
  targetType?: 'button' | 'input';

  /** Input autocomplete attribute */
  autoComplete?: string;
}

const defaultProps = {
  refProp: 'ref',
  targetType: 'input',
  withKeyboardNavigation: true,
  withAriaAttributes: true,
  withExpandedAttribute: false,
  autoComplete: 'off',
} satisfies Partial<ComboboxEventsTargetProps>;

export type ComboboxEventsTargetFactory = Factory<{
  props: ComboboxEventsTargetProps;
  ref: HTMLElement;
  compound: true;
}>;

export const ComboboxEventsTarget = factory<ComboboxEventsTargetFactory>((props, ref) => {
  const {
    children,
    refProp,
    withKeyboardNavigation,
    withAriaAttributes,
    withExpandedAttribute,
    targetType,
    autoComplete,
    ...others
  } = useProps('ComboboxEventsTarget', defaultProps, props);

  if (!isElement(children)) {
    throw new Error(
      'Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = useComboboxContext();
  const targetProps = useComboboxTargetProps({
    targetType,
    withAriaAttributes,
    withKeyboardNavigation,
    withExpandedAttribute,
    onKeyDown: (children.props as any).onKeyDown,
    autoComplete,
  });

  return cloneElement(children, {
    ...targetProps,
    ...others,
    [refProp]: useMergedRef(ref, ctx.store.targetRef, getRefProp(children)),
  });
});

ComboboxEventsTarget.displayName = '@pradeeparul2/mantine-core/ComboboxEventsTarget';
