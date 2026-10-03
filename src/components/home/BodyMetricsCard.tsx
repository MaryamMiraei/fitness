

const BodyMetricsCard = () => {


  return (
    <div className="bg-slate-900 text-white p-6 rounded-3xl w-full shadow-xl">
      {/* هدر کارت */}
      <div className="flex items-center gap-4 mb-6">
        <div className=" rounded-2xl">
          <img src="public/Background (2).svg" alt="" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Body Metrics</h3>
          <p className="text-gray-400 text-sm">Your stats</p>
        </div>
      </div>

      {/* لیست متریک‌ها */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-gray-400">
            <div>
              <img src="public/Background.svg" alt="" />
            </div>
            <span>Weight</span>
          </div>
          <span className="font-bold">{} kg</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-gray-400">
            <div>
              <img src="public/Background (1).svg" alt="" />
            </div>
            <span>Height</span>
          </div>
          <span className="font-bold">{} cm</span>
        </div>
      </div>

      <div className="border-t border-slate-700 my-4" />

      {/* بخش BMI */}
      <div className="flex justify-between items-end mb-2">
        <span className="text-gray-300">BMI</span>
        <span className="text-emerald-500 font-bold text-xl">{}</span>
      </div>

      {/* نوار رنگی BMI */}
      <div className="flex w-full h-2 rounded-full overflow-hidden">
        <div className="w-1/4 bg-[#51A2FF]" />
        <div className="w-1/4 bg-[#00D492]" />
        <div className="w-1/4 bg-[#FF8904]" />
        <div className="w-1/4 bg-[#FF6467]" />
      </div>

      {/* اعداد زیر نوار */}
      <div className="flex justify-between text-gray-500 text-xs mt-2">
        <span>18.5</span>
        <span>25</span>
        <span>30</span>
      </div>
    </div>
  );
};

export default BodyMetricsCard;
