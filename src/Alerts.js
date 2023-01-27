import { v4 as uuid } from "uuid"

/** Renders alert box with error or success msgs
 *
 * Props
 * - err - array of error messages
 * - success - array of success messages
 *
 * LoginForm/SignupForm/Profile -> Alerts
 */
function Alerts({ err, success }) {
  return (
    <div className={`alert alert-${ err ? `danger`: `success`}`}>
      {err && err.map(e => <p key={uuid()}>{e}</p>)}
      {success && success.map(s => <p key={uuid()}>{s}</p>)}
    </div>
  )
}

export default Alerts;
