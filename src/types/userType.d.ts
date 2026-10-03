 interface User {
  id: number;
  documentId: string;
  username: string;
  email: string;
  age: number;
  height: number;
  weight: number;
  goal: string;
  dailyCalorieIntake: number;
  dailyCalorieBurn: number;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
}
