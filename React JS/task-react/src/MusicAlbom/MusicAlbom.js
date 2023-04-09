import "./style.css";


function MusicAlbom(props) {
  return (
    <div className="MusicAlbom">
      <p>Название альбома - {props.name}</p>
      <p>Композитор - {props.compositor}</p>
      <p>Студия исполнитель - {props.studio}</p>
      <p>Дата выпуска - {props.relis}</p>
      <img src={props.img} alt="Кей-Он" />
      <div className="audio">
        <audio controls src={props.music}></audio>
      </div>
    </div>
  );
}

export default MusicAlbom;
