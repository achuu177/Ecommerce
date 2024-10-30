import { useState } from "react"
import "../styles/ProductList.css"
import Product from "./Product"
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function ProductListing() {
    const [products, setProducts] = useState([
        {
          "id": 1,
          "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95,
          "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) ",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "rating": {
            "rate": 3.9,
            "count": 120
          },
          "stock" : 10
        },
        {
          "id": 2,
          "title": "Mens Casual Premium Slim Fit T-Shirts ",
          "price": 22.3,
          "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          "rating": {
            "rate": 4.1,
            "count": 259
          },
          "stock" : 12
        },
        {
          "id": 3,
          "title": "Mens Cotton Jacket",
          "price": 55.99,
          "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. ",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          "rating": {
            "rate": 4.7,
            "count": 500
          },
          "stock" : 5
        },
        {
          "id": 4,
          "title": "Mens Casual Slim Fit",
          "price": 15.99,
          "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          "rating": {
            "rate": 2.1,
            "count": 430
          },
          "stock" : 0
        },
        {
         "id": 16,
    "title": "Women's Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 340
          },
          "stock" : 9
        },
        {
          "id": 6,
          "title": "WD 4TB Playstation 4 ",
          "price": 114,
          "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
          "rating": {
            "rate": 4.8,
            "count": 400
          },
          "stock" : 18
        },
        {
          "id": 7,
          "title": "White Gold Plated Princess",
          "price": 9.99,
          "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
          "category": "jewelery",
          "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
          "rating": {
            "rate": 3,
            "count": 400
          },
          "stock" : 6
        },
        {
          "id": 8,
    "title": "Samsung 49-Inch Gaming Monitor ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
          },
          "stock" : 8
        },
        {
          "id": 9,
          "title": "WD 2TB External Hard Drive",
          "price": 64,
          "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7.",
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
          "rating": {
            "rate": 3.3,
            "count": 203
          },
          "stock" : 0
        },
        {
          "id": 10,
          "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          "price": 109,
          "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores)",
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
          "rating": {
            "rate": 2.9,
            "count": 470
          },
          "stock" : 9
        },
        {
          "id": 11,
          "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
          "price": 9.85,
          "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline.",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
          "rating": {
            "rate": 4.7,
            "count": 130
          },
          "stock" : 9
        },
        {
          "id": 12,
          "title": "Opna Women's Short Sleeve Moisture",
          "price": 7.95,
          "description": " 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away.",
          "category": "women's clothing",
          "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
          "rating": {
            "rate": 4.5,
            "count": 146
          },
          "stock" : 98
        }
      ])
    return (
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Container>
            <h1 class = "contact-title">  Product List</h1>
            <div class="product-list">
              <Row>
              {products.map((product, index) => {
                 return(
                  <Col xs = {12} sm = {6} md = {4} lg = {3} xxl = {2}  >
                       <Product productData = {product}/>
                  </Col>
                 )
              })}
              </Row>
            </div>
           
        </Container>
        </>
    )
}
export default ProductListing