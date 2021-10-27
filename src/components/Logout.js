function Logout(props) {
  return <button onClick={() => {props.loginHandle(false)}}>Log Out</button>
}

export default Logout