import React from 'react';
import classNames from 'classnames';
import { WrapperProps } from '@/types/wrapper';

export const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
  return <div className={classNames('wrapper', className)}>{children}</div>;
};
