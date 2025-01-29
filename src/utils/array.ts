export const insertIf = <T>(condition: boolean, element: T) =>
  condition ? [element] : [];
