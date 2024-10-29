# Interactive Kanban Board Application

This is an interactive Kanban board application built using React JS. The application interacts with the provided API to display tickets that can be grouped and sorted based on user preferences.

## Live Demo

[Link to the hosted website](https://quickshell-assignment-iota.vercel.app/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Grouping and Sorting](#grouping-and-sorting)
- [Design](#design)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- Fetches data from the provided API.
- Users can group tickets by:
  - Status
  - User
  - Priority
- Users can sort tickets by:
  - Priority (descending)
  - Title (ascending)
- Responsive and visually appealing design.
- User's view state is preserved even after page reload.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/nishant25062002/quickshell-assignment.git
   ```
2. Navigate to the project directory:

   cd quickshell-assignment

3. Start the development server:

   npm install

4. Start the development server:

   npm start

5. Open your browser and navigate to http://localhost:3000

## Usage

1. Click the "Display" button to filter the Kanban board.
2. Select a grouping option (Status, User, or Priority) to adjust the board dynamically.
3. Use the sorting options to arrange tickets as desired.

## Grouping and Sorting

Grouping Options

1.  By Status: Groups tickets based on their current status, allowing users to quickly identify the state of each ticket.
2.  By User: Arranges tickets according to the assigned user, making it easier to manage workloads.
3.  By Priority: Groups tickets based on their priority level, helping users focus on the most important tasks first.

Sorting Options

1.  Priority: Sorts tickets in descending order of priority, ensuring that urgent tasks are always at the top.
2.  Title: Sorts tickets in ascending order based on their title, providing a straightforward alphabetical organization.

## Design

The application design closely matches the provided screenshots, ensuring an intuitive and user-friendly interface. All styling is done using pure CSS, adhering to the specified design guidelines. Careful attention has been paid to ensure that the layout is responsive and visually appealing.

## Technologies Used

React JS: For building the user interface and managing application state.
Pure CSS: For styling the application without using any CSS libraries.

## Installation

Made by Nishant Mainwal 💖
