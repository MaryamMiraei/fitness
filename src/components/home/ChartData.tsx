import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  CartesianGrid,
} from "recharts";
import { getLast7DaysCalories } from "../../utils/calorieUtils";
import { useUserData } from "../../store/useUserData";
import { useAuthStore } from "../../store/useAuthStore";

const ChartData = () => {
  const currentUser = useAuthStore((state) => state.currentUser);
  const foodEntries = useUserData((state) =>
    currentUser ? state.userProfiles[currentUser.email]?.foodEntries : [],
  );
  const activityWorkouts = useUserData((state) =>
    currentUser ? state.userProfiles[currentUser.email]?.activityWorkouts : [],
  );
  const chartData = getLast7DaysCalories(foodEntries, activityWorkouts);
  return (
    <section className="w-full h-auto aspect-[16/9] min-h-[400px] rounded-2xl bg-[#111827] p-6 text-white shadow-xl">
      <h2 className="mb-5 text-lg font-semibold tracking-tight">
        This Week’s Progress
      </h2>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 8, right: 8, bottom: 4, left: 0 }}
            barCategoryGap="10%"
            barGap={10}
          >
            <Tooltip
              cursor={{ fill: "rgba(255, 255, 255, 0.1)", id: "default" }}
              contentStyle={{
                backgroundColor: "#1e293b", // Slate 800
                borderRadius: "12px",
                border: "1px solid #334155",
                color: "#f8fafc",
              }}
              itemStyle={{ fontSize: "14px", fontWeight: "500" }}
              labelStyle={{
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#94a3b8",
              }}
            />
            <CartesianGrid
              vertical={false}
              stroke="#334155"
              strokeDasharray="4 4"
            />
            <XAxis
              dataKey="date"
              interval={0}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              dy={8}
            />
            <YAxis
              domain={[0, 3000]}
              ticks={[
                0, 150, 300, 450, 600, 700, 800, 1000, 1500, 2000, 3000, 3500,
              ]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              width={36}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{
                color: "#cbd5e1",
                fontSize: 12,
                paddingTop: 16,
              }}
            />
            <Bar
              dataKey="caloriesBurned"
              name="Burn"
              fill="#f97316"
              radius={[4, 4, 0, 0]}
              barSize={15}
            />
            <Bar
              dataKey="caloriesIntake"
              name="Intake"
              fill="#22c55e"
              radius={[4, 4, 0, 0]}
              barSize={15}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ChartData;
