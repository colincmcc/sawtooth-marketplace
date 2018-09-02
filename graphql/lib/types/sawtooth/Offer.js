import { TypeComposer} from 'graphql-compose';
import { RuleTC } from './Rule';

export const OfferTC = TypeComposer.create(`
  type Offer {
    id: String!
    label: String!
    description: String!
    owners: [String]
    source: String!
    sourceQuantity: Integer!
    target: String
    targetQuantity: Integer
    rules: [RuleTC]
  }
`);
