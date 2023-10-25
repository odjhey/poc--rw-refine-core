export const schema = gql`
  type Sampol {
    id: String!
    title: String!
    status: String!
    createdAt: String!
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

  type CreateSampolPayload {
    sampol: Sampol!
  }

  type Mutation {
    createSampol(input: CreateSampolInput!): CreateSampolPayload! @requireAuth
    updateSampol(id: String!, input: UpdateSampolInput!): Sampol! @requireAuth
    deleteSampol(id: String!): Sampol! @requireAuth
  }
`
