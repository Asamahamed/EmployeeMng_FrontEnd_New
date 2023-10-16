
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Adduser from './component/adduser';
import Home from './component/home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Edit from './component/Edit';
// import View from './component/view';

function App() {
  return (
    <div >
      
      <Router>

            <Navbar />
<Routes>
 <Route exact path ="/" element={<Home /> }/>
 <Route exact path ="/adduser" element={ <Adduser /> }/>
 <Route exact path= "/edituser/:id" element={<Edit />} />
 <Route exact path='/viewuser/:id' element={<view />} />

</Routes>

          

      </Router>
     

     {/* <View /> */}

    </div>
  )
}

export default App;
