// eslint-disable-next-line react/prop-types
const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null
  }
  return <div className="error">{message}</div>
}

export default ErrorNotification
