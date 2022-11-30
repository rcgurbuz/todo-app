/* eslint-disable @typescript-eslint/no-unused-vars */
import { createElement } from 'react';
import styled, { CSSObject, createGlobalStyle } from 'styled-components';
import { DeleteBin } from '@styled-icons/remix-fill/DeleteBin';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Grid = styled(
  ({
    css,
    gridGap,
    placeItems,
    gridColumn,
    placeContent,
    gridTemplateColumns,
    gridTemplateRows,
    gridAutoFlow,
    tag = 'div',
    display,
    children,
    ...props
  }) => createElement(children ? tag : 'div', props, children),
)<{ css?: CSSObject; gridGap: string }>`
  display: ${({ display }) => display ?? 'grid'};
  grid-gap: ${({ gridGap }) => gridGap ?? null};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns ?? null};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows ?? null};
  place-items: ${({ placeItems }) => placeItems ?? null};
  place-content: ${({ placeContent }) => placeContent ?? null};
  grid-auto-flow: ${({ gridAutoFlow }) => gridAutoFlow ?? null};
  grid-column: ${({ gridColumn }) => gridColumn ?? null};
  ${({ css }) => css};
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.padding.large};
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid black;
  border-radius: 3px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
  :focus-visible {
    outline: none;
  }
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export const TrashIcon = styled(DeleteBin)`
  color: ${({ theme }) => theme.colors.red};
  width: 20px;
  justify-self: center;
  cursor: pointer;
`;
