import type { MutationResolvers, QueryResolvers } from 'types/graphql'

export const sampols: QueryResolvers['sampols'] = (args) => {
  console.log(args)
  // generate 100 sampols
  const data = [...Array(100).keys()].map((i) => ({
    id: `${i}`,
    title: 'test',
    status: 'asdf',
    createdAt: 'sdfi',
  }))

  // splice array using start and limit
  if (args.pageInfo?.start !== undefined && args.pageInfo?.limit) {
    const limited = data.splice(args.pageInfo.start, args.pageInfo.limit)
    return { data: limited, metadata: { count: data.length } }
  }

  return { data, metadata: { count: data.length } }
}

export const sampol: QueryResolvers['sampol'] = ({ id }) => {
  console.log({ id })
  return {
    id: 'x898709',
    title: 'test',
    status: 'asdf',
    createdAt: 'sdfi',
  }
}

export const createSampol: MutationResolvers['createSampol'] = ({ input }) => {
  return {
    sampol: { ...input, createdAt: '1123', id: '123' },
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
