import React from 'react'
import { Link } from 'react-router-dom'
import Flags from './flags'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex-center text-center flex-column pt-4 pb-4 pl-3 pr-3">
        <ul className="menu-list">
          <li className="mb-3">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="mb-3">
            <Link to="/terms-and-conditions">Terms & conditions</Link>
          </li>
          <li className="mb-3">
            <Link to="/refund-policy">Refund Policy</Link>
          </li>
        </ul>
        <SocialLinks />
        <Flags />
        <ul className="menu-list">
          <li>Copyrights 2021</li>
          <li>
            Powered by <a href="http://globalmediabox.com/">Global Media Box</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export const SocialLinks = ({ className = 'menu-list mb-3' }) => (
  <ul className={className}>
    <li>
      <a href="https://www.facebook.com/wowtamilnadu">
        <i className="fab fa-facebook f-20"></i>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/wowtamilnadu">
        <i className="fab fa-instagram f-20"></i>
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com/wowtamilnadu">
        <i className="fab fa-twitter f-20"></i>
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/c/WOWTamilNadu">
        <i className="fab fa-youtube f-20"></i>
      </a>
    </li>
  </ul>
)

export default Footer
