// import ResponsiveAppBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
// import SignInSide from './components/Getin';
// import ResponsiveAppBar from './components/Navbar';
// import Tests from './components/Tests';
// import ANavbar from './Agent/ANavbar';
// import SimpleBottomNavigation from './Agent/Bottom';
// import BasicStack from './Agent/AHome';
// import FNavbar from './Agent/FNavbar';
// // import { Typography } from '@mui/material';
// import Aupdate from './Agent/Aupdate';
// import ANavbar1 from './Agent/ANavbar1';
// import Ahome from './Agent/AHome';
// import Add from './Agent/Add';
import Fhome from './Agent/FHome';
import FStores from './Agent/FStores';
// import Aut from './Agent/AUT';
import Fdata from './Agent/FData';


export default function App1() {
  return (
    <div style={{backgroundColor:'lightpink',position:'relative'}}>
    {/* <FNavbar/> */}
    <Routes>
    <Route path='/' element={<Fhome/>}/>
    <Route path='/FStores' element={<FStores/>}/>
    <Route path='/Fdata' element={<Fdata/>}/>

    </Routes>
 
    </div>
     
  );
}



