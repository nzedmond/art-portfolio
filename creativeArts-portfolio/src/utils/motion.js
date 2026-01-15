// Cinematic Motion Constants

export const CINEMATIC_EASE = [0.22, 1, 0.36, 1];
export const TRANSITION_DURATION = 0.6;

export const REVEAL_VARIANTS = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export const PAGE_VARIANTS = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};
