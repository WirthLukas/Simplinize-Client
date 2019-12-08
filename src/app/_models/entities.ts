export class CurrentUser {

    constructor(
        public id: number,
        public credentials: string,
        public firstName: string,
        public lastName: string,
        public token: string
    ) {}
}
