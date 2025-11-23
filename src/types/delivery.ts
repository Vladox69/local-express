export interface Location {
  id: string;
  name: string;
  schedules: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export interface Store {
  id: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  deliveryTime: string;
  products: Product[];
}

export interface CartItem {
  storeId: string;
  storeName: string;
  product: Product;
  quantity: number;
}
