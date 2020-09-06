import React, { useState } from 'react';
import { Navbar, Nav, Container, Col, Row, Form, Button, Table} from 'react-bootstrap';
import {Link} from "react-scroll";
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './nutnomic.png';
import metrics from './undraw_metrics_gtu7.svg';
import basic from './basic.svg';
import business from './business.svg';
import entrepreneur from './entrepreneur.svg';

Modal.setAppElement('#root')
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
          <Navbar expand="md" fixed="top" className="header2"> 
              <img
                  src={logo}
                  width="30"
                  height="30"
                  alt="React Bootstrap logo"
              />
              <Nav className="homeButton">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse> 
            <Nav className="menu">
              <Nav.Link><Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >About</Link></Nav.Link>
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >Pricing</Link>
              </Nav.Link>
              <Nav.Link>
              <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
              >Contact</Link>
              </Nav.Link>
              <Nav.Link>
                <Button onClick={() => setModalIsOpen(true)}>
                  Login
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar>
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        style={
          {
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            content: {
              position: 'absolute',
              top: '25%',
              left: '30%',
              right: '30%',
              bottom: '40%',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }
        }
      >
          <Container>
            <div className="modal-title">
              Selamat Datang di NutNomic
            </div>
            <Form>
                
                <Form.Group controlId="formUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Username Anda" />
                </Form.Group> 
                <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukkan Password Anda" />
                </Form.Group>
                <Button variant="primary" type="submit"> Submit </Button>
                <Button variant="danger" onClick={() => setModalIsOpen(false)}> Cancel </Button>
            </Form>
          </Container>
      </Modal>
      </header>
      <body className="body">
        <br></br>
        <body className="about" name="about">
        <br></br>
          <Container>
            <Row>
              <Col sm={6}>
                <img className="pict"
                      src={metrics}
                      alt="React Bootstrap logo"
                />
              </Col>
              <Col sm={6} className="title-page">
                <div className="welc-to">
                  Welcome To
                </div>
                <div className="title">
                  NutNomic
                </div>
                <div className="desc">
                  Empowering Small Scale Business
                  with Reliable AI and Tech-Support
                </div>
              </Col>
            </Row>
          </Container>
        </body>
        <br></br>
        <body className="pricing" name="pricing">
          <h1 className="tag1">Pricing</h1>
          <Container>
            <Table className="table-pricing" responsive="sm">
              <thead>
                <tr>
                  <th></th>
                  <th><img className="gambar-tier"
                      src={basic}
                      alt="React Bootstrap logo"
                  /></th>
                  <th><img className="gambar-tier"
                      src={business}
                      alt="React Bootstrap logo"
                  /></th>
                  <th><img className="gambar-tier"
                      src={entrepreneur}
                      alt="React Bootstrap logo"
                  /></th>
                </tr>
                <tr>
                  <td>Fitur</td>
                  <td>Tier Basic</td>
                  <td>Tier Business</td>
                  <td>Tier Entrepeneur</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mencatat Barang Masuk</td>
                  <td>V</td>
                  <td>V</td>
                  <td>V</td>
                </tr>
                <tr>
                  <td>Mencatat Barang Keluar</td>
                  <td>V</td>
                  <td>V</td>
                  <td>V</td>
                </tr>
                <tr>
                  <td>Mencatat Hasil Keuntungan</td>
                  <td>V</td>
                  <td>V</td>
                  <td>V</td>
                </tr>
                <tr>
                  <td>Analisa Hasil Penjualan dengan Chart</td>
                  <td>X</td>
                  <td>V</td>
                  <td>V</td>
                </tr>
                <tr>
                  <td>Support 24x7 Jam</td>
                  <td>X</td>
                  <td>V</td>
                  <td>V</td>
                </tr>
                <tr>
                  <td>Export Data ke Excel</td>
                  <td>X</td>
                  <td>X</td>
                  <td>V</td>
                </tr>
                <tr>
                  <td>AI Prediksi Penghasilan</td>
                  <td>X</td>
                  <td>X</td>
                  <td>V</td>
                </tr>
                <tr>
                  <td>Harga</td>
                  <td>Rp. 5,000,000</td>
                  <td>Rp. 15,000,000</td>
                  <td>Rp. 25,000,000</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </body>
        <br></br>
        <body className="contact" name="contact">
          <h1 className="tag1">Contact Us!</h1>
          <Container>
          <Form>
            <Row>
              <Col sm={8} >
                <div className="contact-text1">
                Hubungi Kami Untuk Meningkatkan Kinerja Tim hingga 1000% dengan AI yang Terbukti Membantu Bisnis Skala Kecil
                </div>
                <div className="contact-text2">
                Isi form berikut untuk mendapatkan demo gratis dari aplikasi NutNomic.
                </div>
              </Col>
              <Col sm={4}>
                <Form.Group controlId="formNama">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nama Anda" />
                </Form.Group>  
                <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan Email Anda" />
                </Form.Group> 
                <Form.Group controlId="formNoHP">
                <Form.Label>Nomor Handphone</Form.Label>
                <Form.Control type="number" placeholder="Masukkan Nomor yang bisa di hubungi" />
                </Form.Group> 
                <Button variant="primary" type="submit">
                Submit
                </Button>
              </Col>
            </Row>
          </Form>
          </Container>
        </body>
        <br></br>  
      </body>
      <br></br>
      <footer>


      </footer>
    </div>
  );
}

export default App;
