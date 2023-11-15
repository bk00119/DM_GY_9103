import Route from "./components/Route"
import AccordionPage from "./pages/AccordionPage"
import ButtonPage from "./pages/ButtonPage"
import Menu from "./components/Menu"
import ModalPage from "./pages/ModalPage"

export default function App() {
  return (
    <div>
      <Menu />
      <div className="col-span-5 relative">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  )
}
