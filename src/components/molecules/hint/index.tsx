import { PropsWithChildren } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/atoms/Tooltip';

export interface HintProps extends PropsWithChildren {
  message: string;
  side?: 'left' | 'right' | 'top' | 'bottom';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  alignOffset?: number;
}

export const Hint = (props: HintProps) => {
  const {
    message,
    side = 'top',
    align = 'center',
    sideOffset = 0,
    alignOffset = 0,
    children,
  } = props;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="border-black bg-black text-white"
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
        >
          <p className="font-semibold capitalize">{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
