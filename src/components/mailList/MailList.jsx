import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money !</h1>
      <span className="mailDesc">Join Now and Unlock Exclusive Savings: Get the Best Deals Delivered Straight to Your Inbox!</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList