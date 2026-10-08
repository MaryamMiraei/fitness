import { useEffect, useState } from "react";
import {
  deleteActivityLog,
  getActivityLogs,
} from "../../api/activityAPI";
import AddActivityListEmpty from "./AddActivityListEmpty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { getTodayEntries } from "../../utils/calorieUtils";

interface IAddActivity {
  setTotalCaloriesBurnToday: (totalCaloriesBurnToday: number) => void;
}
const AddActivityList = ({ setTotalCaloriesBurnToday }: IAddActivity) => {
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const fetchActivityLogs = async () => {
      try {
        const data = await getActivityLogs();
        const todayActivities = getTodayEntries(data);

        setActivityLogs(todayActivities);

        const totalCaloriesBurnToday = todayActivities.reduce(
          (sum, workout) => sum + workout.calories,
          0,
        );
        setTotalCaloriesBurnToday(totalCaloriesBurnToday);
      } catch (error) {
        console.log(error);
        setError("Failed to load food logs");
      } finally {
        setLoading(false);
      }
    };

    fetchActivityLogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleDeleteClick = (documentId: string) => {
    setSelectedDocumentId(documentId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedDocumentId) return;

    try {
      await deleteActivityLog(selectedDocumentId);

      setActivityLogs((prev) =>
        prev.filter((workout) => workout.documentId !== selectedDocumentId),
      );
      setIsDeleteModalOpen(false);
      setSelectedDocumentId(null);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancelDelete = () => {
    setSelectedDocumentId(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="mb-[64px] lg:mb-0">
      {activityLogs.length === 0 ? (
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
                  <span>{activityLogs.length} </span>items
                </p>
              </div>
            </div>
            <div>
              <p>{} min</p>
            </div>
          </div>
          <ul className="space-y-2">
            {activityLogs.map((workout) => (
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
                    onClick={() => handleDeleteClick(workout.documentId)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {isDeleteModalOpen && (
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
                    onClick={handleCancelDelete}
                    className="rounded-lg px-4 py-2 text-slate-300"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleConfirmDelete}
                    className="rounded-lg bg-red-500 px-4 py-2 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddActivityList;
