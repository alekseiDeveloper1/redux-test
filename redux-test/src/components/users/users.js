import React, {useState, useEffect} from 'react';
import "./usres.sass"


function Users({onItemSelected, getData, renderItem, renderImg}) {
  const [itemList, updateList] = useState([]);

  useEffect(() => {
    getData()
      .then( (data) => {
          updateList(data)
      })
      // .catch(() => {this.onError()});
  }, [])

  function renderItems(arr) {
    return arr.map((item) => {
        const {id} = item;
        const label = renderItem(item);
        const img = renderImg(item)
        
        return (
            <li
                key={id}
                className="list-group__item"
                onClick={() => onItemSelected(id)}
                >
                <img src={img} alt="user"/>
                {label}
            </li>
        )
    })
  }
  const items = renderItems(itemList);

  return (
    <ul className="list-group">
        {items}
    </ul>
);

}

export default Users;