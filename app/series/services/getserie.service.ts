import { apiFetch } from "@/service/api";
import { GetSerieResponse } from '../interfaces/getserie.interface';

export async function getSeries(): Promise<GetSerieResponse[]> {
    return apiFetch<GetSerieResponse[]>('/series');
}
