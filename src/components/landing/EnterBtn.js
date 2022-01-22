import React from 'react'
import { connect } from 'react-redux'

const EnterBtn = ({ className = 'btn pl-4 pr-4 mt-4' }) => {
  return (
    <span
      className={className}
      style={{ backgroundColor: '#aeaeae', borderColor: '#aeaeae' }}
    >
      Participate Now
    </span>
  )
  // if (isToken) {
  //   return (
  //     <Link to="/my-profile/enter-to-contest" className={className}>
  //       Participate Now
  //     </Link>
  //   )
  // }
  // return (
  //   <OpenModalBtn modalName="SIGNUP_MODAL" className={className}>
  //     Participate Now
  //   </OpenModalBtn>
  // )
}

const mapStateToProps = ({ user }) => ({
  isToken: user && user.token,
})

export default connect(mapStateToProps)(EnterBtn)
