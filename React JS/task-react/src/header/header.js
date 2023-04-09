import "./style.css";

function header() {
  return (
    <header>
      <div className="NameProj">
        <p>Домашняя работа по ознакомлению с React JS</p>

        <main>
          <ul>
            <li>
              <a href="/">Музыкальный альбом</a>
            </li>
            <li>
              <a href="/">Персональная страница</a>
            </li>
            <li>
              <a href="/">Мой город</a>
            </li>
            <li>
              <a href="/">Добавление фотографий</a>
            </li>
          </ul>
        </main>
      </div>
    </header>
  );
}

export default header;
