import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PaymentHistory from './components/PaymentHistory';
import MembershipManagement from './components/MembershipManagement';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/payment-history" component={PaymentHistory} />
          <Route path="/membership" component={MembershipManagement} />
          {/* Agrega más rutas según sea necesario */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;