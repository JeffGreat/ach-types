export interface IBusinessAddress {
    street: string;
    street2?: string;
    district?: string;
    zip: string;
    city: string;
    country: string;
    long?: string;
    lat?: string;
}
export interface IBusiness {
    name: string;
    description: string;
    phone: string;
    email: string;
    openingHours: string;
    accessInfos: string;
    address: IBusinessAddress;
    siren: string;
    users: string[];
}
