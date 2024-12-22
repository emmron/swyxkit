export interface PageData {
  items: Array<{
    title: string;
    slug: string;
    description?: string;
    date: string;
    categories?: string[];
    tags?: string[];
    draft?: boolean;
  }>;
} 