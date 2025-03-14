'use client';

import * as React from 'react';
import * as Types from './type';
import { cn } from '@/app/lib';
import styles from './index.module.scss';

const Button = React.forwardRef<HTMLButtonElement, Types.ButtonProps>((props, ref) => {
  const { className = '', ...rest } = props;

  return <button ref={ref} className={cn(styles.button, className)} {...rest} />;
});
Button.displayName = 'Button';
export default Button;
