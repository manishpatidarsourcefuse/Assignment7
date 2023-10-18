import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    id?: number;
    name: string;
    [prop: string]: any;
    constructor(data?: Partial<Users>);
}
export interface UsersRelations {
}
export type UsersWithRelations = Users & UsersRelations;
