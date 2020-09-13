import { IBaseModel } from './base-model';
import { IOffer } from './offer';
export interface IBusinessAddress extends IBaseModel {
    street: string;
    street2?: string;
    district?: string;
    zip: string;
    city: string;
    country: string;
    location?: {
        type: string;
        coordinates: number[];
    };
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
    offers: IOffer[];
    users: string[];
}
