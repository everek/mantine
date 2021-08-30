import React from 'react';
import { itSupportsClassName, itRendersChildren } from '@mantine/tests';
import { SimpleGrid } from './SimpleGrid';

const defaultProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('@mantine/core/SimpleGrid', () => {
  itSupportsClassName(SimpleGrid, defaultProps);
  itRendersChildren(SimpleGrid, defaultProps);

  it('has correct displayName', () => {
    expect(SimpleGrid.displayName).toEqual('@mantine/core/SimpleGrid');
  });
});
