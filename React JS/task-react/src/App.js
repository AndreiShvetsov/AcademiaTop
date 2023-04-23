import Header from "./header/header";
import Footer from "./footer/footer";
import MusicAlbom from "./MusicAlbom/MusicAlbom";
import PersonalPage from "./personalPage/personalPage";
import Info from "./info.json";
import "./App.css";

function App() {
  return (
    <body>
      <Header />
      <div id="content">
        <MusicAlbom
          name={Info.name}
          compositor={Info.compositor}
          studio={Info.studio}
          relis={Info.relis}
          img={Info.img}
        />
      </div>
      <PersonalPage 
      Fio={Info.Fio}
      telephon={Info.telephon}
      email={Info.email}
      ciryLive={Info.ciryLive}
      experience={Info.experience}
      skills={Info.skills}
      foto={Info.foto}
      />
      <Footer />
    </body>
  );
}

export default App;
