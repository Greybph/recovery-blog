import React from 'react'

function PrivacyPolicy() {
  return (
    <div className='flex justify-center px-4 py-24 md:py-32 lg:py-44 font-mont md:px-0'>
      <main className='prose'>
        <h1>Pivacy Policy</h1>
        <h2>Who we are</h2>
        <p>Our website address is https://www.recoveryocean.com</p>
        <h2>What personal data does Recovery Ocean collect and why?</h2>
        <h3>Submitted Questions</h3>
        <p>When a visitor submits a question on the site we collect the email address and question sent.
        </p>
        <p>The email address is used to respond to the question asked.</p>
        <h3>Contact Form</h3>
        <p>On the Recovery Ocean contact page, there is a form that you can use to submit a message to Eric Anderson.</p>
        <p>When you submit a message your email address and first name will be saved. We will respond to your message via the email address given.</p>
        <h3>Subscribe</h3>
        <p>When a user subscribes to Recovery Ocean their email address is collected.</p>
        <p>We will send alerts to this email address whenever a new blog post is published</p>
        <h3>Cookies</h3>
        <p>We use cookies to personalize content and ads, provide social media features, and analyze our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.</p>

        <h2>How long we retain your data</h2>
        <p>If you submit a question, send a message via the contact form, or subscribe to post alerts, the email address and message are retained indefinitely. This is so we can recognize and approve any follow-up messages/questions that you may submit.</p>
      </main>
    </div>
  )
}

export default PrivacyPolicy