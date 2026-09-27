// انواع وعده‌های غذایی
export type MealType = "breakfast" | "lunch" | "dinner" | "snack";

// ساختار هر ورودی غذا
export interface FoodEntry {
  id: string; 
  name: string;
  calories: number;
  mealType: MealType;
  timestamp: Date;
}

export type ExerciseType =
  | "Walking"
  | "Running"
  | "Cycling"
  | "Swimming"
  | "Yoga"
  | "Weight Training";

export interface activityWorkout {
  id: string;
  name: string;
  calories: number;
  duration: number;
  timestamp: Date;
}
