import React, { useState, useEffect } from 'react';
import { companiesApi } from './utils/api';

const App = () => {
  const [data, setData] = useState(null);

  useEffect( () => {
    companiesApi.readAll().then(response => setData(response))
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.map( (item, index) =>
        <li key={index}>
          {JSON.stringify(item.data)}
        </li>
      )}
    </ul>
  )
}

export default App;
