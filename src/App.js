import logo from './logo.svg';
import './App.css';
import Login from './Component/Vendor/Login/Login';
import Registration from './Component/Vendor/Registration/Registration';
import { Route, Routes } from 'react-router-dom';
import Signup from './Component/Vendor/Signup/Signup';
import Forgetpassword from './Component/Vendor/Forgetpassword/Forgetpassword';
import Myprofile from './Component/Myprofile/Myprofile';
import Resetpassword from './Component/Vendor/Resetpassword/Resetpassword';
import Otp from './Component/Vendor/Otp/Otp';
import Testing from './Component/Testing/Testing';
import Testgetinput from './Component/Testing/Testgetinput';
import Testingroute from './Component/Testing/Testingroute';  
import Testingredux from './Component/Testing/Testingredux';
// require('dotenv').config()

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path='/Vendor/Registration' element={<Registration/>}></Route>
        <Route path='/Vendor/login' element={<Login/>}></Route>
        <Route path='/Vendor/signup' element={<Signup/>}></Route>
        <Route path='/forgetpassword' element={<Forgetpassword/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/resetpassword' element={<Resetpassword/>}></Route>
        <Route path='/myprofile' element={<Myprofile/>}></Route>
        <Route path='/testing' element={<Testing/>}></Route>
        <Route path='/testgetinput' element={<Testgetinput/>}></Route>
        <Route path='/testroute/:name' element={<Testingroute/>}></Route>
        <Route path='/testredux' element={<Testingredux/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
