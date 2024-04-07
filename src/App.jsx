import './App.css'
import Benefits from './Screens/Benefits'
import Contact from './Screens/Contact'
import Home from './Screens/Home'
import HowWeWork from './Screens/HowWeWork'
import Services from './Screens/Services'

function App() {
  
  return (
    <div className='App'>
      <Home></Home> 
      <Services></Services>
      <HowWeWork></HowWeWork>
      <Benefits></Benefits> 
      <Contact></Contact> 
    </div>
  )
}

export default App
