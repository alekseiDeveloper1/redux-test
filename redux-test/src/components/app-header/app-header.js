import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './heder.sass'
import GotService from "../../services/gotService";
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../reducers/userReducer'
function AppHeader() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  let gotService = new GotService();
  let getData = gotService.getCharacter;
  const [itemList, updateList] = useState([]);

    useEffect(() => {
      getData(2)
        .then( (data) => {
            updateList(data)
        })
        // .catch(() => {this.onError()});
    }, [])

    const {img} = itemList;

  return (
    <header>
        {isAuth && <Link to ='/' className = "header__link">top</Link>}
        {isAuth && <Link to ="/login" className = "header__link" onClick={() => dispatch(logout()) }>out</Link>}
        {!isAuth && <Link to = "/login" className = "header__link">login</Link>}
        {!isAuth && <Link to = "/reg" className = "header__link">reg</Link>}
        {isAuth && <Link to = "/user" className = "header__link">
            <img src={img} className="header__user" alt="user"></img>
        </Link>}
    </header>
  )
}

export default AppHeader;