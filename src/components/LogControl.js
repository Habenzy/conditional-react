import { useState } from "react";
import LogToggle from "./LogToggle";
import WarnBanner from "./WarnBanner";

function LogControl(props) {
  const [loggedIn, setLogIn] = useState(false)
  const [warning, setWarning] = useState(false)

  let greeting;

  if(loggedIn) {
    greeting = <h1>Hello!</h1>
  } else {
    greeting = null
  }

  return(
    <div>
      <LogToggle toggleLog={setLogIn} logStatus={loggedIn} />
      {loggedIn ? <h1>Hell0!</h1> : null}
      {loggedIn && <h1>Hello!</h1>}
      {greeting}
      <button onClick={() => {setWarning(true)}}>Show Warning</button>
      <WarnBanner warn={warning} />
    </div>
  )
}

export default LogControl