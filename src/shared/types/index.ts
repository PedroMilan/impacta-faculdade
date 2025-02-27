export interface IReservation {
  id?: number;
  destination: string;
  date: string;
}

export interface IReservationResponse {
  data: IReservation[];
  status: number;
}
