import { IReservation, IReservationResponse } from "../../shared/types";
import axiosInstance from "../Api";

export const get = async (): Promise<IReservationResponse> =>
  axiosInstance.get("/");

export const create = async (data: IReservation) =>
  axiosInstance.post("/", data);

export const update = async (data: IReservation) =>
  axiosInstance.put("/", data);

export const exclude = async () => axiosInstance.delete("/");
