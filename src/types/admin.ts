
export interface TableData {
  id: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  tags: string;
  views?: number;
  status?: string;
  priority?: string;
  assignee?: string;
}

export const TABLES = [
  "support",
  "tickets", 
  "subscriptions",
  "loyalty",
  "discounts",
  "products",
  "coupons",
  "promotions",
  "groups"
] as const;

export type TableName = typeof TABLES[number];
