/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export const withProps = (externalProps) => (Component) => {
  const WithPropsHOC = (props) => (
    <Component
      {...props}
      {...externalProps}
    />
  );

  return WithPropsHOC;
};
