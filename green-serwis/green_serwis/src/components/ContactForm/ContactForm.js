import React from "react"
import styled from "styled-components"

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.green};
  margin: 2%;
  border-radius: 25px;
`
const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: white;
  align-self: center;
  font-weight: bold;
  margin-top: 2%;
  margin-bottom: 5%;
`
const StyledInput = styled.input`
  border: none;
  margin-top: 2%;
  margin-bottom: 2%;
  height: 10%;
  width: 90%;
  align-self: center;
  border-radius: 25px;
  &:focus {
    outline: none;
  }
`
const StyledTextArea = styled.textarea`
  border: none;
  margin-top: 2%;
  margin-bottom: 2%;
  height: 30%;
  width: 90%;
  align-self: center;
  border-radius: 10px;
  resize: none;
  &:focus {
    outline: none;
  }
`
const SubmitButton = styled.button`
  background: ${({ theme }) => theme.light_green};
  border: none;
  width: 25%;
  height: 7%;
  border-radius: 25px;
  color: white;
  align-self: center;
  outline: none;
`

const ContactForm = () => (
  <FormWrapper
    method="post"
    action="https://getform.io/f/70a82d00-8262-4065-bf44-bc5bebf71de6"
  >
    <StyledLabel>Napisz do nas</StyledLabel>
    <StyledInput type="text" name="name" id="name" placeholder="Imie" />
    <StyledInput
      type="email"
      name="email"
      id="email"
      placeholder="Adres email"
    />

    <StyledInput type="text" name="subject" id="subject" placeholder="Temat" />
    <StyledTextArea name="message" id="message" placeholder="wiadomosc" />
    <SubmitButton type="submit">Wyslij</SubmitButton>
  </FormWrapper>
)

export default ContactForm
