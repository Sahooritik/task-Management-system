const employees = [
  {
    id: "EMP001",
    email: "emp001@company.com",
    password: "12345",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login authentication issue.",
        taskDate: "2026-06-06",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Dashboard UI",
        taskDescription: "Improve dashboard responsiveness.",
        taskDate: "2026-06-03",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate employee API.",
        taskDate: "2026-06-08",
        category: "Backend"
      }
    ]
  },

  {
    id: "EMP002",
    email: "emp002@company.com",
    password: "12345",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Design landing page for company site.",
        taskDate: "2026-06-07",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve navbar responsiveness issue.",
        taskDate: "2026-06-02",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Optimization",
        taskDescription: "Improve DB query speed.",
        taskDate: "2026-06-01",
        category: "Database"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add test cases for login module.",
        taskDate: "2026-06-10",
        category: "Testing"
      }
    ]
  },

  {
    id: "EMP003",
    email: "emp003@company.com",
    password: "12345",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Setup Redux",
        taskDescription: "Implement Redux store.",
        taskDate: "2026-06-09",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix sidebar issue.",
        taskDate: "2026-06-04",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy project to production.",
        taskDate: "2026-06-05",
        category: "DevOps"
      }
    ]
  },

  {
    id: "EMP004",
    email: "emp004@company.com",
    password: "12345",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription: "Develop employee profile page.",
        taskDate: "2026-06-11",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix API Error",
        taskDescription: "Resolve API timeout issue.",
        taskDate: "2026-06-03",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Optimization",
        taskDescription: "Improve app loading speed.",
        taskDate: "2026-06-12",
        category: "Optimization"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Testing",
        taskDescription: "Check app vulnerabilities.",
        taskDate: "2026-06-02",
        category: "Security"
      }
    ]
  },

  {
    id: "EMP005",
    email: "emp005@company.com",
    password: "12345",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Admin Panel",
        taskDescription: "Create dashboard for admin.",
        taskDate: "2026-06-13",
        category: "Admin"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update CSS",
        taskDescription: "Improve website styling.",
        taskDate: "2026-06-01",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Payment Issue",
        taskDescription: "Resolve payment gateway bug.",
        taskDate: "2026-06-05",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Notifications",
        taskDescription: "Implement push notifications.",
        taskDate: "2026-06-14",
        category: "Feature"
      }
    ]
  }
];

const admin = [
  {
    id: "ADMIN001",
    email: "admin@company.com",
    password: "12345"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  return { employees: employeesData, admin: adminData };
}