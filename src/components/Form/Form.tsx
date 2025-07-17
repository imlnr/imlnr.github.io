import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'
import validator from 'validator'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!validEmail || !message || !name || !subject) {
      e.preventDefault()
      toast.error('Please fill all fields correctly.', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'error',
      })
      return
    }
    setSubmitted(true)
    toast.success('Email successfully sent!', {
      position: toast.POSITION.BOTTOM_LEFT,
      pauseOnFocusLoss: false,
      closeOnClick: true,
      hideProgressBar: false,
      toastId: 'succeeded',
    })
  }

  if (submitted) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form
        action="https://formsubmit.co/42abce855c056b6a99327e97196448e8"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Name"
          id="name"
          type="text"
          name="name"
          required
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={e => verifyEmail(e.target.value)}
          required
        />
        <input
          placeholder="Subject"
          id="subject"
          type="text"
          name="subject"
          required
          onChange={e => setSubject(e.target.value)}
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={e => setMessage(e.target.value)}
        />
        <input type="hidden" name="_captcha" value="false" />
        <button
          type="submit"
          disabled={!validEmail || !message || !name || !subject}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}

