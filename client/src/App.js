import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MemoryRouter, Switch, Route } from "react-router";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { LinkContainer } from "react-router-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Home = () => <span>Home</span>;
const About = () => <span>About</span>;
const Users = () => <span>Users</span>;

/* const App = () => (
  <MemoryRouter>
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <h2>
          Current Page is{" "}
          <Switch>
            <Route path="/about"><About />
            </Route>
            <Route path="/users"><Users />
            </Route>
            <Route path="/"><Home />
            </Route>
          </Switch>
        </h2>
        <h2>
          Navigate to{" "}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/"><Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/about"><Button>About</Button>
            </LinkContainer>
            <LinkContainer to="/users"><Button>Users</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h2>
      </Jumbotron>
    </Container>
  </MemoryRouter>
);

export default App; */

// ** Calendar **

 function MyApp() {
  const [value, setValue] = useState(new Date());
  function onChange(nextValue) {
    setValue(nextValue);
  }
  return (
    <Calendar
      onChange={onChange}
      value={value}
    />
  );
}
export default MyApp; 
// ** End Calendar **
