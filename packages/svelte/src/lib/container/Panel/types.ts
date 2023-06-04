import type { PanelPosition } from '@reactflow/system';
import type { HTMLAttributes } from 'svelte/elements';

export type PanelProps = HTMLAttributes<HTMLDivElement> & {
  'data-testid'?: string;
  'data-message'?: string;
  position?: PanelPosition;
  style?: string;
  class?: string;
};
