export const groupTickets = (grouping, ordering, data) => {
  // Initialize an object to store grouped data
  const groupedData = {};

  // Iterate over each ticket and group based on the `grouping` field
  data?.tickets?.forEach((ticket) => {
    let key;

    if (grouping === "priority") {
      key = ticket.priority;
    } else if (grouping === "status") {
      key = ticket.status;
    } else if (grouping === "users") {
      // Find user name by userId
      const user = data?.users?.find((user) => user.id === ticket.userId);
      key = user ? user.name : "Unknown";
    }

    // If the group does not exist, create it
    if (!groupedData[key]) {
      groupedData[key] = [];
    }

    // Add the ticket to the relevant group
    groupedData[key].push(ticket);
  });

  // Convert the grouped data object into an array of objects
  const groupedArray = Object.keys(groupedData).map((key) => ({
    title: key,
    data: groupedData[key],
  }));

  // Optional ordering
  if (ordering) {
    groupedArray.forEach((group) => {
      group.data.sort((a, b) => a[ordering] - b[ordering]);
    });
  }

  return groupedArray;
};
