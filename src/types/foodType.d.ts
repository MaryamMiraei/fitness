interface FoodLogPost {
  name: string;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  calories: number;
}

interface FoodLog {
  id: number;
  documentId: string;
  name: string;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  calories: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  users_permissions_user: User;
}