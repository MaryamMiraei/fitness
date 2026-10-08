type Goals = "lose weight" | "maintain weight" | "gain muscle";

interface UserPost {
  age: number;
  dailyCalorieBurn: number;
  dailyCalorieIntake: number;
  goal: Goals;
  height: number;
  weight: number;
}
interface User {
  id: number;
  documentId: string;
  username: string;
  email: string;
  age: number;
  height: number;
  weight: number;
  goal: Goals;
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
