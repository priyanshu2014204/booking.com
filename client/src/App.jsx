import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import List from '../pages/List'
import "./app.css"

function App() {

  return (
    <div className="App"> 
       <Router>
         <Routes>
          <Route  path='/' element={<Home/>}></Route>
          <Route  path='/list' element={<List/>}></Route>
         </Routes>
       </Router>
    </div>
  )
}

export default App
