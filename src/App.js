
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../src/views/examples/Login";
import { Provider} from '@gitbook/unstated';

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { Redirect } from 'react-router';

function App(){

  return (
    <Provider>
        <Router>
            <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            <Redirect from="/" to="/admin/index" />
            </Switch>
        </Router>
    
    </Provider>

  );
}

export default App;