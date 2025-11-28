export const isClient = (): boolean => {
  return typeof window !== undefined && typeof document !== undefined;
};
