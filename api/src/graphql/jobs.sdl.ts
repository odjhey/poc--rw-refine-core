export const schema = gql`
  type Job {
    id: String!
    title: String!
    status: String!
    description: String!
    createdAt: DateTime!
    Tasks: [Task]!
  }

  type JobsPayload {
    data: [Job!]!
    metadata: ListMeta!
  }

  type Query {
    jobs(pageInfo: PageInfoInput): JobsPayload @requireAuth
  }

  input CreateJobInput {
    title: String!
    status: String!
    description: String!
  }

  type CreateJobPayload {
    job: Job!
  }

  type Mutation {
    createJob(input: CreateJobInput!): CreateJobPayload @requireAuth
  }
`
