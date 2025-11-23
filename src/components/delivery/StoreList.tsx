import { Store, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Store as StoreType } from "@/types/delivery";
import ProductList from "./ProductList";

interface StoreListProps {
  stores: StoreType[];
  selectedStore: StoreType | null;
  onStoreSelect: (store: StoreType | null) => void;
  onAddToCart: (storeId: string, productId: string) => void;
}

const StoreList = ({ stores, selectedStore, onStoreSelect, onAddToCart }: StoreListProps) => {
  if (selectedStore) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => onStoreSelect(null)}>
            ← Volver a locales
          </Button>
          <h2 className="text-2xl font-bold">{selectedStore.name}</h2>
        </div>
        <ProductList
          products={selectedStore.products}
          storeId={selectedStore.id}
          onAddToCart={onAddToCart}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">
        Locales Comerciales
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {stores.map((store) => (
          <Card
            key={store.id}
            className="overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]"
            onClick={() => onStoreSelect(store)}
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-card text-card-foreground">
                  {store.category}
                </Badge>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{store.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span>{store.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{store.deliveryTime}</span>
                  </div>
                </div>
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Store className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{store.products.length} productos disponibles</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
