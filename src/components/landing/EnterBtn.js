import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { OpenModalBtn } from '../modals/modalbtns'

const EnterBtn = ({
  isToken,
  className = 'btn pl-4 pr-4 btn-outline-light mt-4',
}) => {
  if (isToken) {
    return (
      <Link to="/my-profile/enter-to-contest" className={className}>
        Participate Now
      </Link>
    )
  }
  return (
    <OpenModalBtn modalName="SIGNIN_MODAL" className={className}>
      Participate Now
    </OpenModalBtn>
  )
}

const mapStateToProps = ({ user }) => ({
  isToken: user && user.token,
})

export default connect(mapStateToProps)(EnterBtn)
