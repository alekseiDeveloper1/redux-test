import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import Input from "../input";
import {login} from '../../actions/user';



function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  return (
    <div className="auth">
      <div className='auth__title'>Авторизация</div>
      <Input value={email} setValue={setEmail} title='email'/>
      <Input value={password} setValue={setPassword} title='password'/>
      <Link to='/' className='auth-input__btn btn btn-primary' onClick={() => dispatch(login(email, password))}>Войти</Link>
    </div>
  )
} 

export default LoginPage;