import Header from './components/Header.tsx';
import Navbar from './components/Navbar.tsx';
import Bankside from './components/Bankside.tsx';
import Aktie from './components/Aktie.tsx';


function App() {
return(
  <> 
   <Header></Header>
   <Navbar></Navbar>
   <Bankside></Bankside>
  <Aktie navn='Novo Nordisk' ticker='NOVO-B' værdi={400} antal={29}></Aktie>
  <Aktie navn='A.P. Møller Mærsk' ticker='MAERSK-B' værdi={15000} antal={2}></Aktie>
  </> // det er kun muligt at returnere 1 ting så jeg bruger tomme <> også kaldet et "fragment"
);
  
}

export default App
