'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = process.env.NEXT_PUBLIC_SF_BASE_CMS_URL;

const cache = new InMemoryCache({
  typePolicies: {
    GameEntity: {
      fields: {
        attributes: {
          merge(existing, incoming, { mergeObjects }) {
            return mergeObjects(existing, incoming);
          },
        },
      },
    },
    PlatformEntity: {
      fields: {
        attributes: {
          merge(existing, incoming, { mergeObjects }) {
            return mergeObjects(existing, incoming);
          },
        },
      },
    },
  },
});

const client = new ApolloClient({ uri, cache });

export default client;
