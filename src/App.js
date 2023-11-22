import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Popup from './components/Popup';
import Home from './Home';
import { FaCartPlus } from "react-icons/fa";
import { useState } from 'react';

function App() {
  const [buttonpopup, setButtonPopup] = useState(false);


  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to={"/Home"}>Home</Nav.Link>
            <Nav.Link to={"/Cart"} onClick={() => setButtonPopup(true)}><FaCartPlus /> { }</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <td><Home Title={"Boat e"} price={"78"} image={"./img/image11.jpg"}></Home></td>
      <td><Home Title={"Boat z"} price={"89"} image={"./img/image22.jpg"}></Home></td>
      <td><Home Title={"Boat x"} price={"35"} image={"./img/image33.jpg"}></Home></td><br></br>
      <td><Home Title={"Boat c"} price={"56"} image={"./img/image44.jpg"}></Home></td>
      <td><Home Title={"Boat v"} price={"74"} image={"./img/image55.jpg"}></Home></td>
      <td><Home Title={"Boat b"} price={"89"} image={"./img/image66.jpg"}></Home></td>

      <Popup trigger={buttonpopup} setTrigger={setButtonPopup}>
        <div className='listt'>
          <ul >
            <li>Image</li>
            <li>Itemname</li>
            <li>Cost</li>
            <button className='buttond'>Remove</button>
          </ul>
        </div>
      </Popup>
    </div>
  );
}

export default App;
