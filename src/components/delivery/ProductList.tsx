import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/delivery";

interface ProductListProps {
  products: Product[];
  storeId: string;
  onAddToCart: (storeId: string, productId: string) => void;
}

const ProductList = ({ products, storeId, onAddToCart }: ProductListProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="p-4 space-y-3">
            <div>
              <h4 className="font-semibold text-lg mb-1">{product.name}</h4>
              <p className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <Button
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
              onClick={() => onAddToCart(storeId, product.id)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Agregar al carrito
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
