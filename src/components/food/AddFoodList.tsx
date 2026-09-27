import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useUserData } from "../../store/useUserData";
import type { FoodEntry, MealType } from "../../types";
import AddFoodListEmpty from "./AddFoodListEmpty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { getTodayEntries } from "../../utils/calorieUtils";
interface IAddFood {
  meals: { type: MealType; label: string; icon: string }[];
}

const AddFoodList = ({ meals }: IAddFood) => {
  const currentUser = useAuthStore((state) => state.currentUser);
  const foodEntries = useUserData((state) =>
    currentUser ? state.userProfiles[currentUser?.email]?.foodEntries : [],
  );
  const todayFoodEntry = getTodayEntries(foodEntries);
  const removeFoodEntry = useUserData((state) => state.removeFoodEntry);
  const [entryToDelete, setEntryToDelete] = useState<string | null>(null);

  const handleDelete = () => {
    if (!entryToDelete || !currentUser) return;
    removeFoodEntry(currentUser?.email, entryToDelete);
    setEntryToDelete(null);
  };

  return (
    <div className="mb-[64px] lg:mb-0">
      {todayFoodEntry.length === 0 ? (
        <AddFoodListEmpty />
      ) : (
        <div className="space-y-4">
          {meals.map((meal) => {
            const filteredEntries = todayFoodEntry.filter(
              (e) => e.mealType === meal.type,
            );
            const mealCalories = filteredEntries.reduce(
              (total, entry) => total + entry.calories,
              0,
            );

            if (filteredEntries.length === 0) return null;

            return (
              <div
                key={meal.type}
                className="rounded-xl border border-slate-700 bg-[#0f172a] p-4 text-white"
              >
                <div className="flex justify-between">
                  <div className="mb-3 flex gap-3 items-center">
                    <div>
                      <img src={meal.icon} alt="" />
                    </div>
                    <div>
                      <h3 className=" font-semibold">{meal.label}</h3>
                      <p className="text-sm text-slate-400 dark:text-slate-400">
                        <span>{filteredEntries.length} </span>items
                      </p>
                    </div>
                  </div>
                  <div>
                    <p>{mealCalories} kcal</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {filteredEntries.map((entry) => (
                    <li
                      key={entry.id}
                      className="flex justify-between rounded-2xl bg-slate-800 py-2 px-4"
                    >
                      <span>{entry.name}</span>
                      <div className="flex gap-2 items-center">
                        <span className="text-slate-400">
                          {entry.calories} kcal
                        </span>
                        <button
                          type="button"
                          className="p-1 text-red-400 hover:text-red-600"
                          onClick={() => setEntryToDelete(entry.id)}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                {entryToDelete && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="w-[350px] rounded-xl bg-slate-900 p-6">
                      <h2 className="text-lg font-semibold text-white">
                        Delete food?
                      </h2>

                      <p className="mt-2 text-slate-400">
                        Are you sure you want to delete this food entry?
                      </p>

                      <div className="mt-6 flex justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => setEntryToDelete(null)}
                          className="rounded-lg px-4 py-2 text-slate-300"
                        >
                          Cancel
                        </button>

                        <button
                          type="button"
                          onClick={handleDelete}
                          className="rounded-lg bg-red-500 px-4 py-2 text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AddFoodList;
