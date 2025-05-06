'use client';

import { Plus } from 'lucide-react';
import { CreateOrganization } from '@clerk/nextjs';

import { Hint } from '@/components/molecules';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/atoms/Dialog';
import { Button } from '@/components/atoms/Button';

export const NewOrgButton = () => {
  return (
    <Dialog>
      <Hint
        message="Create Organization"
        side="right"
        align="start"
        sideOffset={-10}
        alignOffset={5}
      >
        <DialogTrigger asChild>
          <Button variant="link" className="aspect-square">
            <Plus className="text-white" />
          </Button>
        </DialogTrigger>
      </Hint>

      <DialogContent className="w-[432px] max-w-[432px] border-none bg-transparent p-0">
        <DialogTitle className="hidden text-center">
          {'Organization'}
        </DialogTitle>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
