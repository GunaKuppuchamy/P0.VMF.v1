import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FNavbar from './FNavbar';

function createData(date, vegetable, No_of_Bags_OR_kgs, rate_per_bag_OR_kg, Extras,commission,transport_charges,total) {
  return {date, vegetable, No_of_Bags_OR_kgs, rate_per_bag_OR_kg, Extras,commission,transport_charges,total };
}
const rows = [
  createData('28/12/2023',"Brinjal", 6, 1200, 550, 775,320,6105),
  createData('29/12/2023',"Lady's Finger", 125, 10, 0, 125,200,925),

  createData('29/12/2023',"Lady's Finger", 125, 10, 0, 125,200,925),
];
export default function Fdata() {
  return (<>
    <FNavbar/>
    <TableContainer sx={{backgroundColor:'transparent'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="left">vagetable</TableCell>
            <TableCell align="left">No_of_Bags_OR_kgs</TableCell>
            <TableCell align="left">rate_per_bag_OR_kg</TableCell>
            <TableCell align="left">extras</TableCell>

            <TableCell align="left">commission</TableCell>
            <TableCell align="left">transport_charges</TableCell>
            <TableCell align="left">total</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.vegetable}</TableCell>
              <TableCell align="left">{row.No_of_Bags_OR_kgs}</TableCell>
              <TableCell align="left">{row.rate_per_bag_OR_kg}</TableCell>              
              <TableCell align="left">{row.Extras}</TableCell>
              <TableCell align="left">{row.commission}</TableCell>
              <TableCell align="left">{row.transport_charges}</TableCell>
              <TableCell align="left">{row.total}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}