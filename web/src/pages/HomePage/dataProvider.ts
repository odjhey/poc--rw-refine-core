import { DataProvider } from '@refinedev/core'
import { GraphQLClient } from 'graphql-request'

// import { generateFilter, generateSort } from './utils'

const dataProvider = (_client: GraphQLClient): Required<DataProvider> => {
  return {
    // getList: async ({ resource, pagination, sorters, filters, meta }) => {
    getList: async (_) => {
      // const { current = 1, pageSize = 10, mode = 'server' } = pagination ?? {}

      // const sortBy = generateSort(sorters)
      // const filterBy = generateFilter(filters)

      // const camelResource = camelCase(resource)

      // const operation = meta?.operation ?? camelResource

      console.log('get list')

      return {
        data: [],
        total: 0,
      }
    },

    getMany: async (_) => {
      return {
        data: [],
      }
    },

    create: async (_) => {
      return {}
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

export default dataProvider
