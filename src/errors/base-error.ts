export abstract class BaseError extends Error {
    public abstract override readonly name: string;
    public origin: ErrorOrigin;
    
    constructor(message: string, origin?: ErrorOrigin) {
        super(message);
        this.origin = origin ?? 'internal';
    }
}

type ErrorOrigin = 'internal' | 'request';