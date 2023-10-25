import type {
  QueryResolvers,
  MutationResolvers,
  JobRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { genericFindMany } from '../utils/refine-utils'

export const jobs: QueryResolvers['jobs'] = async (v) => {
  return genericFindMany(db.job, v)
}

export const createJob: MutationResolvers['createJob'] = ({ input }) => {
  return {
    job: db.job.create({
      data: input,
    }),
  }
}

export const Job: JobRelationResolvers = {
  Tasks: (_obj, { root }) => {
    return db.job.findUnique({ where: { id: root?.id } }).Tasks()
  },
}
