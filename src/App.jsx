import Header from "./modules/header/header"
import Hero from "./modules/hero/hero"
import Cars from "./modules/cars/cars"
import Review from "./modules/review/review"
import Brands from "./modules/brands/brands"
import Services from "./modules/services/services"
import Safety from "./modules/safety/safety"
import Footer from "./modules/footer/footer"
import Modal from "./components/modal/modal"
import DeleteModalInner from "./components/modal/deleteModal"
function App() {

  return (
   <>
    <Header />
    <main>
      <Hero />
      <Cars />
      <Review/>
      <Brands/>
      <Services/>
      <Safety/>
      <Footer/>
    </main>
    <Modal isOpen={true} >
      <DeleteModalInner/>
    </Modal>
       </>
  )
}

export default App
