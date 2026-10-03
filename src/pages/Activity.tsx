import { useState } from "react";
import AddActivityBottom from "../components/activity/AddActivityBottom";
import AddActivityModal from "../components/activity/AddActivityModal";
import AddActivityList from "../components/activity/AddActivityList";

const Activity = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  // const currentUser = useAuthStore((state) => state.currentUser);
  // const activityWorkouts = useUserData((state) =>
  //   currentUser ? state.userProfiles[currentUser.email]?.activityWorkouts : [],
  // );

  // const todayCalorieBurn = getDailyCalorieBurn(activityWorkouts);

  return (
    <div className="mb-16 lg:ml-64 lg:mb-0 bg-[#0f172a] text-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start mb-8 p-8 bg-[#1e293b] ">
        <div className="">
          <h2 className="text-3xl font-bold mb-1">Activity Log</h2>
          <p className="text-gray-400">Track your daily workouts</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm">Today's Total</p>
          <span className="text-emerald-500 font-bold text-2xl">
            {} kcal
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {/* Left Side */}
        {isModalOpen ? (
          <AddActivityModal close={close} />
        ) : (
          <AddActivityBottom open={open} />
        )}

        {/* Right Side */}
        <AddActivityList />
      </div>
    </div>
  );
};

export default Activity;
