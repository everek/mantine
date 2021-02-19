import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    navbar: {
      minHeight: '100vh',
      paddingRight: theme.spacing.md,
      borderRight: `1px solid ${theme.colors.gray[1]}`,
    },

    body: {
      marginTop: theme.spacing.md,
    },
  }),
  { theming }
);