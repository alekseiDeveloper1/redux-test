import React, {useState} from 'react';
import GotService from "../../services/gotService";
import UserDetail from '../userDetail';
import Users from '../users';

function TopPage() {
  const [selectedItem, updateList] = useState(2);

  let gotService = new GotService();
  let  onItemSelected = (id) => {
    updateList(
      id
    )
  }

  return (
    <div className="row-block">
      <UserDetail selectedItem={selectedItem} getData={gotService.getCharacter}/>
      <Users onItemSelected={onItemSelected} getData={gotService.getAllCharacters} renderItem={({name}) => name} renderImg={({img}) => img}/>
    </div>
  )
}

export default TopPage;