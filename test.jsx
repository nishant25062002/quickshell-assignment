quickshell-assignment/
├── public/
│   ├── index.html
│   └── assets/           # Any static assets like images, fonts, or icons
├── src/
│   ├── api/
│   │   └── api.js        # API request functions, such as fetchTickets
│   ├── components/
│   │   ├── KanbanBoard/
│   │   │   ├── KanbanBoard.jsx   # Main Kanban board component to display tickets
│   │   │   ├── KanbanColumn.jsx  # Reusable column component for each grouping
│   │   │   └── TicketCard.jsx    # Individual ticket card component for each ticket
│   │   ├── Header/
│   │   │   └── Header.jsx        # Header with grouping and sorting controls
│   │   └── Button/
│   │       └── Button.jsx        # Reusable button component for actions
│   ├── context/
│   │   └── ViewContext.js        # Context to handle view state (e.g., grouping/sorting) for persistence
│   ├── hooks/
│   │   └── useTickets.js         # Custom hook to fetch tickets and handle grouping/sorting
│   ├── pages/
│   │   └── Home.jsx              # Home page where Kanban board will be displayed
│   ├── services/
│   │   └── localStorageService.js # Utility to manage state persistence with localStorage
│   ├── styles/
│   │   ├── globals.css           # Global styles
│   │   ├── variables.css         # CSS variables for theme/colors
│   │   └── KanbanBoard.css       # CSS specific to Kanban board components
│   ├── App.js                    # Main App component
│   ├── index.js                  # Main entry point
│   └── setupTests.js             # Test setup file for Jest or React Testing Library
└── package.json


const grouping = useSelector(filterGrouping);
const ordering = useSelector(filterOrdering);