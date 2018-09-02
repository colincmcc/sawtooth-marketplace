import { TypeComposer} from 'graphql-compose';
import { RuleTC } from './Rule';


export const AssetTC = TypeComposer.create(`
  type Asset {
    name: String!
    description: String!
    owners: [String]
    rules: [RuleTC]
  }
`);

