const employees = [
    {
        id: 1,
        firstName: "Amit",
        email: "employee1@example.com",
        password: "1234",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Design Homepage UI",
                description:
                    "Create wireframes and initial design for homepage",
                date: "2025-09-10",
                category: "Design",
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Setup GitHub Repo",
                description: "Initialize repo and push base code",
                date: "2025-09-05",
                category: "Development",
            },
        ],
        taskSummary: {
            activeTasks: 1,
            completedTasks: 1,
            failedTasks: 0,
            newTasks: 1,
        },
    },
    {
        id: 2,
        firstName: "Neha",
        email: "employee2@example.com",
        password: "1234",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Prepare API Documentation",
                description:
                    "Write documentation for user authentication endpoints",
                date: "2025-09-12",
                category: "Documentation",
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Fix Navbar Bug",
                description: "Resolve alignment issue in mobile view",
                date: "2025-09-03",
                category: "Bugfix",
            },
        ],
        taskSummary: {
            activeTasks: 1,
            completedTasks: 0,
            failedTasks: 1,
            newTasks: 1,
        },
    },
    {
        id: 3,
        firstName: "Ramesh",
        email: "employee3@example.com",
        password: "1234",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Database Schema",
                description: "Design schema for employee and task management",
                date: "2025-09-15",
                category: "Database",
            },
        ],
        taskSummary: {
            activeTasks: 1,
            completedTasks: 0,
            failedTasks: 0,
            newTasks: 1,
        },
    },
    {
        id: 4,
        firstName: "Priya",
        email: "employee4@example.com",
        password: "1234",
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Create Landing Page",
                description: "Develop landing page using React and Tailwind",
                date: "2025-09-02",
                category: "Frontend",
            },
        ],
        taskSummary: {
            activeTasks: 0,
            completedTasks: 1,
            failedTasks: 0,
            newTasks: 0,
        },
    },
    {
        id: 5,
        firstName: "Krishna",
        email: "employee5@example.com",
        password: "1234",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Unit Testing",
                description: "Write unit tests for task creation module",
                date: "2025-09-20",
                category: "Testing",
            },
        ],
        taskSummary: {
            activeTasks: 1,
            completedTasks: 0,
            failedTasks: 0,
            newTasks: 1,
        },
    },
    {
        id: 6,
        firstName: "Ganesh",
        email: "employee6@example.com",
        password: "1234",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Organize Team Meeting",
                description: "Schedule and prepare agenda for weekly sync-up",
                date: "2025-09-08",
                category: "Management",
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Book Conference Room",
                description: "Reserve room for client presentation",
                date: "2025-09-01",
                category: "Operations",
            },
        ],
        taskSummary: {
            activeTasks: 1,
            completedTasks: 1,
            failedTasks: 0,
            newTasks: 1,
        },
    },
    {
        id: 7,
        firstName: "Gopal",
        email: "employee7@example.com",
        password: "1234",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Prepare Budget Report",
                description: "Draft Q3 financial report for review",
                date: "2025-09-18",
                category: "Finance",
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Social Media Campaign",
                description: "Launch marketing posts for product release",
                date: "2025-09-04",
                category: "Marketing",
            },
        ],
        taskSummary: {
            activeTasks: 1,
            completedTasks: 0,
            failedTasks: 1,
            newTasks: 1,
        },
    },
];

const admins = [
    {
        id: 101,
        firstName: "mahesh",
        email: "admin@example.com",
        password: "1234",
    },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admins", JSON.stringify(admins));
};

export const getLocalStorage = () => {
    const employeesData = JSON.parse(localStorage.getItem("employees"));
    const adminsData = JSON.parse(localStorage.getItem("admins"));
    return { employeesData, adminsData };
};
