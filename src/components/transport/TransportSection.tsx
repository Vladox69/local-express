import { Car, MapPin, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TransportRoute } from "@/types/transport";

const mockRoutes: TransportRoute[] = [
  {
    id: "r1",
    from: "Urcuquí",
    to: "Ibarra",
    departureTime: "08:00 AM",
    arrivalTime: "09:00 AM",
    availableSeats: 3,
    totalSeats: 4,
    price: 2.50,
  },
  {
    id: "r2",
    from: "Yachay",
    to: "Ibarra",
    departureTime: "10:00 AM",
    arrivalTime: "10:45 AM",
    availableSeats: 2,
    totalSeats: 4,
    price: 2.00,
  },
  {
    id: "r3",
    from: "Ibarra",
    to: "Urcuquí",
    departureTime: "02:00 PM",
    arrivalTime: "03:00 PM",
    availableSeats: 4,
    totalSeats: 4,
    price: 2.50,
  },
  {
    id: "r4",
    from: "Ibarra",
    to: "Yachay",
    departureTime: "04:00 PM",
    arrivalTime: "04:45 PM",
    availableSeats: 1,
    totalSeats: 4,
    price: 2.00,
  },
  {
    id: "r5",
    from: "Urcuquí",
    to: "Yachay",
    departureTime: "06:00 PM",
    arrivalTime: "06:30 PM",
    availableSeats: 0,
    totalSeats: 4,
    price: 1.50,
  },
];

const TransportSection = () => {
  const handleBookSeat = (route: TransportRoute) => {
    const message = `¡Hola! 👋\n\nQuiero reservar un asiento:\n\n🚗 Ruta: ${route.from} → ${route.to}\n⏰ Salida: ${route.departureTime}\n⏰ Llegada: ${route.arrivalTime}\n💰 Precio: $${route.price.toFixed(2)}\n\n¡Gracias!`;

    const whatsappUrl = `https://wa.me/593999999999?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-full mb-4">
          <Car className="w-8 h-8 text-secondary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Transporte Compartido
        </h2>
        <p className="text-muted-foreground">
          Viaja cómodo y seguro entre Urcuquí, Yachay e Ibarra con horarios fijos
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {mockRoutes.map((route) => {
          const isAvailable = route.availableSeats > 0;
          const occupancyPercent =
            ((route.totalSeats - route.availableSeats) / route.totalSeats) * 100;

          return (
            <Card
              key={route.id}
              className={`p-6 space-y-4 ${
                !isAvailable ? "opacity-60" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-secondary" />
                      <span className="font-semibold text-lg">{route.from}</span>
                    </div>
                    <span className="text-muted-foreground">→</span>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-secondary" />
                      <span className="font-semibold text-lg">{route.to}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{route.departureTime}</span>
                    </div>
                    <span>→</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{route.arrivalTime}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-secondary">
                    ${route.price.toFixed(2)}
                  </div>
                  <div className="text-xs text-muted-foreground">por persona</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">Asientos disponibles:</span>
                  </div>
                  <Badge
                    variant={isAvailable ? "secondary" : "destructive"}
                    className="font-semibold"
                  >
                    {route.availableSeats} / {route.totalSeats}
                  </Badge>
                </div>

                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 rounded-full transition-all ${
                      occupancyPercent >= 100
                        ? "bg-destructive"
                        : occupancyPercent >= 75
                        ? "bg-primary"
                        : "bg-success"
                    }`}
                    style={{ width: `${occupancyPercent}%` }}
                  />
                </div>
              </div>

              <Button
                className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground"
                disabled={!isAvailable}
                onClick={() => handleBookSeat(route)}
              >
                {isAvailable ? "Reservar asiento" : "No disponible"}
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TransportSection;
