
import { TableData } from "../types/admin";

export const mockData: Record<string, TableData[]> = {
  support: [
    { 
      id: "636771c1736c0b13bc6e1", 
      title: "Not character", 
      description: "dental dentist", 
      created_at: "2023-05", 
      updated_at: "2023-05", 
      is_active: true, 
      tags: "mile beyond", 
      views: 180 
    },
    { 
      id: "636771c1736c0b13bc6e2", 
      title: "Medical", 
      description: "Job medical", 
      created_at: "2023-05", 
      updated_at: "2023-05", 
      is_active: false, 
      tags: "speech elections high those", 
      views: 679 
    },
    { 
      id: "636771c1736c0b13bc6e3", 
      title: "Read prevent", 
      description: "Hi bye test truth", 
      created_at: "2023-05", 
      updated_at: "2023-05", 
      is_active: true, 
      tags: "help watching", 
      views: 519 
    }
  ],
  tickets: [
    { 
      id: "1", 
      title: "Bug Report", 
      status: "Open", 
      priority: "High", 
      created_at: "2023-05-15", 
      updated_at: "2023-05-15", 
      assignee: "John Doe", 
      description: "Critical bug needs fixing", 
      is_active: true, 
      tags: "bug, urgent" 
    },
    { 
      id: "2", 
      title: "Feature Request", 
      status: "In Progress", 
      priority: "Medium", 
      created_at: "2023-05-14", 
      updated_at: "2023-05-14", 
      assignee: "Jane Smith", 
      description: "New feature implementation", 
      is_active: true, 
      tags: "feature, enhancement" 
    }
  ]
};
