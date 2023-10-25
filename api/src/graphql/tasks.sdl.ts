export const schema = gql`
  type Task {
    id: String!
    title: String!
    status: String!
    description: String!
    createdAt: DateTime!
    Job: Job
    jobId: String!
  }
  type TasksPayload {
    data: [Task!]!
    metadata: ListMeta!
  }

  type Query {
    tasks(pageInfo: PageInfoInput): TasksPayload @requireAuth
  }

  input CreateTaskInput {
    title: String!
    status: String!
    description: String!
    jobId: String!
  }

  type CreateTaskPayload {
    task: Task!
  }

  type Mutation {
    createTask(input: CreateTaskInput!): CreateTaskPayload @requireAuth
  }
`
