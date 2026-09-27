import React from 'react'

const AddFoodListEmpty = () => {
  return (
    <div className="bg-[#1e293b] rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center p-12 text-center">
      <div className="bg-slate-700/30 p-4 rounded-2xl mb-4">
        <span className="text-4xl">🍴</span>
      </div>
      <h3 className="font-bold text-lg mb-2">No food logged today</h3>
      <p className="text-gray-400 text-sm max-w-[200px]">
        Start tracking your meals to stay on target
      </p>
    </div>
  );
}

export default AddFoodListEmpty