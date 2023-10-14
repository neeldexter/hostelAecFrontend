import * as React from 'react';
import './FeeStructureStyle.css';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Scientists', 4000.00, 5000.00, '100 USD'),
//   createData('Students/RA/SRF/JRF', 1500.00, 2000.00, '50 USD'),
//   createData('Accompanying person', 1500.00, 2000.00, '50 USD'),
//   createData('Corporate', 10000, 12000.00, '250 USD'),
// ];

// export default function FeeStructureTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Category</TableCell>
//             <TableCell>Early bird registration(till 15th October, 2023) </TableCell>
//             <TableCell>After 15th October, 2023</TableCell>
//             <TableCell>International delegates (USD)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="center">{row.calories}</TableCell>
//               <TableCell align="center">{row.fat}</TableCell>
//               <TableCell align="center">{row.carbs}</TableCell>
//               <TableCell align="center">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

export default function FeeStructureTable() {
return(
    <table style={{display:'flex', flexFlow:'column nowrap', lineHeight:'1.25', border:'1px solid black'}}>
		<tr>
			<th>Category </th>
			<th>Early bird registration(till 15th October, 2023)</th>
			<th>After 15th October, 2023</th>
			<th>International delegates (USD)</th>
		</tr>
		<tr>
			<td>Scientists</td>
			<td class="numbers">4000.00</td>
			<td class="numbers">5000.00 </td>
			<td class="numbers">100 USD</td>
		</tr>
		<tr>
			<td>Students/RA/SRF/JRF</td>
			<td>1500.00</td>
			<td>2000.00</td>
			<td>50 USD</td>
		</tr>
		<tr>
			<td>Accompanying person</td>
			<td>1500.00</td>
			<td>2000.00</td>
			<td>50 USD</td>
		</tr>
		<tr>
			<td>Corporate</td>
			<td class="numbers">10000.00</td>
			<td class="numbers">12000.00</td>
			<td class="numbers">250 USD</td>
		</tr>
	</table>
)
}