export const groupTickets = (grouping, ordering, data) => {
  const groupedData = {};

  data?.tickets?.forEach((ticket) => {
    let key;
    const user = data?.users?.find((user) => user.id === ticket.userId);

    if (grouping === "priority") {
      key = ticket.priority;
    } else if (grouping === "status") {
      key = ticket.status;
    } else if (grouping === "users") {
      key = user ? user.name : "Unknown";
    }

    if (!groupedData[key]) {
      groupedData[key] = [];
    }

    groupedData[key].push({ ...ticket, name: user.name });
  });

  const groupedArray = Object.keys(groupedData).map((key) => ({
    title: key,
    data: groupedData[key],
  }));

  if (ordering) {
    groupedArray.forEach((group) => {
      group.data.sort((a, b) => {
        if (ordering === "title") {
          return a.title.localeCompare(b.title); // Lexicographical sort by title
        } else {
          return a[ordering] - b[ordering]; // Numerical sort for other fields
        }
      });
    });
  }
  return groupedArray;
};