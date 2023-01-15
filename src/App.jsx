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

export default App

//todo: 
// 1) delete transaction from history
// 2) add validation and better UX to the form
// 3) deploy