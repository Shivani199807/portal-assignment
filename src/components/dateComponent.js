import React from "react";
import { TextField, Button, Box } from "@mui/material";

import dayjs from "dayjs";
import PropTypes from "prop-types";
import Heading from "./heading";
/**
 * A component for selecting a date range with "From Date" and "To Date" inputs.
 * It allows filtering data based on the selected date range .
 *
 * @component
 * @param {Object} props - React component props.
 * @param {{ fromDate: string, toDate: string }} props.dateFilter - The current date filter values.
 * @param {Function} props.setDateFilter - Function to update the date filter state.
 * @param {Function} props.fetchData - Function to fetch data based on the selected date range.
 * @returns {JSX.Element} The rendered DateComponent.
 */
const DateComponent = ({ dateFilter, setDateFilter, fetchData }) => {
  const handleSetDate = (e, dateType) => {
    const { value } = e.target;
    const formattedDate = dayjs(value).format("MM-DD-YYYY");
    /**
     *set the datefilter and fromDate not after the toDate.
     */
    setDateFilter((prev) => {
      const newFilter = { ...prev, [dateType]: formattedDate };

      if (dayjs(newFilter.fromDate).isAfter(newFilter.toDate)) {
        return prev;
      }

      return newFilter;
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
      <Heading text={"Filter By Date"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 2,
          p: 2,
        }}
      >
        <TextField
          label="From Date"
          type="date"
          value={dayjs(dateFilter.fromDate).format("YYYY-MM-DD")}
          onChange={(e) => handleSetDate(e, "fromDate")}
          sx={{ width: "224px" }}
        />

        <TextField
          label="To Date"
          type="date"
          value={dayjs(dateFilter.toDate).format("YYYY-MM-DD")}
          onChange={(e) => handleSetDate(e, "toDate")}
          sx={{ width: "224px" }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button variant="contained" color="grey" onClick={fetchData}>
          Filter
        </Button>
      </Box>
    </Box>
  );
};

DateComponent.propTypes = {
  dateFilter: PropTypes.shape({
    fromDate: PropTypes.string.isRequired,
    toDate: PropTypes.string.isRequired,
  }).isRequired,
  setDateFilter: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
};
export default DateComponent;
