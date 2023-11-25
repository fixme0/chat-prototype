import React, { useMemo } from 'react';
import T from 'prop-types';

const RenderWhen = ({
  limit = 1,
  isTrue = true,
  children = null,
}) => {
  const childrenList = useMemo(
    () => {
      if (!isTrue) {
        return null;
      }

      const list = [];

      React.Children.map(children, (child) => {
        const { isTrue: isChildTrue } = child?.props || {};

        if (isChildTrue === true && list.length < limit) {
          list.push(child);
        }
      });

      return list;
    },
    [children, isTrue, limit],
  );

  return childrenList;
};

RenderWhen.propTypes = {
  children: T.node.isRequired,
  isTrue: T.bool,
  limit: T.number,
};

const If = ({ children }) => children;

If.displayName = 'If';

RenderWhen.If = If;

export { RenderWhen };
