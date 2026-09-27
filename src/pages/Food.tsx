import { useState } from "react";
import AddFoodBottom from "../components/AddFoodBottom";
import AddFoodModal from "../components/AddFoodModal";
import AddFoodList from "../components/AddFoodList";
import type { MealType } from "../types";
import { useAuthStore } from "../store/useAuthStore";
import { useUserData } from "../store/useUserData";
import { getDailyCalorieIntake, getTodayEntries } from "../utils/calorieUtils";

const Food = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const meals: { type: MealType; label: string; icon: string }[] = [
    { type: "breakfast", label: "Breakfast", icon: "public/breakfast.svg" },
    { type: "lunch", label: "Lunch", icon: "public/snack.svg" },
    { type: "dinner", label: "Dinner", icon: "public/dinner.svg" },
    { type: "snack", label: "Snack", icon: "public/snack.svg" },
  ];

const currentUser = useAuthStore((state)=>state.currentUser)
const foodEntries= useUserData((state)=>currentUser? state.userProfiles[currentUser.email]?.foodEntries : [])
const dailyCalorieIntake = getDailyCalorieIntake(foodEntries);
const Today=getTodayEntries(foodEntries)
console.log(Today, "today")


  return (
    <div className="mb-16 lg:ml-64 lg:mb-0 bg-[#0f172a] text-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start mb-8 p-8 bg-[#1e293b] ">
        <div className="">
          <h2 className="text-3xl font-bold mb-1">Food Log</h2>
          <p className="text-gray-400">Track your daily intake</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm">Today's Total</p>
          <span className="text-emerald-500 font-bold text-2xl">{dailyCalorieIntake} kcal</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {/* Left Side */}
        {isModalOpen ? (
          <AddFoodModal close={close} meals={meals} />
        ) : (
          <AddFoodBottom open={open} meals={meals} />
        )}

        {/* Right Side */}
        <AddFoodList meals={meals} />
      </div>
    </div>
  );
};

export default Food;
