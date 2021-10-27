function Login(props) {
  return <button onClick={() => {props.loginHandle(true)}}>Login</button>
}

export default Login