import React from "react";
import "../styles/table.css";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

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
  rows: PropTypes.array.isRequired,
  dataTestId: PropTypes.string,
};

export default Table;
