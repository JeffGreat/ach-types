import { IBaseModel } from './base-model';
export interface IBusinessAddress extends IBaseModel {
    street: string;
    street2?: string;
    district?: string;
    zip: string;
    city: string;
    country: string;
    long?: string;
    lat?: string;
}
export interface IBookingOptions {
    enabled: boolean;
    fromPax: number;
    minBefore: number;
    capacity: number;
    noShowEnabled: boolean;
    noShowCaution: number;
}
export interface IBusiness extends IBaseModel {
    name: string;
    description: string;
    phone: string;
    email: string;
    openingHours: string;
    accessInfos: string;
    address: IBusinessAddress;
    siren: string;
    bookingOptions: IBookingOptions;
    users: string[];
}
