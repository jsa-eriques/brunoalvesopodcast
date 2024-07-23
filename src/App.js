import Cover from "./components/Cover"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Anuncio from "./components/Anúncio"
import Invites from "./components/Invites"


function App() {
  return (
    <div>
      <div className="bg-hero bg-cover lg:bg-[length:2000px_1000px] bg-no-repeat ">
        <Header/> 
        <Cover/>
      </div>
     <Invites/> 
      <Anuncio/> 
        <Footer/>  
    </div>
  );
}

export default App;
