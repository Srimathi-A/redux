import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, isLogged } from './actions';


function App(state) {
  const counter=useSelector((state)=>state.counter)
  //useSelector - allows access to the state in redux store
  const logged = useSelector((state)=>state.login)
  const dispatch = useDispatch((state))
  //usedispatch - allows react components to dispatch action to redux store
  let signin_status = ""
  
  if(logged === false){
    signin_status="Sign_in"
  }
  else{
    signin_status="Sign_out"
  }

  return(
    <div className='App'>
      <h1>Welcome to React Redux</h1>
      <h2>Counter:{counter}</h2>

      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(isLogged())}>{signin_status}</button>
      {logged?<p>This is valueble information</p>:<p>Please login first</p>}
    </div>
  )
}

export default App;