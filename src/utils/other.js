import { PRIORITY, USERS } from "./contants";

export const idToName = (title, data, grouping) => {
  if (grouping === PRIORITY) {
    const priorityMap = {
      4: "Urgent Priority",
      3: "High Priority",
      2: "Medium Priority",
      1: "Low Priority",
      0: "No Priority",
    };
    return priorityMap[title] || "Unknown Priority";
  }

  if (grouping === USERS) {
    const user = data?.users?.find((user) => user.id === title);
    return user ? user.name : "Unknown User";
  }

  return title;
};
