import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home/home.component'
import InfoPage from './routes/Info-Page/info-page.component'
import OwnPlanet from './routes/Own-Planet/own-planet.component'
import Navigation from './routes/navigation/navigation.component'

import './App.scss'

const App = () => {

  return (

    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/own-planet' element={<OwnPlanet />} />
        <Route path='/info-page' element={<InfoPage />} />
      </Route>
    </Routes>
  )
}

export default App
