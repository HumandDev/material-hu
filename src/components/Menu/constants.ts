export const MAX_HEIGHT = 360;
export const MAX_WIDTH = 312;

export const positionMap = {
  left: {
    anchorOrigin: {
      vertical: 'bottom' as const,
      horizontal: 'left' as const,
    },
    transformOrigin: {
      vertical: 'top' as const,
      horizontal: 'left' as const,
    },
  },
  right: {
    anchorOrigin: {
      vertical: 'bottom' as const,
      horizontal: 'right' as const,
    },
    transformOrigin: {
      vertical: 'top' as const,
      horizontal: 'right' as const,
    },
  },
  center: {
    anchorOrigin: {
      vertical: 'bottom' as const,
      horizontal: 'center' as const,
    },
    transformOrigin: {
      vertical: 'top' as const,
      horizontal: 'center' as const,
    },
  },
};
