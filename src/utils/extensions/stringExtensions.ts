export const isNullOrWhiteSpace = (source: string | undefined): boolean => {
  if (!source) {
    return true;
  }

  if (!source.trim()) {
    return true;
  }

  return false;
};
