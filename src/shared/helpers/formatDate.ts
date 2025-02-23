export const formatDateToBR = (date: string): string => {
  return date.split("-").reverse().join("/");
};
