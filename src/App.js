/** @format */

import './global.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Service from './components/Service'
import Property from './components/Property'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Service />
      <Property />
    </div>
  )
}

export default App
