import NavBar from "./NavBar"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Format from "./Format"
import Home from "./Home"
import {Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <Routes>
      <Route path="/signup" element={<SignUp/>}/>
     
      <Route path="/Format" element={<Format/>}/>
       <Route path="/" element={<Home/>}/> 
      
      
    </Routes>
 
     
    
  )
}

export default App
