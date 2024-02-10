import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  let products = [
    {
      image:
        "https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=",
      name: "shirt",
      price: "₹379",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdXbU6MCZba85EACumrmV8QWE1RP8GER-7A&usqp=CAU",
      name: "T-shirt",
      price: "₹300",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/299324335/QI/CC/GK/141620873/series-8-smart-watch-500x500.jpg",
      name: "Watch",
      price: "₹800",
    },
    {
      image:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/448447/item/goods_01_448447.jpg?width=494",
      name: "Bag",
      price: "₹200",
    },
    {
      image:
        "https://media.croma.com/image/upload/v1680614187/Croma%20Assets/Small%20Appliances/Fans/Images/270736_ejwwbs.png",
      name: "Table Fan",
      price: "₹3790",
    },
    {
      image:
        "https://tiimg.tistatic.com/fp/1/007/574/vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg",
      name: "Mobile",
      price: "₹11,000",
    },
    {
      image:
        "https://cdn.britannica.com/74/190774-050-52CE5745/jeans-denim-pants-clothing.jpg",
      name: "Pant",
      price: "₹685",
    },
    {
      image:
        "https://images-cdn.ubuy.co.in/64c64ff046f7180f51234158-beats-solo3-wireless-on-ear-headphones.jpg",
      name: "Headphone",
      price: "₹1020",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230629/X8MA/649d0aeaeebac147fc3978c8/-473Wx593H-466032916-silver-MODEL.jpg",
      name: "Bottle",
      price: "₹450",
    },
  ];

  return (
    <div className="App">
      <MyNavbar cartCount={cartCount} />
      <div className="products">
        {products.map((prod, idx) => (
          <Card
            key={idx}
            name={prod.name}
            price={prod.price}
            image={prod.image}
            cartCount={cartCount}
            setCartCount={setCartCount}
          />
        ))}
      </div>
    </div>
  );
}

function MyNavbar({ cartCount }) {
  return (
    <Navbar className="navbar navbar-secondary bg-secondary nav">
      <Navbar.Brand
        href="#"
        className="  fst-italic text-primary fs-1 text-decoration-none fw-bold"
      >
        Multi Select
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" className="fs-4 text-light">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="fs-4 text-light">
            Products
          </Nav.Link>
        </Nav>
        <div className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <Nav className="ml-auto">
            <Badge className="badge bg-light">
              <Nav.Link href="#" className="fs-5">
                <img
                  src="https://cdn-icons-png.freepik.com/512/3737/3737173.png"
                  alt="Cart"
                  width="30"
                  height="30"
                  className="ml-2 custom-img"
                />
                Cart <Badge variant="primary ">{cartCount}</Badge>
              </Nav.Link>
            </Badge>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Card({ name, price, image, cartCount, setCartCount }) {
  const [addedToCart, setAddedToCart] = useState(false);

  function handleAddToCart() {
    setAddedToCart(true);
    setCartCount(cartCount + 1);
  }

  function handleRemoveFromCart() {
    setAddedToCart(false);
    setCartCount(cartCount - 1);
  }

  return (
    <div className="card">
      <img src={image} alt={name} height="300px" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>{price}</p>
        {!addedToCart ? (
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <button className="btn btn-light" onClick={handleRemoveFromCart}>
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
