import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, TablePagination } from '@mui/material';
import ITransactions from '@/Interfaces/ITransactions';
import "./styles.scss";

interface CustomTableProps {
  formattedData: ITransactions[];
}

export default function CustomTable({formattedData}: CustomTableProps ) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState<ITransactions[]>([]);
  
  useEffect(() => {
    setData(formattedData);
  }, [formattedData]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
 
  return (
    <>
      <TableContainer className="table" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell className="tableCollum">ID da Transação</TableCell>
            <TableCell className="tableCollum">ID do Comerciante</TableCell>
            <TableCell className="tableCollum">Tipo de Pagamento</TableCell>
            <TableCell className="tableCollum">Bandeira do Cartão</TableCell>
            <TableCell className="tableCollum">Data da Transação</TableCell>
            <TableCell className="tableCollum">Valor Bruto</TableCell>
            <TableCell className="tableCollum">Valor Líquido</TableCell>
            <TableCell className="tableCollum">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow  key={index} >
                <TableCell className="tablecell">{row.id}</TableCell>
                <TableCell className="tablecell">{row.merchantId}</TableCell>
                <TableCell className="tablecell" >{row.paymentType}</TableCell>
                <TableCell className="tablecell" >{row.cardBrand}</TableCell>
                <TableCell className="tablecell">{row.date}</TableCell>
                <TableCell className="tablecell">{row.grossAmount}</TableCell>
                <TableCell className="tablecell">{row.netAmount}</TableCell>
                <TableCell className="tablecell">
                  <span className={`status ${row.status}`}>
                  {row.status}
                  </span>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
         rowsPerPageOptions={[5, 10, 25]}
         component="div"
         count={25}
         rowsPerPage={rowsPerPage}
         page={page}
         onPageChange={handleChangePage}
         onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}