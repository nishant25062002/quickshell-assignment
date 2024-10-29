export const idToName = (title, data, grouping) => {
  if (grouping === "priority") {
    const priorityMap = {
      4: "Urgent",
      3: "High",
      2: "Medium",
      1: "Low",
      0: "No priority",
    };
    return priorityMap[title] || "Unknown Priority";
  }

  if (grouping === "users") {
    const user = data?.users?.find((user) => user.id === title);
    return user ? user.name : "Unknown User";
  }

  return title;
};
