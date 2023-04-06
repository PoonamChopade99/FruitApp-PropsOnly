import "./App.css";
import Footer from "./components/Footer";
import Fruits from "./components/Fruits";
import FruitsData from "./components/FruitsData";


const FruitsInfo = (cuurent) => {
  return (
    <>
      <Fruits
        title={cuurent.title}
        imglink={cuurent.imglink}
        desc={cuurent.desc}
        btn={cuurent.btn}
      />
    </>
  );
};

function App() {
  return (
    <>
      <h1 className="animate__animated animate__heartBeat">🍒About Fruits🍒</h1>
      <div className="main-container">
        {FruitsData.map(FruitsInfo)}
      </div>
      <Footer/>
    </>
  );
}
export default App;