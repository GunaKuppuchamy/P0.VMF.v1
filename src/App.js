// import ResponsiveAppBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import SignInSide from './components/Getin';
import ResponsiveAppBar from './components/Navbar';
import Tests from './components/Tests';
import ANavbar from './Agent/ANavbar';
import BasicTabs from './Agent/ANavbar';
import SimpleBottomNavigation from './Agent/Bottom';
import LabelBottomNavigation from './Agent/Bottom';
import ReactVirtualizedTable from './Agent/AHome';
import BasicStack from './Agent/AHome';
import VirtualizedList from './Agent/AHome';
import FNavbar from './Agent/FNavbar';
import App1 from './App1';
import ANavbar1 from './Agent/ANavbar1';
import Aupdate from './Agent/Aupdate';
import Add from './Agent/Add';
import Ahome from './Agent/AHome';
import GetUp from './components/Getup';
import FStores from './Agent/FStores';
import Fdata from './Agent/FData';
import Fhome from './Agent/FHome';


export default function App() {
  return (
     <>
   
   
    <Routes>
    {/* <Route path='/' element={<Ahome/>}/> */}
      <Route path='/' element={<SignInSide/>}/>
      <Route path='/AHome' element={<Ahome/>}/>
      
      <Route path='/FNavbar' element={<FNavbar/>}/>

      <Route path='/GetUp' element={<GetUp/>}/>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/App1' element={<App1/>}/>
      <Route path='/App1' element={<App1/>}/>
      <Route path='/Aupdate' element={<Aupdate/>}/>
      <Route path='/FStores' element={<FStores/>}/>
    <Route path='/Fdata' element={<Fdata/>}/>
    <Route path='/Fhome' element={<Fhome/>}/>

    </Routes>
    </>
     
  );
}



