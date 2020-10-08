import { ConnectionPositionPair } from '@angular/cdk/overlay';

export const topPostition: ConnectionPositionPair = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'bottom',
  offsetY: 0,
};

export const rightPostition: ConnectionPositionPair = {
  originX: 'end',
  originY: 'center',
  overlayX: 'start',
  overlayY: 'center',
  offsetY: 0,
};

export const bottomPostition: ConnectionPositionPair = {
  originX: 'center',
  originY: 'bottom',
  overlayX: 'center',
  overlayY: 'top',
  offsetY: 0,
};

export const leftPostition: ConnectionPositionPair = {
  originX: 'start',
  originY: 'center',
  overlayX: 'end',
  overlayY: 'center',
  offsetY: 0,
};
