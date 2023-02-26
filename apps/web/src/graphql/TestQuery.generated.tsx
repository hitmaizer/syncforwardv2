import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TestQueryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TestQueryQuery = {
  __typename?: 'Query';
  posts?: {
    __typename?: 'PostEntityResponseCollection';
    data: Array<{
      __typename?: 'PostEntity';
      attributes?: {
        __typename?: 'Post';
        title?: string | null;
        image?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: {
              __typename?: 'UploadFile';
              url: string;
              placeholder?: string | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export const TestQueryDocument = gql`
  query TestQuery {
    posts {
      data {
        attributes {
          title
          image {
            data {
              attributes {
                url
                placeholder
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useTestQueryQuery__
 *
 * To run a query within a React component, call `useTestQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<TestQueryQuery, TestQueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TestQueryQuery, TestQueryQueryVariables>(
    TestQueryDocument,
    options
  );
}
export function useTestQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TestQueryQuery,
    TestQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TestQueryQuery, TestQueryQueryVariables>(
    TestQueryDocument,
    options
  );
}
export type TestQueryQueryHookResult = ReturnType<typeof useTestQueryQuery>;
export type TestQueryLazyQueryHookResult = ReturnType<
  typeof useTestQueryLazyQuery
>;
export type TestQueryQueryResult = Apollo.QueryResult<
  TestQueryQuery,
  TestQueryQueryVariables
>;
