export const getPossibleTabs = (length: number) => {
  if (length <= 6) return 3;
  if (length <= 8) return 2;
  if (length <= 9) return 1;
  return 0;
};

export const transformTabs = (length: number, wantedTabs: number) => {
  if (wantedTabs < 0) return 0;
  const possibleTabs = getPossibleTabs(length);
  return Math.min(wantedTabs, possibleTabs);
};