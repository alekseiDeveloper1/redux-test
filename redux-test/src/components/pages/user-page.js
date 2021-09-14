import React from 'react';
import GotService from "../../services/gotService";
import UserDetail from '../userDetail';
import './page.sass'
function UserPage() {
  
  let gotService = new GotService();
  const selectedItem = 2;
  return (
    <div className="row-block">
      <UserDetail selectedItem={selectedItem} getData={gotService.getCharacter}/>
    </div>
  )
}

export default UserPage;