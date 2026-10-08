type MealType = "breakfast" | "lunch" | "dinner" | "snack";

interface FoodLogPost {
  name: string;
  mealType: MealType;
  calories: number;
}

interface FoodLog {
  id: number;
  documentId: string;
  name: string;
  mealType: MealType;
  calories: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  users_permissions_user: User;
}
