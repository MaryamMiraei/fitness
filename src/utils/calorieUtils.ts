import type { activityWorkout, FoodEntry } from "../types";

export const getTodayEntries = (entries: (FoodEntry|activityWorkout)[]) => {
  const startOfToday = new Date();

  startOfToday.setHours(0, 0, 0, 0);

  const startOfTomorrow = new Date(startOfToday);

  startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

  return entries.filter((entry) => {
    const timestamp = new Date(entry.timestamp);
    return timestamp >= startOfToday && timestamp < startOfTomorrow;
  });
};

export const getDailyCalorieIntake = (foodEntries: FoodEntry[]) => {
  const todayEntries = getTodayEntries(foodEntries);

  return todayEntries.reduce((total, entry) => total + entry.calories, 0);
};

export const getLast7DaysCalories = (foodEntries: FoodEntry[]) => {
  const result = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();

    date.setDate(date.getDate() - i);

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const calories = foodEntries
      .filter((entry) => {
        const timestamp = new Date(entry.timestamp);

        return timestamp >= startOfDay && timestamp <= endOfDay;
      })
      .reduce((total, entry) => total + entry.calories, 0);

    result.push({
      date: date.toLocaleDateString("en-US", {
        weekday: "short",
      }),
      calories,
    });
  }

  return result;
};