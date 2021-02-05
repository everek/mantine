import React from 'react';
import { storiesOf } from '@storybook/react';
import MantineProvider from '../../MantineProvider/MantineProvider';
import Title from './Title';

storiesOf('@mantine/core', module).add('Title', () => (
  <MantineProvider>
    <Title order={1}>h1 title</Title>
    <Title order={2}>h2 title</Title>
    <Title order={3}>h3 title</Title>
    <Title order={4}>h4 title</Title>
    <Title order={5}>h5 title</Title>
    <Title order={6}>h6 title</Title>
  </MantineProvider>
));