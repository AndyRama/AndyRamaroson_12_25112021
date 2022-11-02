import React from "react";
import "./UserName.scss"

function UserName({firstname}) {
  return (
    <div className="profil">
      <h1>Bonjour <span>{firstname}</span></h1>
      <h2> Félicitations ! Vous avez explosé vos objectifs hier 👏 </h2>
    </div>
  )
}

export default UserName