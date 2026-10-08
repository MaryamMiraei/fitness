type ExerciseType =
  | "Walking"
  | "Running"
  | "Cycling"
  | "Swimming"
  | "Yoga"
  | "Weight Training";

interface ActivityLogPost {
  calories: number;
  duration: number;
  name: string;
}

interface ActivityLog {
  calories: number;
  createdAt: string;
  documentId: string;
  duration: number;
  id: number;
  locale: null;
  name: string;
  publishedAt: string;
  updatedAt: string;
  users_permissions_user: User;
}
