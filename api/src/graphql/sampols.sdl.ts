export const schema = gql`
  type Sampol {
    id: String!
    title: String!
    status: String!
    createdAt: String!
  }

  input PageInfoInput {
    sort: [String!]!
    where: JSON
    start: Int
    limit: Int
  }

  type ListMeta {
    count: Int!
  }
  type SampolsPayload {
    data: [Sampol!]!
    metadata: ListMeta!
  }

  type Query {
    sampols(pageInfo: PageInfoInput): SampolsPayload @requireAuth
    sampol(id: String!): Sampol @requireAuth
  }

  input CreateSampolInput {
    title: String!
    status: String!
  }

  input UpdateSampolInput {
    title: String
    status: String
  }

  type Mutation {
    createSampol(input: CreateSampolInput!): Sampol! @requireAuth
    updateSampol(id: String!, input: UpdateSampolInput!): Sampol! @requireAuth
    deleteSampol(id: String!): Sampol! @requireAuth
  }
`
