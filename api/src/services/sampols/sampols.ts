import type { MutationResolvers, QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const sampols: QueryResolvers['sampols'] = async (args) => {
  const data = await db.sampol.findMany({
    where: args.pageInfo.where,
    // include pagination in findMany
    skip: args.pageInfo.start,
    take: args.pageInfo.limit,
    // add sorting
    orderBy: args.pageInfo.sort,
  })

  const count = db.sampol.count()
  return { data, metadata: { count } }
}

export const sampol: QueryResolvers['sampol'] = ({ id }) => {
  return {
    id: 'x898709',
    title: 'test',
    status: 'asdf',
    createdAt: 'sdfi',
  }
}

export const createSampol: MutationResolvers['createSampol'] = async ({
  input,
}) => {
  const newSampol = await db.sampol.create({
    data: input,
  })

  return {
    sampol: newSampol,
  }
}
//
// export const updateSampol: MutationResolvers['updateSampol'] = ({
//   id,
//   input,
// }) => {
//   return db.sampol.update({
//     data: input,
//     where: { id },
//   })
// }
//
// export const deleteSampol: MutationResolvers['deleteSampol'] = ({ id }) => {
//   return db.sampol.delete({
//     where: { id },
//   })
// }
//
