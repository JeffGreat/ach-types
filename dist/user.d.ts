import { IBaseModel } from "./base-model";
export declare enum UserRolesEnum {
    superAdmin = 0,
    admin = 1,
    user = 2
}
export interface IUser extends IBaseModel {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    stripeCust: string;
    role: UserRolesEnum;
}
