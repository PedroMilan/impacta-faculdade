import { IReservation, IReservationResponse } from "../../shared/types";
import axiosInstance from "../Api";

export const get = async (): Promise<IReservationResponse> =>
  axiosInstance.get("/trips");

export const create = async (data: IReservation) =>
  axiosInstance.post("/trips", data);

export const update = async (data: IReservation) =>
  axiosInstance.put(`/trips/${data.id}`, data);

export const exclude = async (id: number) =>
  axiosInstance.delete(`/trips/${id}`);
