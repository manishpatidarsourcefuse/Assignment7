import {Context} from '@loopback/core';

const userAgent = new Context();

userAgent.bind('agentName').to('Jhon');
