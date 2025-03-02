import React from "react";
import "../styles/table.css";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

/**
 
 * This component renders a table using Material UI's DataGrid.
 * 
 * @param {Object} props -table props
 * @param {Array}  props.rows // rows containing data
 * @param {Array} props.column // columns contain header data
 * @param {String} [props.dataTestId]  // unique id for elements
 * @returns {JSX.Element}  // component table return 
 */
const Table = ({ rows, column, dataTestId }) => {
  return (
    <Box
      sx={{
        "& .tableHeader": {
          backgroundColor: "grey",
          color: "#000000",
          fontWeight: "bold",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={column}
        pageSizeOptions={[5]}
        columnHeaderHeight={40}
        rowHeight={40}
        sx={{
          "& .MuiDataGrid-cell": {
            padding: 1,
          },
        }}
        // getRowHeight={() => 'auto'}

        // virtualizeColumnsWithAutoRowHeight

        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        data-testid={dataTestId}
        disableColumnFilter
        disableColumnMenu
        disableDensitySelector
        disableColumnResize
        showCellVerticalBorder
        disableColumnSorting
      />
    </Box>
  );
};
Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
