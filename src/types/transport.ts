export interface TransportRoute {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  availableSeats: number;
  totalSeats: number;
  price: number;
}
