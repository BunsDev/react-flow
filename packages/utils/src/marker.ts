import type { BaseEdge, EdgeMarker, EdgeMarkerType, MarkerProps } from '@reactflow/system';

export function getMarkerId(marker: EdgeMarkerType | undefined, id?: string | null): string {
  if (!marker) {
    return '';
  }

  if (typeof marker === 'string') {
    return marker;
  }

  const idPrefix = id ? `${id}__` : '';

  return `${idPrefix}${Object.keys(marker)
    .sort()
    .map((key) => `${key}=${marker[key as keyof EdgeMarker]}`)
    .join('&')}`;
}

export function createMarkerIds(
  edges: BaseEdge[],
  { id, defaultColor }: { id?: string | null; defaultColor?: string }
) {
  const ids: string[] = [];

  return edges
    .reduce<MarkerProps[]>((markers, edge) => {
      [edge.markerStart, edge.markerEnd].forEach((marker) => {
        if (marker && typeof marker === 'object') {
          const markerId = getMarkerId(marker, id);
          if (!ids.includes(markerId)) {
            markers.push({ id: markerId, color: marker.color || defaultColor, ...marker });
            ids.push(markerId);
          }
        }
      });
      return markers;
    }, [])
    .sort((a, b) => a.id.localeCompare(b.id));
}
