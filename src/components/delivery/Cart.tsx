import { useState } from "react";
import { ShoppingCart, Minus, Plus, Clock, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CartItem, Location } from "@/types/delivery";

interface CartProps {
  items: CartItem[];
  location: Location | null;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

const Cart = ({ items, location, onUpdateQuantity }: CartProps) => {
  const [selectedSchedule, setSelectedSchedule] = useState<string>("");

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleWhatsAppOrder = () => {
    if (!location || !selectedSchedule || items.length === 0) return;

    const orderDetails = items
      .map(
        (item) =>
          `• ${item.product.name} x${item.quantity} - $${(
            item.product.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    const message = `¡Hola! 👋\n\nQuiero hacer un pedido:\n\n${orderDetails}\n\n📍 Ubicación: ${location.name}\n⏰ Horario de entrega: ${selectedSchedule}\n💰 Total: $${total.toFixed(2)}\n\n¡Gracias!`;

    const whatsappUrl = `https://wa.me/593999999999?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  if (items.length === 0) {
    return (
      <Card className="p-6">
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            <ShoppingCart className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Tu carrito está vacío</h3>
            <p className="text-sm text-muted-foreground">
              Agrega productos para comenzar tu pedido
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Tu Pedido
        </h3>
        <Badge variant="secondary">{items.length} items</Badge>
      </div>

      <div className="space-y-3 max-h-64 overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex gap-3 p-3 bg-muted/50 rounded-lg"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{item.product.name}</p>
              <p className="text-xs text-muted-foreground truncate">
                {item.storeName}
              </p>
              <p className="text-sm font-semibold text-primary mt-1">
                ${item.product.price.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col items-center justify-between">
              <div className="flex items-center gap-1 bg-background rounded-lg p-1">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-6 w-6"
                  onClick={() =>
                    onUpdateQuantity(item.product.id, item.quantity - 1)
                  }
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="text-sm font-medium w-6 text-center">
                  {item.quantity}
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-6 w-6"
                  onClick={() =>
                    onUpdateQuantity(item.product.id, item.quantity + 1)
                  }
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              <p className="text-sm font-semibold">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {location && (
        <div className="space-y-3 pt-4 border-t">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-medium">Horario de entrega</span>
          </div>
          <Select value={selectedSchedule} onValueChange={setSelectedSchedule}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un horario" />
            </SelectTrigger>
            <SelectContent>
              {location.schedules.map((schedule) => (
                <SelectItem key={schedule} value={schedule}>
                  {schedule}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="pt-4 border-t space-y-4">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total:</span>
          <span className="text-primary">${total.toFixed(2)}</span>
        </div>

        <Button
          className="w-full bg-success hover:bg-success/90 text-success-foreground"
          size="lg"
          disabled={!location || !selectedSchedule}
          onClick={handleWhatsAppOrder}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Enviar por WhatsApp
        </Button>

        {(!location || !selectedSchedule) && (
          <p className="text-xs text-center text-muted-foreground">
            {!location
              ? "Selecciona una ubicación para continuar"
              : "Selecciona un horario de entrega"}
          </p>
        )}
      </div>
    </Card>
  );
};

export default Cart;
