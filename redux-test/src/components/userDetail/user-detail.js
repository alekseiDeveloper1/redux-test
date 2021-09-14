import React, {useState, useEffect} from 'react';

function UserDetail({selectedItem, getData}) {
  
  const [itemList, updateList] = useState([]);
    useEffect(() => {
      getData(selectedItem)
        .then( (data) => {
            updateList(data);
        });
        // .catch(() => {this.onError()});
    },[selectedItem])
  console.log(selectedItem)
  const {name, img, surname, email} = itemList;

  return (
    <>
      <div className='row-block__image'>
       <img src={img} alt='vv'></img>
      </div>
      <div className='row-block__table'>
        <ul>
          <hr/>
          <li>{name}</li>
          <hr/>
          <li>{surname}</li>
          <hr/>
          <li>{email}</li>
          <hr/>
        </ul>
      </div>
    </>
  )
}

export default UserDetail;