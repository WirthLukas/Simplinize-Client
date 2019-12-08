import {Role} from "../role";

export class LoginDTO {

    constructor(
        public credentials: string,
        public password: string,
        public type: Role
    ) {}
}
