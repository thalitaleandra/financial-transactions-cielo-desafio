import { render, screen } from "@testing-library/react"
import { faker } from "@faker-js/faker"
import Table from "../index"

const generateFormattedDataMock = () => [{id: faker.string.uuid(),  merchantId: faker.string.alpha(),
    paymentNode: faker.number.int(),
    cnpjRoot: faker.number.int(),
    date: faker.string.alpha(),
    paymentType:faker.string.alpha(),
    cardBrand:faker.string.alpha(),
    authorizationCode: faker.string.alpha(),
    truncatedCardNumber:faker.string.alpha(),
    grossAmount: faker.number.int(),
    netAmount: faker.number.int(),
    terminal: faker.string.alpha(),
    administrationFee: faker.number.int(),
    channelCode: faker.number.int(),
    channel: faker.string.alpha(), 
    withdrawAmount: faker.number.int(),
    minimumMDRAmmount:faker.number.int(),
    mdrTaxAmount: faker.number.int(),
    mdrFeeAmount: faker.number.int(),
    status:faker.string.alpha()}]

const formattedDataMock = [
        {
          "id": "114606514478703",
          "merchantId": "2000463023",
          "paymentNode": 485173,
          "cnpjRoot": 485116,
          "date": "2021-05-26T12:12:55",
          "paymentType": "Crédito à vista",
          "cardBrand": "Mastercard",
          "authorizationCode": "378216",
          "truncatedCardNumber": "1014",
          "grossAmount": 80,
          "netAmount": 76.88,
          "terminal": "00032668",
          "administrationFee": 3.9,
          "channelCode": 15,
          "channel": "Super Link / Digitada",
          "withdrawAmount": 0,
          "minimumMDRAmmount": -3.12,
          "mdrTaxAmount": 0,
          "mdrFeeAmount": -3.12,
          "status": "Aprovada"
        },
];
test("should render table headers", () => {
    render(<Table formattedData={generateFormattedDataMock()} />)

    const tableHeaders = ["ID da Transação", "ID do Comerciante", "Tipo de Pagamento", "Bandeira do Cartão", "Data da Transação", "Valor Bruto", "Valor Líquido", "Status"]

    tableHeaders.forEach(header => expect(screen.getByText(header)).toBeTruthy()) 
})

test("should render rows with data", () => {
    render(<Table formattedData={formattedDataMock} />);
  
    formattedDataMock.forEach((data) => {
        expect(screen.getByText(data.id)).toBeTruthy();
        expect(screen.getByText(data.merchantId)).toBeTruthy();
        expect(screen.getByText(data.paymentType)).toBeTruthy();
        expect(screen.getByText(data.cardBrand)).toBeTruthy();
        expect(screen.getByText(data.date)).toBeTruthy();
        expect(screen.getByText(data.grossAmount.toString())).toBeTruthy();
        expect(screen.getByText(data.netAmount.toString())).toBeTruthy();
        expect(screen.getByText(data.status)).toBeTruthy();
    });
  });