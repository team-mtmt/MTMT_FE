import styled, { css } from 'styled-components';
import { ElementType } from 'react';
import { colors } from '../style/colors';

type Variant = 'Title' | 'Mtitle' | 'Stitle' | 'Label' | 'Caption' | 'Button';

interface TextProps {
  variant?: Variant;
  color?: string;
  weight?: number;
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  as?: ElementType;
}

export const getVariantStyle = (variant?: Variant) => {
  switch (variant) {
    case 'Title':
      return css`
        font-size: 32px;
      `;
    case 'Mtitle':
      return css`
        font-size: 28px;
      `;
    case 'Stitle':
      return css`
        font-size: 24px;
      `;
    case 'Label':
      return css`
        font-size: 20px;
      `;
    case 'Caption':
        return css`
            font-size: 16px;
        `;
    case 'Button':
        return css`
            font-size: 12px;
        `;
    default:
      return css``;
  }
};

const resolveColor = (color?: string) => {
  if (!color) return '#000';
  const [group, shade] = color.split('.');
  const shadeNum = Number(shade);

  if (
    group in colors &&
    !isNaN(shadeNum) &&
    shadeNum in (colors as any)[group]
  ) {
    return (colors as any)[group][shadeNum];
  }
  return color;
};


export const Text = styled.span<TextProps>`
  ${({ variant }) => getVariantStyle(variant)}
  color: ${({ color }) => resolveColor(color)};
  font-weight: ${({ weight }) => weight || 'inherit'};
  text-align: ${({ align }) => align || 'left'};
`;
