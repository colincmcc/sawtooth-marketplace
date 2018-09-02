import { TypeComposer} from 'graphql-compose';
import { HoldingTC } from './Holding';


export const AccountTC = TypeComposer.create(`
  type Account {
    publicKey: String!
    label: String!
    description: String
    holdings: [HoldingTC]
    tz: String
  }
`);