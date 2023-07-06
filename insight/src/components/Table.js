import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { readString } from "react-papaparse";
import csvFile from "../data/sample.csv";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [data, setData] = React.useState([]);

  const papaConfig = {
    complete: (results, file) => {
      setData(results.data);
    },
    download: true,
    error: (error, file) => {
      console.log("Error while parsing:", error, file);
    },
  };

  React.useEffect(() => {
    readString(csvFile, papaConfig);
    console.log("UseEffect called");
  }, []);

  console.log(data);

  return (
    <TableContainer sx={{  }} component={Paper}>
      <Table sx={{  }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {data.length > 0 ? (
              data[0].map((value, index) => (
                <StyledTableCell key={index}>{value}</StyledTableCell>
              ))
            ) : (
              <div></div>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(1).map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row[0]}
              </StyledTableCell>
              <StyledTableCell align="left">{row[1]}</StyledTableCell>
              <StyledTableCell align="left">{row[2]}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
