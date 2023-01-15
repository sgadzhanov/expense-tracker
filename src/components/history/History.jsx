import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import HistoryItem from './HistoryItem';

import classes from './History.module.css';

const History = () => {
  const { history } = useContext(CartContext);

  return (
    <div>
      <div className={classes.history__title}>
        <h4>History</h4>
      </div>
      <div>
        {history.length === 0
          ?
          <h4 className={classes.empty__history}>
            Your transactions will be shown here.
          </h4>
          : history.map(item => {
            const formattedSum = Number(item.sum).toFixed(2);
            return (
              <HistoryItem
                key={item.id}
                id={item.id}
                title={item.title}
                sum={formattedSum}
                type={item.type}
              />)
          })
        }
      </div>
    </div>
  );
};

export default History;