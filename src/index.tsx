import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Desenvolvimento Web',
        category: 'Dev',
        type: 'deposit',
        created_at: new Date('2021-04-05 16:52:00'),
        amount: 5000
      }, {
        id: 2,
        title: 'Aluguel',
        category: 'Moradia',
        type: 'withdraw',
        created_at: new Date('2021-04-10 08:00:00'),
        amount: 1000
      }]
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => this.schema.all('transaction').models);

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', {
        ...data,
        created_at: new Date(),
      }).attrs;
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);