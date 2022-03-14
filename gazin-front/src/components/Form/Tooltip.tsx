import { ReactNode } from 'react';

import {
  Placement,
  Tooltip as ChakaraTooltip,
  TooltipProps as ChakraTooltipProps,
} from '@chakra-ui/react';

interface TooltipProps extends ChakraTooltipProps {
  children: ReactNode;
  label: string;
  bg?: string;
  placement?: Placement;
}

export function Tooltip({
  children,
  label,
  placement = 'top-end',
  ...rest
}: TooltipProps) {
  return (
    <ChakaraTooltip
      boxShadow="xs"
      p={3}
      borderRadius={8}
      hasArrow
      label={label}
      bg="Blue.400"
      placement={placement}
      {...rest}
    >
      {children}
    </ChakaraTooltip>
  );
}
