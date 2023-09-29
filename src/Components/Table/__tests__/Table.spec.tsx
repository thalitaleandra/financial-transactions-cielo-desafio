import { render, screen } from "@testing-library/react"
import { faker } from "@faker-js/faker"
import Table from "../index"

const generateFormattedDataMock = () => [{id: faker.string.uuid(),  merchantId: faker.number.int(),
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


test("should render table headers", () => {
    render(<Table formattedData={generateFormattedDataMock()} />)

    const tableHeaders = ["ID da Transação", "ID do Comerciante", "Tipo de Pagamento", "Bandeira do Cartão", "Data da Transação", "Valor Bruto", "Valor Líquido", "Status"]

    tableHeaders.forEach(header => expect(screen.getByText(header)).toBeTruthy()) 
})
