import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
  const login = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div>
      {login && <div>You are logged in!</div>}
      <button onClick={() => dispatch({ type: 'SIGN_IN' })}>
        {login ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default Login
