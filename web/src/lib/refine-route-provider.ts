import { useCallback, useContext } from 'react'

import {
  GoConfig,
  ParseResponse,
  ResourceContext,
  matchResourceFromRoute,
} from '@refinedev/core'
import { parse, stringify } from 'qs'

import {
  matchPath,
  navigate,
  back,
  useLocation,
  useParams,
} from '@redwoodjs/router'

export const convertToNumberIfPossible = (value: string | undefined) => {
  if (typeof value === 'undefined') {
    return value
  }
  const num = Number(value)
  if (`${num}` === value) {
    return num
  }
  return value
}

const stringifyConfig = {
  addQueryPrefix: true,
  skipNulls: true,
  arrayFormat: 'indices' as const,
  encode: false,
  encodeValuesOnly: true,
}

export const routerProvider =
  // : {
  //     go?: () => ({
  //         to?: string;
  //         query?: Record<string, unknown>;
  //         hash?: string;
  //         options?: {
  //             keepQuery?: boolean;
  //             keepHash?: boolean;
  //         };
  //         type?: "push" | "replace" | "path";
  //     }) => void | string
  // back?: () => () => void;

  //     parse?: () => () => {
  //         resource?: IResourceItem;
  //         id?: BaseKey;
  //         action?: Action;
  //         pathname?: string;
  //         params?: {
  //             filters?: CrudFilters;
  //             sorters?: CrudSorting;
  //             current?: number;
  //             pageSize?: number;
  //             [key: string]: any;
  //         }
  //     };
  //     Link?: React.ComponentType<{ to: string; children?: React.ReactNode; }>;
  // }
  {
    go: () => {
      const { search: existingSearch, hash: existingHash } = useLocation()

      const fn = useCallback(
        ({
          to,
          type,
          query,
          hash,
          options: { keepQuery, keepHash } = {},
        }: GoConfig) => {
          /** Construct query params */
          const urlQuery = {
            ...(keepQuery &&
              existingSearch &&
              parse(existingSearch, { ignoreQueryPrefix: true })),
            ...query,
          }

          if (urlQuery.to) {
            urlQuery.to = encodeURIComponent(`${urlQuery.to}`)
          }

          const hasUrlQuery = Object.keys(urlQuery).length > 0

          /** Get hash */
          const urlHash = `#${(
            hash ||
            (keepHash && existingHash) ||
            ''
          ).replace(/^#/, '')}`

          const hasUrlHash = urlHash.length > 1

          const urlTo = to || ''

          const fullPath = `${urlTo}${
            hasUrlQuery ? stringify(urlQuery, stringifyConfig) : ''
          }${hasUrlHash ? urlHash : ''}`

          if (type === 'path') {
            return fullPath
          }

          /** Navigate to the url */
          return navigate(fullPath, {
            replace: type === 'replace',
          })
        },
        [existingHash, existingSearch, navigate]
      )

      return fn
    },
    back: () => {
      const fn = useCallback(() => {
        back()
      }, [navigate])

      return fn
    },

    parse: () => {
      let params = useParams()
      const { pathname, search } = useLocation()
      const { resources } = useContext(ResourceContext)

      const { resource, action, matchedRoute } = React.useMemo(() => {
        return matchResourceFromRoute(pathname, resources)
      }, [resources, pathname])

      // params is empty when useParams is used in a component that is not a child of a Route
      if (Object.entries(params).length === 0 && matchedRoute) {
        params =
          (matchPath(matchedRoute, pathname)?.params as Record<
            string,
            string
          >) || {}
      }

      const fn = useCallback(() => {
        const parsedSearch = parse(search, { ignoreQueryPrefix: true })

        const combinedParams = {
          ...params,
          ...parsedSearch,
        }

        const response: ParseResponse = {
          ...(resource && { resource }),
          ...(action && { action }),
          ...(params?.id && { id: decodeURIComponent(params.id) }),
          // ...(params?.action && { action: params.action }), // lets see if there is a need for this
          pathname,
          params: {
            ...combinedParams,
            current: convertToNumberIfPossible(
              combinedParams.current as string
            ) as number | undefined,
            pageSize: convertToNumberIfPossible(
              combinedParams.pageSize as string
            ) as number | undefined,
            to: combinedParams.to
              ? decodeURIComponent(combinedParams.to as string)
              : undefined,
          },
        }

        return response
      }, [pathname, search, params, resource, action])

      return fn
    },
  }
