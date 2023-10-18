"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySequence = void 0;
const rest_1 = require("@loopback/rest");
require('dotenv').config();
class MySequence extends rest_1.MiddlewareSequence {
    async handle(context) {
        const { request } = context;
        const now = new Date();
        const referer = request.headers['referer'];
        console.log('referer', referer);
        const env = process.env.NODE_ENV;
        const allowOrigin = process.env.ALLOWED_ORIGIN || '';
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
        console.log('After request', { endTime: new Date() });
    }
}
exports.MySequence = MySequence;
//# sourceMappingURL=sequence.js.map