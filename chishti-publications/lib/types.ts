export type Specification = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number | null;
  image?: string;
  description: string;
  sku?: string;
  specifications?: Specification[];
  featured?: boolean;
};

export type Category = {
  name: string;
  slug: string;
  description: string;
  accent: string;
};
