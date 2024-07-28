import React, { useMemo } from "react";
import { COLUMNS } from "./columns";
import Mock_Data from "./data/MOCK_DATA.json";
import { useTable, useColumnOrder } from "react-table";

const ColumnOrder = () => {
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
    setColumnOrder,
  }: any = useTable(
    {
      columns,
      data,
    },
    useColumnOrder
  );

  const handleOrder = () => {
    setColumnOrder([
      "id",
      "first_name",
      "last_name",
      "phone",
      "country",
      "date_of_birth",
    ]);
  };

  return (
    <div>
      <button onClick={handleOrder}>Change Column Order</button>
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
          {rows.map((row: any) => {
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
    </div>
  );
};

export default ColumnOrder;
