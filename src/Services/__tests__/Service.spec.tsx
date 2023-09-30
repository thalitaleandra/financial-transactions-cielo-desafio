import fetchTransactions from '../fetchTransactions';
import axiosInstance from '../../Libs/axios';

jest.mock('../../Libs/axios'); 

describe('fetchTransactions', () => {
  it('returns data from API', async () => {
    const mockApiResponse = {
      summary: 'Mocked summary',
      pagination: {},
      items: ['item1', 'item2'],
    };

    (axiosInstance.get as jest.Mock).mockResolvedValue({ data: mockApiResponse });

    const result = await fetchTransactions();

    expect(result).toEqual(mockApiResponse);
  });
});