import { IFederatedState } from "./IFederatedState";

export interface ICity {
    id: number;
    name: string;
    uf: IFederatedState;
}