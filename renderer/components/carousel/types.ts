interface CarouselState {
  offset: number;
  desired: number;
  active: number;
  transitionTime: number;
  spinning: boolean;
  spinCount: number;
  pause: number;
}

interface CarouselNextAction {
  type: 'next';
  length: number;
  transitionTime?: number;
  pause?: number;
}

interface CarouselPrevAction {
  type: 'prev';
  length: number;
  transitionTime?: number;
  pause?: number;
}

interface CarouselJumpAction {
  type: 'jump';
  desired: number;
}

interface CarouselSpinAction {
  type: 'spin';
  rotations: number;
  desired: number;
  pause?: number;
}

interface CarouselDoneAction {
  type: 'done';
}


type CarouselAction =
  | CarouselJumpAction
  | CarouselSpinAction
  | CarouselNextAction
  | CarouselPrevAction
  | CarouselDoneAction;

export type { CarouselAction, CarouselState }
