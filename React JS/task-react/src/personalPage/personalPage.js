import "./style.css";
import EditForm from "../EditForm/EditForm";
// import React, {Component} from "react";

function personalPage(props) {
  function Edit(event) {
    // Запускаем процесс изменения поля по таргету
    let target = event.target;
    if (target.tagName !== "P") return;
    console.log("aa");
    <EditForm />;
  }

  return (
    <form id="form" onDoubleClick={Edit}>
      <div className="page">
        <div className="pageInfo">
          <p>ФИО - {props.Fio}</p>
          <p>Телефон - {props.telephon}</p>
          <p>Электронная почта - {props.email}</p>
          <p>Город проживания - {props.ciryLive}</p>
          <p>Стаж - {props.experience}</p>
          <p>Навыки - {props.skills}</p>
        </div>
        <div>
          <img src={props.foto} className="myFoto" alt="Фото" />
        </div>
      </div>
    </form>
  );
}

export default personalPage;
