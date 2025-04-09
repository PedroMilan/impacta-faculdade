export interface IReservation {
  id?: number;
  destination: string;
  date: string;
}

export interface IReservationResponse {
  data: IReservation[];
  status: number;
}

export interface ILocation {
  id: number;
  city: string;
  country: string;
}

export interface ILocationResponse {
  data: ILocation[];
  status: number;
}
