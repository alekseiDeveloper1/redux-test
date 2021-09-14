import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Input from "../input";
import { registration } from "../../actions/user";

function RegPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className="auth">
      <div className='auth__title'>Регистрация</div>
      <Input value={email} setValue={setEmail} title='email'/>
      <Input value={password} setValue={setPassword} title='password'/>
      <Link to='/login' className='auth-input__btn btn btn-primary' onClick={() => registration(email, password)}>Регистрация</Link>
    </div>
  )
}

export default RegPage;