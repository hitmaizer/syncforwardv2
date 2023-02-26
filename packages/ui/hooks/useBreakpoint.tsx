'use client';

import { useState, useEffect, createContext, useContext, FC } from 'react';

import { breakpoints } from '@styles';

const queryKeysArray = ['xs', 'sm', 'md', 'or'] as const;

type QueryKeys = typeof queryKeysArray[number];
type Queries = { [K in QueryKeys]: string | boolean };

const BreakpointContext = createContext({} as Queries);

const queries: Queries = {
  xs: `(max-width: ${breakpoints[0]})`,
  sm: `(max-width: ${breakpoints[1]})`,
  md: `(max-width: ${breakpoints[2]})`,
  or: '(orientation: portrait)', // we can check orientation also
};

const BreakpointProvider: FC = (props) => {
  const { children } = props;
  const [queryMatch, setQueryMatch] = useState({} as Queries);

  useEffect(() => {
    const mediaQueryLists = {} as any;
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = queryKeysArray.reduce((acc, media) => {
        acc[media] = !!(
          mediaQueryLists[media] && mediaQueryLists[media].matches
        );
        return acc;
      }, {} as Queries);
      setQueryMatch(updatedMatches);
    };

    if (window && window.matchMedia) {
      const matches = {} as any;
      queryKeysArray.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queries[media] as string);
          matches[media] = mediaQueryLists[media].matches;
        } else {
          matches[media] = false;
        }
      });
      setQueryMatch(matches);
      isAttached = true;
      queryKeysArray.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media].addListener(handleQueryListener);
        }
      });
    }

    return () => {
      if (isAttached) {
        queryKeysArray.forEach((media) => {
          if (typeof queries[media] === 'string') {
            mediaQueryLists[media].removeListener(handleQueryListener);
          }
        });
      }
    };
  }, [queries]);

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  );
};

const useBreakpoint = () => {
  const breakpoint = useContext(BreakpointContext);

  const isMobile = !!breakpoint.xs;
  const isTablet = !!breakpoint.sm;
  const isLargeDevice = !!breakpoint.md;
  const isVertical = !!breakpoint.or;

  return { isMobile, isTablet, isVertical, isLargeDevice };
};

export { useBreakpoint, BreakpointProvider };
