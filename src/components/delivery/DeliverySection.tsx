import { useState } from "react";
import LocationSelector from "./LocationSelector";
import StoreList from "./StoreList";
import Cart from "./Cart";
import { Store as StoreType, CartItem, Location } from "@/types/delivery";

// Mock data para locales comerciales
const mockStores: StoreType[] = [
  {
    id: "1",
    name: "Restaurante El Sabor",
    category: "Restaurante",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    rating: 4.5,
    deliveryTime: "30-45 min",
    products: [
      { id: "p1", name: "Hamburguesa Clásica", price: 6.50, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
      { id: "p2", name: "Pizza Familiar", price: 12.00, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
      { id: "p3", name: "Alitas Picantes", price: 8.00, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2" },
    ],
  },
  {
    id: "2",
    name: "Farmacia San José",
    category: "Farmacia",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881",
    rating: 4.8,
    deliveryTime: "20-30 min",
    products: [
      { id: "p4", name: "Paracetamol 500mg", price: 2.50, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae" },
      { id: "p5", name: "Vitamina C", price: 8.50, image: "https://images.unsplash.com/photo-1550572017-4a245a0ce922" },
      { id: "p6", name: "Gel Antibacterial", price: 3.00, image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b" },
    ],
  },
  {
    id: "3",
    name: "Supermercado Mi Tienda",
    category: "Supermercado",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a",
    rating: 4.3,
    deliveryTime: "40-60 min",
    products: [
      { id: "p7", name: "Pan Integral", price: 1.50, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff" },
      { id: "p8", name: "Leche Entera 1L", price: 1.20, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b" },
      { id: "p9", name: "Huevos x12", price: 3.50, image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f" },
    ],
  },
];

const DeliverySection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedStore, setSelectedStore] = useState<StoreType | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (storeId: string, productId: string) => {
    const store = mockStores.find(s => s.id === storeId);
    const product = store?.products.find(p => p.id === productId);
    
    if (!product || !store) return;

    const existingItem = cart.find(
      item => item.product.id === productId && item.storeId === storeId
    );

    if (existingItem) {
      setCart(cart.map(item =>
        item.product.id === productId && item.storeId === storeId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        storeId,
        storeName: store.name,
        product,
        quantity: 1,
      }]);
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCart(cart.filter(item => item.product.id !== productId));
    } else {
      setCart(cart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <LocationSelector
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
        />
        
        {selectedLocation && (
          <StoreList
            stores={mockStores}
            selectedStore={selectedStore}
            onStoreSelect={setSelectedStore}
            onAddToCart={handleAddToCart}
          />
        )}
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-4">
          <Cart
            items={cart}
            location={selectedLocation}
            onUpdateQuantity={handleUpdateQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;
