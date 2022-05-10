import React from "react";
import { Card, ListGroup, ListGroupItem, Carousel,Button } from "react-bootstrap";

function ProdCard(){
    return (
      <>
        <div class="row">
          <div class="col-sm-4">
            {/**bottle**/}
            <Card>
              <Card.Img variant="top" src="./assets/prod1/bottle.jpg" />
              <Card.Body>
                <Card.Title>Plastic Water Bottle</Card.Title>
                <Card.Text>
                  PEARLPET Cubic BPA-free Plastic Water Bottle Set of 7 Pcs ,
                  Each 1000ml, Multicolor
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Made from high BPA free quality, food-grade
                </ListGroupItem>
                <ListGroupItem>
                  Freezer-safe and dishwasher-friendly
                </ListGroupItem>
                <ListGroupItem>
                  Wide mouth to easily pour and drink water
                </ListGroupItem>
                <ListGroupItem>MRP: ₹ 999.00</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <div class="d-flex justify-content-between">
                  <Button variant="primary">Add to Cart</Button>
                  <Button variant="success">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
            <div class="row">
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./assets/prod1/bottle1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5>Image 1</h5>
                    <p>More Info Here on Image</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./assets/prod1/bottle2.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h5>Image 2</h5>
                    <p>More Info Here on Image</p>
                  </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./assets/prod1/bottle3.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Image 3</h5>
                    <p>More Info Here on Image</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./assets/prod1/bottle4.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Image 4</h5>
                    <p>More Info Here on Image</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          <div class="col-sm-4">
            {/**headphone**/}
            <Card>
              <Card.Img variant="top" src="./assets/prod2/headphone.jpg" />
              <Card.Body>
                <Card.Title>
                  boAt Rockerz Bluetooth Wireless Headphones
                </Card.Title>
                <Card.Text>
                  Headphones with boAt Signature Sound, Beast 25H Playtime,
                  Bluetooth v5.2, with mic(Active Black)
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Offers a total playtime of up to 25 hours
                </ListGroupItem>
                <ListGroupItem>Dual Pairing and Bluetooth v5.2</ListGroupItem>
                <ListGroupItem>
                  Noise Cancelling Calls-With the default ENx tech
                </ListGroupItem>
                <ListGroupItem>MRP: ₹ 1499.00</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <div class="d-flex justify-content-between">
                  <Button variant="primary">Add to Cart</Button>
                  <Button variant="success">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm-4">
            {/**perfume**/}
            <Card>
              <Card.Img variant="top" src="./assets/prod3/perfume.jpg" />
              <Card.Body>
                <Card.Title>
                  Secret Temptation Romance Eau De Parfum for Women, Long
                  Lasting Chypre Green Everyday
                </Card.Title>
                <Card.Text>
                  Long Lasting Chypre Green Everyday Wear Fragrance 50 ml
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Strong floral green fragrance</ListGroupItem>
                <ListGroupItem>
                  Every day wear long lasting fragrance
                </ListGroupItem>
                <ListGroupItem>Target Audience Keywords: People</ListGroupItem>
                <ListGroupItem>MRP: ₹ 267.00</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <div class="d-flex justify-content-between">
                  <Button variant="primary">Add to Cart</Button>
                  <Button variant="success">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
    }
export default ProdCard;

