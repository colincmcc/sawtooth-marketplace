import { TypeComposer} from 'graphql-compose';
import { AssetTC } from './Asset';

export const HoldingTC = TypeComposer.create(`
  type Holding {
    id: String!
    label: String!
    quantity: Integer!
    asset: String!
  }
`);
