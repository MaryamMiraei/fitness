import api from "./axios";

export const getActivityLogs = async (): Promise<ActivityLog[]> => {
  const response = await api.get("/activity-logs");

  return response.data;
};

export const getActivityLog = async (
  documentId: string,
): Promise<ActivityLog> => {
  const response = await api.get(`/activity-logs/${documentId}`);

  return response.data;
};

export const addActivityLog = async (
  activityData: ActivityLogPost,
): Promise<ActivityLog> => {
  const response = await api.post("/activity-logs", {
    data: activityData,
  });

  return response.data;
};

export const updateActivityLog = async (
  documentId: string,
  activityData: Partial<ActivityLogPost>,
): Promise<ActivityLog> => {
  const response = await api.put(`/activity-logs/${documentId}`, {
    data: activityData,
  });

  return response.data;
};

export const deleteActivityLog = async (documentId: string) => {
  const response = await api.delete(`/activity-logs/${documentId}`);

  return response.data;
};

export const getTodayActivityLogs = async (): Promise<ActivityLog[]> => {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const startOfTomorrow = new Date(startOfToday);
  startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

  const response = await api.get(
    "/activity-logs",
    //فیلتر رو نمی فهمه!!!
    {
      params: {
        filters: {
          createdAt: {
            $gte: startOfToday.toISOString(),
            $lt: startOfTomorrow.toISOString(),
          },
        },
      },
    },
  );

  return response.data;
};
