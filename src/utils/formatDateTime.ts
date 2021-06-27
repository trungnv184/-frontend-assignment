export const formatDateTime = (dateTime: string): string => {
  return new Intl.DateTimeFormat("en-US").format(new Date(dateTime));
};
