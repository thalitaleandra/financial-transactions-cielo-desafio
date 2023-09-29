import React, { useState, useEffect } from 'react';
import { Button, Collapse, Table, Typography, Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import useTransactionData from '@/Hooks/useTransactionData'
import './styles.scss'


export default function DetailsTable() {
    const formattedData = useTransactionData();
    const [transaction, setTransaction] = useState([]);
    const [openRow, setOpenRow] = useState<string | null>(null);
  
    useEffect(() => {
        setTransaction( formattedData)
      }, [formattedData]);

    const handleCollapse = (rowName: string) => {
      if (openRow === rowName) {
        setOpenRow(null);
      } else {
        setOpenRow(rowName);
      }
    };
  
    return (
      <TableContainer className="list" component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
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
            {transaction.map((row, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => handleCollapse(row.id)}
                    >
                      {openRow === row.name ? 'Esconda Detalhes' : 'Detalhes'}
                    </Button>
                  </TableCell>
                  <TableCell className="tablecell" component="th" scope="row">
                    {row.id}
                  </TableCell>
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
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openRow === row.id} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" className="tablecell" gutterBottom component="div">
                        Histórico de Transação
                    </Typography>
                    <Table size="small" aria-label="purchases">
                        <TableHead>
                        <TableRow>
                            <TableCell className="tablecell">Nó de Pagamento</TableCell>
                            <TableCell className="tablecell" align="right">CNPJ Raiz</TableCell>
                            <TableCell className="tablecell" align="right">Código de Autorização</TableCell>
                            <TableCell className="tablecell" align="right">Número de Cartão Truncado</TableCell>
                            <TableCell className="tablecell" align="right">Terminal</TableCell>
                            <TableCell className="tablecell" align="right">Taxa de Administração</TableCell>
                            <TableCell className="tablecell" align="right">Código de Canal</TableCell>
                            <TableCell className="tablecell" align="right">Valor de Retirada</TableCell>
                            <TableCell className="tablecell" align="right">Valor Mínimo de MDR</TableCell>
                            <TableCell className="tablecell" align="right">Valor de Taxa MDR</TableCell>
                            <TableCell className="tablecell" align="right">Valor de Taxa Livre de MDR</TableCell>
                        </TableRow>
                        </TableHead>
                         <TableBody>
                            <TableRow>
                            <TableCell className="tablecell" component="th" scope="row">
                                {row.paymentNode}
                            </TableCell>
                            <TableCell className="tablecell" align="right" >{row.cnpjRoot}</TableCell>
                            <TableCell className="tablecell" align="right">{row.authorizationCode}</TableCell>
                            <TableCell className="tablecell" align="right">
                                {row.truncatedCardNumber}
                            </TableCell>
                            <TableCell className="tablecell">
                                {row.terminal}
                            </TableCell>
                            <TableCell className="tablecell" align="right">
                                {row.administrationFee}
                            </TableCell>
                            <TableCell className="tablecell" align="right">
                                {row.channelCode}
                            </TableCell>
                            <TableCell className="tablecell" align="right">
                                {row.withdrawAmount }
                            </TableCell>
                            <TableCell className="tablecell" align="right">
                                {row.minimumMDRAmmount}
                            </TableCell>
                            <TableCell className="tablecell" align="right">
                                {row.mdrTaxAmount}
                            </TableCell>
                            <TableCell className="tablecell" align="right">
                                {row.mdrFeeAmount}
                            </TableCell>
                            </TableRow>
                    </TableBody>
              </Table>
            </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }