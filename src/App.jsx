import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ResumePage } from './page/resume'
import { AboutPage } from './page/about'
import { PortfolioPage } from './page/portfolio'
import { ContactPage } from './page/contacts'
import { Layout } from './components/layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/' index element={<ResumePage/>} />
            <Route path='/portfolio' element={<PortfolioPage/>} />
            <Route path='/contacts' element={<ContactPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
