import { UserRole } from '../enums';

export interface User {
    id: string;
    email: string;
    token: string;
    role: UserRole;
}
