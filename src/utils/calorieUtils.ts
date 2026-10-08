export const getTodayEntries = <T extends { createdAt: string }>( entries: T[]): T[] => {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const startOfTomorrow = new Date(startOfToday);
  startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

  return entries.filter((entry) => {
    const date = new Date(entry.createdAt);

    return date >= startOfToday && date < startOfTomorrow;
  });
};
