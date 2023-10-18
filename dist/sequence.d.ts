import { MiddlewareSequence, RequestContext } from '@loopback/rest';
export interface SequenceHandler {
    handle(context: RequestContext): Promise<void>;
}
export declare class MySequence extends MiddlewareSequence {
    handle(context: RequestContext): Promise<void>;
}
