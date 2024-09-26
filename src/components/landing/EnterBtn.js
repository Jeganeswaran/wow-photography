import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { OpenModalBtn } from "../modals/modalbtns";
import  { useCountdown }  from "../../hooks/useCountdown";


const ExpiredNotice = ({isToken, className}) => {
  return (
    <Link to="/" className={className}>
      Registration Close
    </Link>
  )
  // if (isToken) {
  //   return (
  //     <Link to="/my-profile/enter-to-contest" className={className}>
  //       Participate Now
  //     </Link>
  //   );
  // } else{
  //   return (
  //     <OpenModalBtn modalName="SIGNUP_MODAL" className={className}>
  //       Participate Now
  //     </OpenModalBtn>
  //   );
    
  // }
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
 
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <div>{value}</div>
      <span>{type}</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 2} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    </div>
  );
};

const EnterBtn = ({
  isToken,
  className = "btn pl-4 pr-4 btn-outline-light mt-4",
}) => {

  const [days, hours, minutes, seconds] = useCountdown(new Date("Sept 25, 2023 20:00:00"));
  
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice className={className} isToken={isToken} />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const mapStateToProps = ({ user }) => ({
  isToken: user && user.token,
});

export default connect(mapStateToProps)(EnterBtn);
