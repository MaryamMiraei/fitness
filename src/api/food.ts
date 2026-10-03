import api from "./axios";

export const getFoodLogs = async (): Promise<FoodLog[]> => {
  const response = await api.get("/food-logs");

  return response.data;
};

export const getFoodLog = async (documentId: string): Promise<FoodLog> => {
  const response = await api.get(`/food-logs/${documentId}`);

  return response.data;
};

export const addFoodLog = async (foodData: FoodLogPost): Promise<FoodLog> => {
  const response = await api.post("/food-logs", {
    data: foodData,
  });

  return response.data;
};

export const updateFoodLog = async (
  documentId: string,
  foodData: Partial<FoodLogPost>,
): Promise<FoodLog> => {
  const response = await api.put(`/food-logs/${documentId}`, {
    data: foodData,
  });

  return response.data;
};

export const deleteFoodLog = async (documentId: string) => {
  const response = await api.delete(`/food-logs/${documentId}`);

  return response.data;
};

export const getTodayFoodLogs = async () => {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const startOfTomorrow = new Date(startOfToday);
  startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

  const response = await api.get("/food-logs", {
    params: {
      filters: {
        createdAt: {
          $gte: startOfToday.toISOString(),
          $lt: startOfTomorrow.toISOString(),
        },
      },
    },
  });

  return response.data;
};