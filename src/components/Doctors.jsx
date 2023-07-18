import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {restaurantsData} from "../helper/data"
import { useState } from "react"
import AddModal from "./AddModal"

const Doctors = ({apps , setApps}) => {

const [restaurant, setRestaurant] = useState(restaurantsData)
const [show, setShow] = useState(false)
const [drName, setDrName] = useState("")


  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(239, 190, 190)" }}>
      Our Restaurants
      </h3>
      <Row className="justify-content-center">
        {restaurant.map(({ id, img, dep, name }) => (
          <Col className="g-3" xs={6} sm={4} md={3} key={id}>
            <img
              src={img}
              alt={name}
              className="img-thumbnail res-img"
              onClick={() => {
                setDrName(name)
                setShow(true)
              }}
            />
            <h5 className="text-light">{name}</h5>
            <h6 className="text-light">{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal show={show}
        handleClose={() => setShow(false)} apps= {apps} setApps={setApps}    drName={drName} />
    </Container>
  )
}

export default Doctors
