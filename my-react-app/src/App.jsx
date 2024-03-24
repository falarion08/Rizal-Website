import LandingSection  from "./components/LandingComponent.jsx"
import QuoteSection from "./components/QuoteComponent.jsx"
import ReadingList from "./components/ReadingListComponent.jsx"
import KabanataView from "./components/KabanataViewComponent.jsx"
import TTSection from "./components/TTComponent.jsx"
function App() {

  return (
    <>
      <LandingSection/>
      <QuoteSection/>
      <ReadingList/>
      <KabanataView/>
      <TTSection/>

      <div className="bg-[#642B62] p-8 text-white font-serif">

        <h1 className=" font-bold text-3xl">Submission By:</h1>
        <div className="p-4 text-xl">
          <p>Nichole Jane Aladen</p>
          <p>Sheryn Ang</p>
          <p>Ryan Onil Barrion</p>
          <p>Agatha Fallarme</p>
          <p>Gabriel Quilario</p>
          <p>Comely Cornelio Requintel</p>
        </div>
      </div>
    </>
  )
}

export default App
