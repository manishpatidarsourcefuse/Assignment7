import {MiddlewareSequence, RequestContext} from '@loopback/rest';

export interface SequenceHandler {
  handle(context: RequestContext): Promise<void>;
}

require('dotenv').config();

export class MySequence extends MiddlewareSequence {
  async handle(context: RequestContext): Promise<void> {
    const { request } = context;
    const now = new Date();
    const referer = request.headers['referer']
    const env = process.env.NODE_ENV
    const allowOrigin = process.env.ALLOWED_ORIGIN || ''

    // const compilationTime = context.requestTimeout
    // const errorTime = context.headersTimeout
    
    console.log('requestSecond', {
      startTime: now,
      referer: request.headers['referer'],
      userAgent: request.headers['user-agent'],
      requestedBaseUrl: context.requestedBaseUrl,
      // compilationTime: context.requestTimeout,
      // errorTime: context.headersTimeout,      
    });

    // if (allowOrigin !== referer) {
    //   console.log('Inside', {allowOrigin});
    //   throw new Error(`You referer is not allowed to go inside`);
    // }

    await super.handle(context);
    console.log('After request', {endTime: new Date()});
  }
}
