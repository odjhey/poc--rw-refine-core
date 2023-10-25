export const schema = gql`
  input PageInfoInput {
    sort: [JSON!]!
    where: JSON
    start: Int
    limit: Int
  }

  type ListMeta {
    count: Int!
  }
`
