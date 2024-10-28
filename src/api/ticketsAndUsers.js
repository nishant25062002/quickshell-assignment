import api from "../helper/intercepter";

export const getTicketsAndUsers = async () => {
  const res = await api.get(`/internal/frontend-assignment/`);
  return res;
};
