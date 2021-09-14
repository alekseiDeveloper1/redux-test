import React, {useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header';
import {OutPage, TopPage, UserPage, LoginPage, RegPage} from '../pages';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from "../../actions/user";


function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <>
      <AppHeader/>
      <Switch>
        {!isAuth &&
          <>
            <Route path = '/login' exact component={LoginPage}/>
            <Route path = '/reg' exact component={RegPage}/>
          </>
         }
        {isAuth &&
          <>
            <Route path = '/' exact component={TopPage}/>
            <Route path = '/out' exact component={OutPage}/>
            <Route path = '/user' exact component={UserPage}/>
          </>
        }
        
      </Switch>
    </>
  )
}
export default App;