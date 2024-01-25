import './App.css'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import ProdList from './components/ProdList/ProdList'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProdList/>}/>
        <Route path={'form'} element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App
