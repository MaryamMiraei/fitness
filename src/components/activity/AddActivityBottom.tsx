import React from "react";

const AddActivityBottom = ({ open }) => {
  return (
    <div className="space-y-6">
      <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/50">
        <h3 className="font-semibold mb-4 text-gray-200">Quick Add</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Walking",
            "Running",
            "Cycling",
            "Swimming",
            "Yoga",
            "Weight Training",
          ].map((item, idx) => (
            <button
              key={item}
              className="bg-slate-700/50 hover:bg-slate-700 px-4 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors"
            >
              {idx === 0
                ? "🚶"
                : idx === 1
                  ? "🏃"
                  : idx === 2
                    ? "🚴"
                    : idx === 3
                      ? "🏊"
                      : idx === 4
                        ? "🧘"
                        : "🏋️"}
              {item}
            </button>
          ))}
        </div>
      </div>

      <button
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
        onClick={open}
      >
        + Add Food Entry
      </button>
    </div>
  );
};

export default AddActivityBottom;
