import { ApolloClient } from '@apollo/client'
import { DataProvider } from '@refinedev/core'
import camelcase from 'camelcase'
import * as gqlBuilder from 'gql-query-builder'
import pluralize from 'pluralize'

import { generateFilter, generateSort } from '../pages/HomePage/utils'

export const dataProvider = (
  // TODO: update cache type
  client: ApolloClient<any>
): Required<DataProvider> => {
  return {
    getList: async ({ resource, pagination, sorters, filters, meta }) => {
      const { current = 1, pageSize = 10, mode = 'server' } = pagination ?? {}

      const sortBy = generateSort(sorters)
      const filterBy = generateFilter(filters)

      const camelResource = pluralize(camelcase(resource))

      const operation = meta?.operation ?? camelResource

      // console.log('get list', {
      //   operation,
      //   meta,
      //   sortBy,
      //   filterBy,
      //   pagination,
      // })

      const { query, variables } = gqlBuilder.query({
        operation,
        variables: {
          ...meta?.variables,
          pageInfo: {
            type: 'PageInfoInput',
            value: {
              sort: sortBy,
              where: { value: filterBy, type: 'JSON' },
              ...(mode === 'server'
                ? {
                    start: (current - 1) * pageSize,
                    limit: pageSize,
                  }
                : {}),
            },
          },
        },
        fields: [{ data: meta.fields }, { metadata: ['count'] }],
      })

      const response = await client.query({
        query: gql`
          ${query}
        `,
        variables,
      })

      return {
        data: response.data[camelResource].data,
        total: response.data[camelResource].metadata.count,
      }
    },

    getMany: async (_) => {
      return {
        data: [],
      }
    },

    create: async ({ resource, variables, meta }) => {
      console.log('createeee', { resource, variables, meta })

      const singularResource = pluralize.singular(resource)
      const camelCreateName = camelcase(`create-${singularResource}`)
      const pascalCreateName = camelcase(`create-${singularResource}`, {
        pascalCase: true,
      })

      const operation = meta?.operation ?? camelCreateName
      const inputType = meta?.inputType ?? `${pascalCreateName}Input`

      const fields = meta?.fields
        ? [{ [singularResource]: meta?.fields }]
        : undefined

      const { query, variables: gqlVariables } = gqlBuilder.mutation({
        operation,
        variables: {
          input: {
            value: variables,
            type: inputType,
            required: true,
          },
        },
        fields: fields ?? [
          {
            operation: singularResource,
            fields: ['id'],
            variables: {},
          },
        ],
      })
      const response = await client.mutate({
        mutation: gql`
          ${query}
        `,
        variables: gqlVariables,
      })

      console.log('---', response, { operation, singularResource })
      return {
        data: response.data[operation][singularResource],
      }
    },

    createMany: async (_) => {
      return {
        data: [],
      }
    },

    update: async (_) => {
      return {
        data: [],
      }
    },

    updateMany: async (_) => {
      return {
        data: [],
      }
    },

    getOne: async (_) => {
      return {
        data: [],
      }
    },

    deleteOne: async (_) => {
      return {
        data: [],
      }
    },

    deleteMany: async (_) => {
      return {
        data: [],
      }
    },

    getApiUrl: () => {
      throw Error('Not implemented on refine-graphql data provider.')
    },

    custom: async ({ url, method, headers: _, meta }) => {
      // const gqlClient = client

      if (url) {
        // gqlClient = new GraphQLClient(url, { headers })
      }

      if (meta) {
        if (meta.operation) {
          if (method === 'get') {
            return {
              data: [],
            }
          } else {
            return {
              data: [],
            }
          }
        } else {
          throw Error('GraphQL operation name required.')
        }
      } else {
        throw Error(
          'GraphQL need to operation, fields and variables values in meta object.'
        )
      }
    },
  }
}
