import Route from "./components/Route"
import AccordionPage from "./pages/AccordionPage"
import ButtonPage from "./pages/ButtonPage"
import Menu from "./components/Menu"
import ModalPage from "./pages/ModalPage"
import CounterPage from "./pages/CounterPage"

export default function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
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
        <Route path="/counter">
          <CounterPage initialCount={23} />
        </Route>
      </div>
    </div>
  )
}
