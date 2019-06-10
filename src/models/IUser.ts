export interface IUser {
    first_name?: string;
    last_name?: string;
    id?: string|number;
    email?: string;
    image?: string;
}

export class User implements IUser {
    first_name = '';
    last_name = 'a';
    email = 'ema';
}