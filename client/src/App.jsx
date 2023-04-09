import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import List from '../pages/List'
import "./app.css"
import Hotel from '../pages/hotel/hotel'

function App() {

  return (
    <div className="App"> 
       <Router>
         <Routes>
          <Route  path='/' element={<Home/>}></Route>
          <Route  path='/hotel' element={<List/>}></Route>
          <Route  path='/hotel/:id' element={<Hotel/>}></Route>
         </Routes>
       </Router>
    </div>
  )
}

export default App
