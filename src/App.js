import React from "react";
import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <div className="py-3">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/contacts/add" component={AddContact} />
                  <Route
                    exact
                    path="/contacts/edit/:id"
                    component={EditContact}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
