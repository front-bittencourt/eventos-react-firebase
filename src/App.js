import React from 'react';
import  {BrowserRouter as Router, Route} from 'react-router-dom';

/* PÁGINAS */
import Login from './view/login';
import UsuarioNovo from './view/usuario-novo';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/usuarionovo' component={UsuarioNovo} />
    </Router>
  );
}

export default App;
