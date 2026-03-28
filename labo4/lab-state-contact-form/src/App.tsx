import { useState } from "react";


const ContactForm = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [showText, setShowText] = useState(true);
  return showText === true ? (
    <div>
      <label>First name</label>
      <input value={firstName} type="text" onChange={(e) => setFirstname(e.target.value)} />
      <label>Last name</label>
      <input value={lastName} type="text" onChange={(e) => setLastname(e.target.value)} />
      <label>email</label>
      <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
      <label>Message</label>
      <textarea name="" id=""></textarea>
      <button onClick={() => setShowText(true)}>Send</button>
    </div>
  ) : (<div>Thanks {firstName} {lastName}! We will contact you at {email}.</div>);
}
function App() {

  return (
    <>
      <ContactForm />
    </>
  )
}

export default App
