import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import Loader from '../Loader/Loader';
import useStyles from './LoadingOverlay.styles';

interface LoadingOverlayProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  loaderSize?: number;
  visible: boolean;
}

export default function LoadingOverlay({
  className,
  visible,
  loaderSize,
  ...others
}: LoadingOverlayProps) {
  const classes = useStyles();

  if (!visible) {
    return null;
  }

  return (
    <div className={cx(classes.loadingOverlay, className)} {...others}>
      <Loader size={loaderSize} />
    </div>
  );
}

LoadingOverlay.displayName = '@mantine/core/LoadingOverlay';