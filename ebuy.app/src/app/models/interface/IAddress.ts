import { ICity } from "./ICity";

export interface IAddress {
    id: number;
    zipcode: string;
    address1: string;
    address2: string;
    number: number;
    district: string;
    city: ICity
}