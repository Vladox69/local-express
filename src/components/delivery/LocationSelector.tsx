import { MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Location } from "@/types/delivery";

const locations: Location[] = [
  {
    id: "urcuqui",
    name: "Urcuquí",
    schedules: ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM"],
  },
  {
    id: "yachay",
    name: "Yachay",
    schedules: ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"],
  },
  {
    id: "ibarra",
    name: "Ibarra",
    schedules: ["08:00 AM", "11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM"],
  },
];

interface LocationSelectorProps {
  selectedLocation: Location | null;
  onLocationChange: (location: Location) => void;
}

const LocationSelector = ({ selectedLocation, onLocationChange }: LocationSelectorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Selecciona tu ubicación
        </h2>
        <p className="text-muted-foreground">
          Elige tu ciudad para ver los horarios de entrega disponibles
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {locations.map((location) => (
          <Card
            key={location.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
              selectedLocation?.id === location.id
                ? "ring-2 ring-primary bg-accent"
                : "hover:bg-muted/50"
            }`}
            onClick={() => onLocationChange(location)}
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${
                selectedLocation?.id === location.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}>
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{location.name}</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Horarios disponibles:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {location.schedules.slice(0, 3).map((schedule, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-muted px-2 py-1 rounded"
                      >
                        {schedule}
                      </span>
                    ))}
                    {location.schedules.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{location.schedules.length - 3} más
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LocationSelector;
