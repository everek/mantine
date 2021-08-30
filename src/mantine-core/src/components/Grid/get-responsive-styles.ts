import { getColumnWidth } from './Col';
import { MantineTheme } from '../../theme';

export interface GetResponsiveStyles {
  uuid: string;
  breakpoints: any;
  columns: number;
  grow: boolean;
  theme: MantineTheme;
}

export function getResponsiveStyles({
  uuid,
  breakpoints,
  columns,
  grow,
  theme,
}: GetResponsiveStyles) {
  const columnSizes = [];
  for (let index = 0; index < columns; index += 1) {
    columnSizes.push(index + 1);
  }

  let mediaQueries = '';
  let baseStyles = '';

  columnSizes.forEach((columnSpan) => {
    baseStyles = `${baseStyles} .${uuid}-col-${columnSpan} {
          flex-basis: ${getColumnWidth(columnSpan, columns)};
          flex-shrink: 0;
          max-width:  ${grow ? 'unset' : getColumnWidth(columnSpan, columns)};
        }`;
  });

  breakpoints.forEach((breakpoint) => {
    let colStyles = '';
    columnSizes.forEach((columnSpan) => {
      colStyles = `${colStyles} .${uuid}-col-${breakpoint}-${columnSpan} {
          flex-basis: ${getColumnWidth(columnSpan, columns)};
          flex-shrink: 0;
          max-width:  ${grow ? 'unset' : getColumnWidth(columnSpan, columns)};
        }`;
    });
    mediaQueries = `${mediaQueries} @media (min-width: ${theme.breakpoints[breakpoint]}px) { ${colStyles} }`;
  });
  mediaQueries = `${baseStyles} ${mediaQueries}`;
  return mediaQueries;
}
