import type {
  QueryResolvers,
  MutationResolvers,
  TaskRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { genericFindMany } from '../utils/refine-utils'

export const tasks: QueryResolvers['tasks'] = (v) => {
  return genericFindMany(db.task, v)
}

export const createTask: MutationResolvers['createTask'] = ({ input }) => {
  return {
    task: db.task.create({
      data: input,
    }),
  }
}

export const Task: TaskRelationResolvers = {
  Job: (_obj, { root }) => {
    return db.task.findUnique({ where: { id: root?.id } }).Job()
  },
}
