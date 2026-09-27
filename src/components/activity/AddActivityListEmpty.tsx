
const AddActivityListEmpty = () => {
  return (
    <div className="bg-[#1e293b] rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center mx-auto mb-4">
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
              className="lucide lucide-dumbbell w-8 h-8 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            >
              <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path>
              <path d="m2.5 21.5 1.4-1.4"></path>
              <path d="m20.1 3.9 1.4-1.4"></path>
              <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path>
              <path d="m9.6 14.4 4.8-4.8"></path>
            </svg>
          </div>
      <h3 className="font-bold text-lg mb-2">No activity logged today</h3>
      <p className="text-gray-400 text-sm max-w-50">
        Start moving and track your progress
      </p>
    </div>
  );
}

export default AddActivityListEmpty