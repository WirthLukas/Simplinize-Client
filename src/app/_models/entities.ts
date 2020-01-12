export class CurrentUser {
    constructor(
        public id: number,
        public credentials: string,
        public firstName: string,
        public lastName: string,
        public token: string
    ) {}
}

export class CustomResponse {
    constructor(
        public typ?: string,
        public resource?: string,
        public message?: string,
        public data?: object[]
    ) {}
}

