import React from 'react'
import SponsorLayout from '../common/sponsorlayout'

const RefundPolicy = () => {
  return (
    <div>
      <SponsorLayout title="Returns and Refunds Policy">
        <p>
          Thank you for participating at WOW PHOTO AWARDS 2021 International
          Photo Contes focusing World Tourism.<br></br> Please read this policy
          carefully. <br></br>This is the Return and Refund Policy of WOW PHOTO
          AWARDS .
        </p>
        <h5>Digital products</h5>
        <p>
          We do not issue refunds for digital services once the order is
          confirmed and the Photo is submitted.<br></br>We recommend contacting
          us for assistance if you experience any issues receiving or uploading
          during the submission.
        </p>
        <h5>Contact us</h5>
        <p>
          If you have any questions about our Returns and Refunds Policy, please
          contact us:
          <br></br>
          By email:
          <a href="mailto:concerns@wowphotoawards.com">
            {' '}
            concerns@wowphotoawards.com
          </a>
          <br></br>
          By visiting this page on our website:
          <a href="http://wowphotoawards.com/contact">
            {' '}
            wowphotoawards.com/contact
          </a>
        </p>
      </SponsorLayout>
    </div>
  )
}

export default RefundPolicy
