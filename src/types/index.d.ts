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
