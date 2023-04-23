// import "./style.css";

function EditForm(props) {

  function accept() {
    // event.preventDefault();
    let infoImput = document.getElementById('#infoImput');
    console.log(infoImput);
  }

  return (
    <form>
      <input id="infoImput" type="text" />
      <button type="button" onclick={accept()}>
        Применить
      </button>
    </form>
  );
}

export default EditForm;
