import { useState } from 'react';
import Layout from '../components/MyLayout';
import axios from 'axios';
import styled from 'styled-components';
import { NextPage } from 'next';

const H2 = styled.h2`
  text-align: center
`;

const Form = styled.form`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  flex-direction: column;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;

  & .form__item {
    margin-bottom: 16px;

    &:last-of-type {
      margin-bottom: 32px;
    }
  }

  & .form__input {
    box-sizing: border-box;
    font-size: 14px;
    line-height: 14px;
    color: #393939;
    padding: 0 17px;
    width: 100%;
    height: 46px;
    background: #f7f8ff;
    border: 1px solid #d7dbe0;
    border-radius: 8px;
    outline: none;
    transition: 0.5s;

    &:hover {
      border-color: #00AAEF;
      order-width: 2px;
    }
  }

  & .input_textarea {
    height: 120px;
    padding-top: 10px;
  }

  & .form__button {
    font-family: "Roboto", sans-serif;
    width: 100%;
    height: 56px;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 14px;
    font-weight: 700;
    background: #23272b;
    box-shadow: 0 6px 23px rgba(39, 62, 65, 0.46);
    border-radius: 8px;
    border-style: none;
    cursor: pointer;
    color: #fff;
    transition: 0.5s;

    &:hover {
      background-color: #70757b;
    }
  }

`;

const New: NextPage = () => {
  const [titleValue, settitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    switch (event.target.name) {
      case 'title':  settitleValue(value);
        break;

      case 'content': setContentValue(value);
        break;

      default:
        break;
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target);

    if(!titleValue) {
      return;
    }

    await axios.post('https://simple-blog-api.crew.red/posts', {title: titleValue, body: contentValue});
    
    settitleValue('');
    setContentValue('');
  }
  
  return (
    <Layout>
      <H2>New post</H2>
      <Form className="form contacts__form" onSubmit={handleSubmit}>
        <label className="form__item">Title
          <input type="text" name="title" value={titleValue} className="input form__input" onChange={handleChange} />
        </label>
        <label className="form__item">Content
          <textarea value={contentValue} name="content" className="input input_textarea form__input" onChange={handleChange}></textarea>
        </label>
        <button type="submit" className="button form__button">Add post</button>
      </Form>
    </Layout>
  );
}

export default New;