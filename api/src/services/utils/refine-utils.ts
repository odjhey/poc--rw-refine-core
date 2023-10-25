// TODO: fix typings
export const genericFindMany = async (dbModel: any, vars) => {
  const data = await dbModel.findMany({
    where: vars.pageInfo.where,
    skip: vars.pageInfo.start,
    take: vars.pageInfo.limit,
    // add sorting
    orderBy: vars.pageInfo.sort,
  })

  const count = dbModel.count()
  return { data, metadata: { count } }
}
