import React, { useMemo } from "react";
import { COLUMNS } from "./columns";
import Mock_Data from "./data/MOCK_DATA.json";
import { useTable, useRowSelect } from "react-table";
import Checkbox from "./Checkbox";

const RowSelection = () => {
  const columns: any = useMemo(() => COLUMNS, []);
  //   const columns: any = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => Mock_Data, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  }: any = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }: any) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }: any) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const firstPageRow = rows.slice(0, 10);
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any, index: number) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRow.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup: any) => {
            return (
              <tr {...footerGroup.getFooterProps}>
                {footerGroup.headers.map((column: any) => {
                  return (
                    <td {...column.getFooterProps()}>
                      {column.render("Footer")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
          </table>
          
          <pre>
              <code>
                  {
                      JSON.stringify({
                          selectedFlatRows: selectedFlatRows.map((row: any) => row.original)
                      },
                          null,
                          2
                      )
                  }
              </code>
          </pre>
    </div>
  );
};

export default RowSelection;
