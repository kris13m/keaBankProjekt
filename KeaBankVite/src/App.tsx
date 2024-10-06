import Header from './components/Header.tsx';
import Navbar from './components/Navbar.tsx';
import Bankside from './components/Bankside.tsx';


function App() {
return(
  <> 
   <Header></Header>
   <Navbar></Navbar>
   <Bankside></Bankside>

  </> // det er kun muligt at returnere 1 ting så jeg bruger tomme <> også kaldet et "fragment"
);
  
}

export default App
