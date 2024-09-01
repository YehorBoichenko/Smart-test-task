import React from 'react';
import styles from '@/shared/components/Wrapper.module.css';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Wrapper: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      {children}
    </div>
  );
};
