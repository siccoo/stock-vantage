import React, { useEffect, useState } from 'react';
import apiRequest from '../utils/apiRequest';

interface StockData {
  'Meta Data': {
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Interval': string;
  };
  'Time Series (5min)': {
    [key: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    };
  };
}

const StockData: React.FC = () => {
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: StockData = await apiRequest();
        setStockData(data);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Stock Data</h2>
      {isLoading && <p>Loading data...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {stockData && (
        <div>
          <p className="mb-2"><span className="font-semibold">Symbol:</span> {stockData['Meta Data']['2. Symbol']}</p>
          <p className="mb-2"><span className="font-semibold">Last Refreshed:</span> {stockData['Meta Data']['3. Last Refreshed']}</p>
          <p className="mb-2"><span className="font-semibold">Interval:</span> {stockData['Meta Data']['4. Interval']}</p>
          <p className="font-semibold">Stock Prices:</p>
          <ul>
            {Object.entries(stockData['Time Series (5min)']).map(([time, data]) => (
              <li key={time} className="mb-2">
                <span className="font-semibold">{time}:</span> {data['1. open']}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StockData;