import React from 'react'

import { useTable } from '@refinedev/react-table'
import { ColumnDef, flexRender } from '@tanstack/react-table'

const TasksList = () => {
  const columns = React.useMemo<ColumnDef<{ id: string }>[]>(
    () => [
      {
        id: 'id',
        header: 'ID',
        accessorKey: 'id',
      },
      {
        id: 'title',
        header: 'Title',
        accessorKey: 'title',
        meta: {
          filterOperator: 'contains',
        },
      },
      {
        id: 'status',
        header: 'Status',
        accessorKey: 'status',
        meta: {
          filterOperator: 'contains',
        },
      },
      {
        id: 'createdAt',
        header: 'CreatedAt',
        accessorKey: 'createdAt',
      },
      {
        id: 'jobId',
        header: 'jobId',
        accessorKey: 'jobId',
      },
    ],
    []
  )

  const {
    getHeaderGroups,
    getRowModel,
    getState,
    setPageIndex,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    setPageSize,
    getPrePaginationRowModel,
  } = useTable({
    columns,
  })

  return (
    <div>
      <table className="table table-zebra table-sm">
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div onClick={header.column.getToggleSortingHandler()}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                        <div>
                          <input
                            className="input input-bordered input-xs"
                            id={header.id}
                            value={
                              (header.column.getFilterValue() as string) ?? ''
                            }
                            onChange={(e) =>
                              header.column.setFilterValue(e.target.value)
                            }
                          />
                        </div>
                      </>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <button
          className="btn btn-xs"
          onClick={() => setPageIndex(0)}
          disabled={!getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="btn btn-xs"
          id="previous-button"
          onClick={() => previousPage()}
          disabled={!getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="btn btn-xs"
          id="next-button"
          onClick={() => nextPage()}
          disabled={!getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="btn btn-xs"
          onClick={() => setPageIndex(getPageCount() - 1)}
          disabled={!getCanNextPage()}
        >
          {'>>'}
        </button>
        <span>
          <div>Page</div>
          <strong>
            {getState().pagination.pageIndex + 1} of {getPageCount()}
          </strong>
        </span>
        <span>
          | Go to page:
          <input
            className="input input-bordered input-xs"
            type="number"
            defaultValue={getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              setPageIndex(page)
            }}
          />
        </span>
        <select
          value={getState().pagination.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{getPrePaginationRowModel().rows.length} Rows</div>
    </div>
  )
}

export default TasksList
