export const idToName = (title, data, grouping) => {
  if (grouping === "priority") {
    const priorityMap = {
      4: "Urgent Priority",
      3: "High Priority",
      2: "Medium Priority",
      1: "Low Priority",
      0: "No Priority",
    };
    return priorityMap[title] || "Unknown Priority";
  }

  if (grouping === "users") {
    const user = data?.users?.find((user) => user.id === title);
    return user ? user.name : "Unknown User";
  }

  return title;
};
