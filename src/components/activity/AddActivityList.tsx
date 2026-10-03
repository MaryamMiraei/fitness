

const AddActivityList = () => {
  
   

  // const currentUser = useAuthStore((state) => state.currentUser);
  // const activityWorkouts = useUserData((state) =>
  //   currentUser ? state.userProfiles[currentUser?.email]?.activityWorkouts : [],
  // );

  // const todayActivityWorkouts = getTodayEntries(activityWorkouts);
  // const totalActivityToday = todayActivityWorkouts.reduce(
  //   (total, workout) => total + workout.duration,
  //   0,
  // );
  // console.log(todayActivityWorkouts, "today");

  // const removeActivityWorkout = useUserData(
  //   (state) => state.removeActivityWorkout,
  // );
  // const [entryToDelete, setEntryToDelete] = useState<string | null>(null);

  // const handleDelete = () => {
  //   if (!entryToDelete || !currentUser) return;
  //   removeActivityWorkout(currentUser?.email, entryToDelete);
  //   setEntryToDelete(null);
  // };

  return (
    <div className="mb-[64px] lg:mb-0">
      {/* {todayActivityWorkouts.length === 0 ? (
        <AddActivityListEmpty />
      ) : (
        <div className="rounded-xl border border-slate-700 bg-[#0f172a] p-4 text-white">
          <div className="flex justify-between">
            <div className="mb-3 flex gap-3 items-center">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-activity size-5 text-blue-600"
                    aria-hidden="true"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <p className="text-sm text-slate-400 dark:text-slate-400">
                  <span>{todayActivityWorkouts.length} </span>items
                </p>
              </div>
            </div>
            <div>
              <p>{totalActivityToday} min</p>
            </div>
          </div>
          <ul className="space-y-2">
            {todayActivityWorkouts.map((workout) => (
              <li
                key={workout.id}
                className="flex justify-between rounded-2xl bg-slate-800 py-2 px-4"
              >
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-timer size-5 text-blue-500 dark:text-blue-400"
                      aria-hidden="true"
                    >
                      <line x1="10" x2="14" y1="2" y2="2"></line>
                      <line x1="12" x2="15" y1="14" y2="11"></line>
                      <circle cx="12" cy="14" r="8"></circle>
                    </svg>
                  </div>
                  <span>{workout.name}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex flex-col">
                    <span>{workout.duration} min</span>
                    <span className="text-slate-400">
                      {workout.calories} kcal
                    </span>
                  </div>
                  <button
                    type="button"
                    className="p-1 text-red-400 hover:text-red-600"
                    onClick={() => setEntryToDelete(workout.id)}
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
                  Delete activity?
                </h2>

                <p className="mt-2 text-slate-400">
                  Are you sure you want to delete this activity?
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
      )} */}
    </div>
  );
};

export default AddActivityList;
