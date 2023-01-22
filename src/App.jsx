import { CartProvider } from "./context/CartProvider"

import { Header } from "./components/header/Header"
import Balance from "./components/balance/Balance"
import TrackContainer from "./components/track-container/TrackContainer"
import History from "./components/history/History"
import AddTransaction from "./components/transaction/AddTransaction"

function App() {

  return (
    <div>
      <Header />
      <CartProvider>
        <Balance />
        <TrackContainer />
        <History />
        <AddTransaction />
      </CartProvider>
    </div>
  );
}

export default App;