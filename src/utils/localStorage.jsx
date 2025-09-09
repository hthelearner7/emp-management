const employees = [
    {
        id: 1,
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
    },
    {
        id: 2,
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
    },
    {
        id: 3,
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
    },
    {
        id: 4,
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
    },
    {
        id: 5,
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
    },
    {
        id: 6,
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
    },
    {
        id: 7,
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
    },
];

const admins = [
    {
        id: 101,
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
