# Crypto Provider

## Overview
![image](https://github.com/user-attachments/assets/c6c96152-825f-4a3a-a1e2-fb89cf5f2024)

Crypto Info App is a web application that provides detailed information about various cryptocurrencies, crypto exchanges, and the latest crypto-related news. Users can click on any cryptocurrency to view its details, price trends via a graph, and relevant exchange information. The app also features a table displaying live tickers of top cryptocurrencies.

## Features

- **Cryptocurrency Details**: Get detailed information about individual cryptocurrencies such as name, symbol, price, market cap, etc.
- **Crypto Price Graph**: View historical price trends for each cryptocurrency in an interactive graph.
- **Crypto Exchanges**: Access details of different crypto exchanges, including trading pairs and fees.
- **News Section**: Stay updated with the latest crypto news from various sources.
- **Ticker Table**: Displays a live ticker of the top cryptocurrencies by price and market cap.
  
## Technologies Used

- **Frontend**: React.js, Chart.js (or react-chartjs-2), 
- **Data Fetching**: Redux Query
- **State Management**: Redux
- **UI Components**: Ant Design

## APIs

This application integrates with several external APIs to fetch live data:

- **Crypto API**: Used to fetch cryptocurrency data (Coinranking API).
- **Exchange API**: Fetches information about crypto exchanges. (CoinGecko API)
- **News API**: Fetches the latest news related to cryptocurrencies.

### Environment Variables

The app uses environment variables to store API keys and sensitive information. Please create a `.env` file in the root directory and add your API keys:

```
REACT_APP_CRYPTO_API_KEY=your_crypto_api_key
REACT_APP_EXCHANGE_API_KEY=your_exchange_api_key
REACT_APP_NEWS_API_KEY=your_news_api_key
```

## Installation

To run the application locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/replyre/crypto-provider-v2.git
   cd crypto-provider-v2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**: Create a `.env` file in the root directory as mentioned in the **APIs** section.

4. **Run the application**:
   ```bash
   npm start
   ```

## Folder Structure

```
crypto-info-app/
├── public/
├── src/
│   ├── components/        # Reusable components
│   ├── pages/             # Pages for different routes (Home, CoinDetails, Exchanges, News)
│   ├── app/             # Redux and Redux Query setup for state and data fetching
│   ├── services/          # API query hooks created using Redux Query
│   ├── App.js             # Main application component
│   ├── index.js           # Entry point for the app
├── .env                   # Environment variables
├── package.json           # App dependencies
└── README.md              # Project documentation
```

## Usage

1. **Home Page**: Displays a ticker table with the top cryptocurrencies.
2.  **Coins Page**: Display all the crypto coins.
3. **Coin Details Page**: Click on any coin in the ticker to view detailed stats and a price trend graph.
 ![image](https://github.com/user-attachments/assets/9b6a84d0-1739-4f92-b658-c8b8081ba9cd)

4. **Exchanges Page**: Lists major exchanges and their respective information.
 ![image](https://github.com/user-attachments/assets/2eb87f85-6afa-4723-90ce-d7e33e96009e)

5. **News Section**: Shows a list of recent news articles related to cryptocurrency.
![image](https://github.com/user-attachments/assets/816ca17b-eb15-4cc8-8dd3-5c38434af62f)
 

## Contributing

We welcome contributions! If you have suggestions or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
