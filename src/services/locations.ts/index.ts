import { ILocationResponse } from "../../shared/types";
import axiosInstance from "../Api";

export const getLocations = async (): Promise<ILocationResponse> =>
  axiosInstance.get("/locations");
