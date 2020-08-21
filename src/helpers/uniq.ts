export const uniq = (arr: string[]): string[] => {
  const set: Record<string, boolean> = {};
  return arr.filter((el) => {
    return set[el] ? false : (set[el] = true);
  });
};
