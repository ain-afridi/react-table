import React, { useMemo } from "react";
import { COLUMNS } from "./columns";
import Mock_Data from "./data/MOCK_DATA.json";
import { useTable, useSortBy } from "react-table";

const SortingTable = () => {
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
  } = useTable({
    columns,
    data,
  }, useSortBy);
    
    const svg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width={'8px'} height={'8px'} fill="white" viewBox="0 0 512 512" id="sort"><path d="M226.918,106.17c5.077,5.077,5.077,13.308,0,18.385c-2.538,2.538-5.866,3.808-9.192,3.808c-3.327,0-6.653-1.269-9.192-3.808
	l-80.17-80.171v454.614c0,7.18-5.82,13-13,13s-13-5.82-13-13V44.384l-80.17,80.171c-5.076,5.076-13.309,5.076-18.385,0
	c-5.077-5.077-5.077-13.308,0-18.385L106.171,3.807C108.608,1.37,111.915,0,115.363,0s6.755,1.37,9.192,3.808L226.918,106.17z
	 M508.191,387.445c-5.076-5.076-13.309-5.076-18.385,0l-80.17,80.171V13.001c0-7.18-5.82-13-13-13s-13,5.82-13,13v454.614
	l-80.171-80.171c-5.076-5.076-13.309-5.076-18.385,0c-5.077,5.077-5.077,13.308,0,18.385l102.363,102.363
	c2.438,2.438,5.744,3.808,9.192,3.808s6.755-1.37,9.192-3.808L508.191,405.83C513.269,400.752,513.269,392.522,508.191,387.445z"></path></svg>
    )

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span className="header-sorting">
                    {column.isSorted ? (column.isSortedDesc ? svg() : svg()) : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => {
            return (
              <tr {...footerGroup.getFooterProps}>
                {footerGroup.headers.map((column) => {
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

export default SortingTable;
