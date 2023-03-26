import React, { useRef, useState } from 'react'
import { Form } from 'react-router-dom'
import styles from './Signup.module.scss'
import addNotification from 'react-push-notification'
import YouTube from 'react-youtube'

const Signup = () => {
  const [name, setName] = useState()
  const emailRef = useRef()

  const buttonClick = () => {
    addNotification({
        title: 'Warning',
        subtitle: 'This is a subtitle',
        message: 'This is a very long message',
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
    });
};

  return (
    <div className={styles.signup}>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <YouTube/>
      {/* <Form>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required ref={emailRef} /> 
        </Form.Group>
      </Form> */}
    </div>
  )
}

export default Signup
