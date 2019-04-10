import React from 'react'
import { Redirect, Route } from "react-router-dom";
import { connect } from 'react-redux'

const UserRoute = ({isToken, ...restProps}) => {
    if(!isToken){
        return <Redirect to="/" />
    }
    return (
        <Route {...restProps} />
    )
}

const mapStateToProps = ({ user }) => ({
    isToken: user && user.token
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRoute)
