import React from 'react';
import emailjs from 'emailjs-com';
import styled from '@emotion/styled';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_qxsljjm', 'template_cimhrx5', e.target, 'user_rPii7nPm5yyhTBFy6yWqj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
        <Blockwrapper>
        <InputWrapper>
            <Label>회사명</Label>
            <Input type="text" name="company-name" />
        </InputWrapper>
        <InputWrapper>
            <Label>직급</Label>
            <Input type="text" name="user-rank" />
        </InputWrapper>
        <InputWrapper>
            <Label>이름</Label>
            <Input type="text" name="user-name" />
        </InputWrapper>
        <InputWrapper>
            <Label>연락처</Label>
            <Input type="text" name="contact-number" />
        </InputWrapper>
        <InputWrapper>
            <Label>이메일</Label>
            <EmailInput type="text" name="contact-number" />
        </InputWrapper>
        <InputWrapper>
            <Label>내용</Label>
            <Textarea name="message" />
        </InputWrapper>
        <Input type="submit" value="Send" />
        </Blockwrapper>
    </form>
  );
}

const Blockwrapper = styled.div`
    width: 1088px;
    display: flex;
    flex-wrap: wrap;
    margin: 5vh auto 5vh auto;
    justify-content: space-between;
    @media screen and (max-width: 1220px) {
        width: 90vw;
        justify-content: space-between;
  }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1vh 0;

`;

// const EmailWrapper = styled(InputWrapper)`
//     width: 90vw;
//     max-width: 1088px;
// `;

const Label = styled.label`
    padding: 1vh 0;
    font-size: 20px;
    @media screen and (max-width: 780px) {
        font-size: 16px;

  }
`;

const Textarea = styled.textarea`
    width: 90vw;
    max-width: 1088px;
    height: 30vh;
    padding: 0;
    border: 1px solid #C9C9C9;
    border-radius: 3px;
`;

const Input = styled.input`
    max-width: 490px;
    width: calc(44vw - 40px) ;
    padding: 10px 20px;
    border: 1px solid #C9C9C9;
    border-radius: 3px;
    font-size: 20px;
    @media screen and (max-width: 780px) {
    padding: 5px 10px;
    width: calc(45vw - 30px) ;
    height: 20vw;
    max-height: 20px;
    font-size: 16px;
  }
`;

const EmailInput = styled(Input)`
    max-width: 1048px;
        width: calc(90vw - 40px);
    @media screen and (max-width: 780px) {
        padding: 5px 10px;

        width: calc(90vw - 23px);
    max-width: 1088px;
  }
`;

