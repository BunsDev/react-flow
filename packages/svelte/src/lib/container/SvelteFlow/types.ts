import type { DOMAttributes } from 'svelte/elements';
import type {
  Connection,
  ConnectionLineType,
  NodeOrigin,
  OnConnectStartParams,
  Viewport,
  SelectionMode,
  SnapGrid,
  OnMoveStart,
  OnMove,
  OnMoveEnd,
  CoordinateExtent,
  PanOnScrollMode
} from '@reactflow/system';

import type {
  Edge,
  Node,
  NodeTypes,
  KeyDefinition,
  EdgeTypes,
  IsValidConnection
} from '$lib/types';

export type SvelteFlowProps = DOMAttributes<HTMLDivElement> & {
  id?: string;
  nodeTypes?: NodeTypes;
  edgeTypes?: EdgeTypes;
  selectionKey?: KeyDefinition;
  deleteKey?: KeyDefinition;
  fitView?: boolean;
  nodeOrigin?: NodeOrigin;
  minZoom?: number;
  maxZoom?: number;
  initialViewport?: Viewport;
  connectionRadius?: number;
  selectionMode?: SelectionMode;
  snapGrid?: SnapGrid;
  defaultMarkerColor?: string;
  nodesDraggable?: boolean;
  nodesConnectable?: boolean;
  elementsSelectable?: boolean;
  translateExtent?: CoordinateExtent;
  panOnScrollMode?: PanOnScrollMode;
  preventScrolling?: boolean;
  zoomOnScroll?: boolean;
  zoomOnDoubleClick?: boolean;
  zoomOnPinch?: boolean;
  panOnScroll?: boolean;
  panOnDrag?: boolean | number[];

  class?: string;
  style?: string;

  connectionLineType?: ConnectionLineType;
  isValidConnection?: IsValidConnection;

  onMoveStart?: OnMoveStart;
  onMove?: OnMove;
  onMoveEnd?: OnMoveEnd;

  'on:node:click'?: CustomEvent<Node>;
  'on:node:mouseenter'?: CustomEvent<Node>;
  'on:node:mousemove'?: CustomEvent<Node>;
  'on:node:mouseleave'?: CustomEvent<Node>;
  'on:edge:click'?: CustomEvent<Edge>;
  'on:connect:start'?: CustomEvent<OnConnectStartParams>;
  'on:connect'?: CustomEvent<Connection>;
  'on:connect:end'?: CustomEvent<OnConnectStartParams>;
  'on:pane:click'?: CustomEvent;
  'on:pane:contextmenu'?: CustomEvent;
};

export type SvelteFlowSlots = {
  default: { slotValue: string };
};
