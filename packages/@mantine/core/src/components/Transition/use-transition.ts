import { useEffect, useRef, useState } from 'react';
import { useDidUpdate, useReducedMotion } from '@pradeeparul2/mantine-hooks';
import ReactDOM from 'react-dom';
import { useMantineTheme } from '../../core';

export type TransitionStatus =
  | 'entered'
  | 'exited'
  | 'entering'
  | 'exiting'
  | 'pre-exiting'
  | 'pre-entering';

interface UseTransition {
  duration: number;
  exitDuration: number;
  timingFunction: string;
  mounted: boolean;
  onEnter?: () => void;
  onExit?: () => void;
  onEntered?: () => void;
  onExited?: () => void;
  enterDelay?: number;
  exitDelay?: number;
}

export function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited,
  enterDelay,
  exitDelay,
}: UseTransition) {
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = useState(reduceMotion ? 0 : duration);
  const [transitionStatus, setStatus] = useState<TransitionStatus>(mounted ? 'entered' : 'exited');
  const transitionTimeoutRef = useRef<number>(-1);
  const delayTimeoutRef = useRef<number>(-1);
  const rafRef = useRef(-1);

  function clearAllTimeouts() {
    window.clearTimeout(transitionTimeoutRef.current);
    window.clearTimeout(delayTimeoutRef.current);
    cancelAnimationFrame(rafRef.current);
  }

  const handleStateChange = (shouldMount: boolean) => {
    clearAllTimeouts();
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);

    if (newTransitionDuration === 0) {
      typeof preHandler === 'function' && preHandler();
      typeof handler === 'function' && handler();
      setStatus(shouldMount ? 'entered' : 'exited');
    } else {
      rafRef.current = requestAnimationFrame(() => {
        ReactDOM.flushSync(() => {
          setStatus(shouldMount ? 'pre-entering' : 'pre-exiting');
        });
        rafRef.current = requestAnimationFrame(() => {
          typeof preHandler === 'function' && preHandler();
          setStatus(shouldMount ? 'entering' : 'exiting');
          transitionTimeoutRef.current = window.setTimeout(() => {
            typeof handler === 'function' && handler();
            setStatus(shouldMount ? 'entered' : 'exited');
          }, newTransitionDuration);
        });
      });
    }
  };

  const handleTransitionWithDelay = (shouldMount: boolean) => {
    clearAllTimeouts();
    const delay = shouldMount ? enterDelay : exitDelay;
    if (typeof delay !== 'number') {
      handleStateChange(shouldMount);
      return;
    }
    delayTimeoutRef.current = window.setTimeout(
      () => {
        handleStateChange(shouldMount);
      },
      shouldMount ? enterDelay : exitDelay
    );
  };

  useDidUpdate(() => {
    handleTransitionWithDelay(mounted);
  }, [mounted]);

  useEffect(
    () => () => {
      clearAllTimeouts();
    },
    []
  );

  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || 'ease',
  };
}
