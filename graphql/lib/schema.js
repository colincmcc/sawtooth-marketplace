import { GQC } from 'graphql-compose';
import fetch from 'node-fetch';
import { pubsub } from "./subscriptions";

import {dev, prod} from './config'
require('dotenv').config()

const sawtoothMKURL = process.env.SAWTOOTH_MK_URL

// * Sawtooth
// -Queries

// -Mutations

// Subscriptions

GQC.rootMutation().addFields({

});
GQC.rootQuery().addFields({
  .
})

GQC.rootSubscription().addFields({

});

const schema = GQC.buildSchema(); // returns GraphQLSchema

export default schema;
