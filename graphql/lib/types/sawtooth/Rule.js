import { TypeComposer} from 'graphql-compose';

export const RuleTC = TypeComposer.create(`
  type Rule {
    type: String!
    value: [String]
  }
`);