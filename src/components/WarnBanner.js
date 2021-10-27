function WarnBanner(props) {
  if(!props.warn) {
    return null
  }

  return <h2>Danger, Danger, Will Robinson!</h2>
}

export default WarnBanner