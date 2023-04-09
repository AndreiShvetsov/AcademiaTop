import Header from "./header/header";
import Footer from "./footer/footer";
import MusicAlbom from "./MusicAlbom/MusicAlbom";
import Info from "./info.json";
import "./App.css";

function App() {
  return (
    <body>
      <Header />
      <MusicAlbom name={Info.name} compositor={Info.compositor} studio={Info.studio} relis={Info.relis} img={Info.img} music={Info.music}/>
      <Footer />
    </body>
  );
}

export default App;
