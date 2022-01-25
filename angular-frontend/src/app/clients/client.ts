export class Client {
    id: number | undefined;
    name: string | undefined;
    createdAt: string | undefined;

    constructor(id?: number, name?: string, createdAt?: string) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
    }
}
