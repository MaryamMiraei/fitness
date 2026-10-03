import { useState } from "react";
import type { FoodEntry, MealType } from "../../types";
import { addFoodLog } from "../../api/food";


interface IAddFoodModal {
  close: () => void;
  meals: { type: MealType; label: string }[];
}

const AddFoodModal = ({ close, meals }: IAddFoodModal) => {

  const [foodEntriesDraft, setFoodEntriesDraft] = useState<FoodLogPost>({
    name: "",
    calories: 0,
    mealType: "breakfast",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const newFood = await addFoodLog({
        name: foodEntriesDraft.name,
        calories: foodEntriesDraft.calories,
        mealType: foodEntriesDraft.mealType,
      });

      console.log(newFood);

      setFoodEntriesDraft({
        name: "",
        calories: 0,
        mealType: "breakfast",
      });
    } catch (error) {
      console.log(error);
    } finally {
      close();
    }
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFoodEntriesDraft((prev) => ({
      ...prev,
      [name]: name === "calories" ? Number(value) : value,
    }));
  };


  return (
    <div>
      <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-[#0f172a] p-5 text-white shadow-2xl">
        <h2 id="new-food-entry-title" className="mb-5 text-lg font-semibold">
          New Food Entry
        </h2>

        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">
              Food Name <span className="text-red-500">*</span>
            </span>
            <input
              required
              type="text"
              name="name"
              value={foodEntriesDraft.name}
              onChange={handleChange}
              placeholder="e.g., Grilled Chicken Salad"
              className="w-full rounded-xl border border-slate-700 bg-[#1e293b] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-emerald-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">
              Calories <span className="text-red-500">*</span>
            </span>
            <input
              required
              type="number"
              name="calories"
              value={foodEntriesDraft.calories}
              onChange={handleChange}
              min="0"
              className="w-full rounded-xl border border-slate-700 bg-[#1e293b] px-4 py-3 text-white outline-none focus:border-emerald-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">
              Meal Type <span className="text-red-500">*</span>
            </span>
            <select
              name="mealType"
              value={foodEntriesDraft.mealType}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-[#1e293b] px-4 py-3 text-white outline-none focus:border-emerald-500"
            >
              <option value="" disabled>
                Select meal type
              </option>

              {meals.map((meal) => (
                <option key={meal.type} value={meal.type}>
                  {meal.label}
                </option>
              ))}
            </select>
          </label>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={close}
              className="flex-1 rounded-xl bg-[#1e293b] py-3 font-medium text-white transition hover:bg-slate-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-emerald-500 py-3 font-medium text-white transition hover:bg-emerald-600"
            >
              Add Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodModal;
