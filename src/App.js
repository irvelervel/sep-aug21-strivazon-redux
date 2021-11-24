import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CartIndicator from './components/CartIndicator'
import BookStore from './components/BookStore'
import Cart from './components/Cart'
import { Col, Container, Row } from 'react-bootstrap'

const App = () => (
  <BrowserRouter>
    <Container>
      <Row>
        <Col sm={12} className="text-center background-div">
          <Link to="/">
            <h1>Strivazon Book Store</h1>
          </Link>
        </Col>
        <CartIndicator />
      </Row>
      <hr />
      <Routes>
        <Route path="/" element={<BookStore />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Container>
  </BrowserRouter>
)

export default App
