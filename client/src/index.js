import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adm from './Adm'
/*import Test from './test'*/

if(window.location.pathname === "/admin"){
  ReactDOM.render(
    <React.StrictMode>
      <Adm />
    </React.StrictMode>,
    document.getElementById('root')
  );
}else{
  ReactDOM.render(<App />,document.getElementById('root'));
}