import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MemoryRouter, Switch, Route } from "react-router";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { LinkContainer } from "react-router-bootstrap";
import MyCalendar from '../Calendar/calendar';

const Home = () => <span>Home</span>;
const About = () => <span>About</span>;
const Users = () => <span>Users</span>;

 const Dashboard = () => (
  <MemoryRouter>
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To U11</h1>
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
    <MyCalendar />
    </Container>
  </MemoryRouter>
);

export default Dashboard;