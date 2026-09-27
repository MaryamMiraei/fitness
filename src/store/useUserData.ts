import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FoodEntry } from "../types";

type TGoal = "lose weight" | "maintain weight" | "gain muscle";

// ۱. تعریف ساختار دیتای هر کاربر
interface IUserData {
  age: number | null;
  weight: number | null;
  height: number | null;
  userName: string | null;
  goal: TGoal;
  dailyCalorieIntakeGoal: number;
  dailyCaloriesBurnGoal: number;
  dailyCalorieIntake: number;
  dailyCaloriesBurn: number;
  foodEntries: FoodEntry[];
}

interface IUserStore {
  userProfiles: Record<string, IUserData>;

  updateUserData: (email: string, newData: Partial<IUserData>) => void;

  addFoodEntry: (email: string, entry: FoodEntry) => void;
  removeFoodEntry: (email: string, entryId: string) => void;

  removeUser: (email: string) => void;
  getUser: (email: string) => IUserData | null;
}

const defaultUserData: IUserData = {
  age: null,
  weight: null,
  height: null,
  userName: null,
  goal: "maintain weight",
  dailyCalorieIntakeGoal: 0,
  dailyCaloriesBurnGoal: 0,
  dailyCalorieIntake: 0,
  dailyCaloriesBurn: 0,
  foodEntries: [],
};

export const useUserData = create<IUserStore>()(
  persist(
    (set, get) => ({
      userProfiles: {},

      // آپدیت کلی پروفایل (سن، وزن، هدف و ...)
      updateUserData: (email, newData) =>
        set((state) => {
          const currentUser = state.userProfiles[email] || defaultUserData;
          return {
            userProfiles: {
              ...state.userProfiles,
              [email]: { ...currentUser, ...newData },
            },
          };
        }),

      // اضافه کردن یک غذای جدید به لیست کاربر
      addFoodEntry: (email, entry) =>
        set((state) => {
          const currentUser = state.userProfiles[email] || defaultUserData;
              console.log("foodEntries:", currentUser.foodEntries);
              console.log("new entry:", entry);
          return {
            userProfiles: {
              ...state.userProfiles,
              [email]: {
                ...currentUser,
                foodEntries: [...(currentUser.foodEntries)||[], entry],
              },
            },
          };
        }),

      // حذف یک غذای خاص از لیست کاربر
      removeFoodEntry: (email, entryId) =>
        set((state) => {
          const currentUser = state.userProfiles[email] || defaultUserData;
          return {
            userProfiles: {
              ...state.userProfiles,
              [email]: {
                ...currentUser,
                foodEntries: currentUser.foodEntries.filter(
                  (e) => e.id !== entryId,
                ),
              },
            },
          };
        }),

      removeUser: (email) =>
        set((state) => {
          const newProfiles = { ...state.userProfiles };
          delete newProfiles[email];
          return { userProfiles: newProfiles };
        }),

      getUser: (email) => get().userProfiles[email] || null,
    }),
    {
      name: "user-profile-data",
    },
  ),
);

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// type TGoal = "lose weight" | "maintain weight" | "gain muscle";

// interface IUseUserData {
//   age: number | null;
//   weight: number | null;
//   height: number | null;
//   goal: TGoal;
//   dailyCalorieIntake: number;
//   dailyCaloriesBurn: number;

//   setAge: (age: number | null) => void;
//   setWeight: (weight: number | null) => void;
//   setHeight: (height: number | null) => void;
//   setGoal: (goal: TGoal) => void;
//   setDailyCalorieIntake: (calories: number) => void;
//   setDailyCaloriesBurn: (calories: number) => void;

//   // برای پاک کردن دیتا هنگام خروج از حساب کاربری
//   resetUserData: () => void;
// }

// const initialState = {
//   age: null,
//   weight: null,
//   height: null,
//   goal: "maintain weight" as TGoal,
//   dailyCalorieIntake: 0,
//   dailyCaloriesBurn: 0,
// };

// export const useUserData = create<IUseUserData>()(
//   persist(
//     (set) => ({
//       ...initialState,

//       setAge: (age) => set({ age }),
//       setWeight: (weight) => set({ weight }),
//       setHeight: (height) => set({ height }),
//       setGoal: (goal) => set({ goal }),
//       setDailyCalorieIntake: (value) => set({ dailyCalorieIntake: value }),
//       setDailyCaloriesBurn: (value) => set({ dailyCaloriesBurn: value }),

//       resetUserData: () => set(initialState),
//     }),
//     {
//       name: "user-profile-data",
//     },
//   ),
// );
