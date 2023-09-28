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
                  <TableCell component="th" scope="row">
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
                    <Typography variant="h6" gutterBottom component="div">
                        Histórico de Transação
                    </Typography>
                    <Table size="small" aria-label="purchases">
                        <TableHead>
                        <TableRow>
                            <TableCell >Nó de Pagamento</TableCell>
                            <TableCell >CNPJ Raiz</TableCell>
                            <TableCell>Código de Autorização</TableCell>
                            <TableCell>Número de Cartão Truncado</TableCell>
                            <TableCell>Terminal</TableCell>
                            <TableCell>Taxa de Administração</TableCell>
                            <TableCell>Código de Canal</TableCell>
                            <TableCell>Valor de Retirada</TableCell>
                            <TableCell>Valor Mínimo de MDR</TableCell>
                            <TableCell>Valor de Taxa MDR</TableCell>
                            <TableCell>Valor de Taxa Livre de MDR</TableCell>
                        </TableRow>
                        </TableHead>
                         <TableBody>
                            <TableRow>
                            <TableCell component="th" scope="row">
                                {row.paymentNode}
                            </TableCell>
                            <TableCell>{row.cnpjRoot}</TableCell>
                            <TableCell>{row.authorizationCode}</TableCell>
                            <TableCell>
                                {row.truncatedCardNumber}
                            </TableCell>
                            <TableCell>
                                {row.terminal}
                            </TableCell>
                            <TableCell>
                                {row.administrationFee}
                            </TableCell>
                            <TableCell>
                                {row.channelCode}
                            </TableCell>
                            <TableCell>
                                {row.withdrawAmount }
                            </TableCell>
                            <TableCell>
                                {row.minimumMDRAmmount}
                            </TableCell>
                            <TableCell>
                                {row.mdrTaxAmount}
                            </TableCell>
                            <TableCell>
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