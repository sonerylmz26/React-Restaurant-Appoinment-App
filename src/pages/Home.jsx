import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import {appointmentData} from "../helper/data"
import { useState } from "react"


const Home = () => {
const [appointment, setAppointment] = useState(appointmentData)
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">Yılmaz Restourant</h1>
      <Doctors apps= {appointment} setApps={setAppointment}/>
      <AppointmentList   apps= {appointment} setApps={setAppointment}/>
    </main>
  )
}

export default Home
