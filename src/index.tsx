import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => ([
      {
        id: 1,
        title: 'Honorários',
        amount: 400,
        type: 'deposit',
        category: 'Services',
        created_at: new Date(),
      },
      {
        id: 2,
        title: 'Comeu Morreu Lanches',
        amount: -59,
        type: 'withdraw',
        category: 'Food',
        created_at: new Date(),
      },
    ]));
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);