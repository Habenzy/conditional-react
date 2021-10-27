import Logout from "./Logout"
import Login from "./Login"

function LogToggle(props) {
  return(
    <div>
      {props.logStatus ? <Logout loginHandle={props.toggleLog} /> :  <Login loginHandle={props.toggleLog} />}
    </div>
  )
}

export default LogToggle