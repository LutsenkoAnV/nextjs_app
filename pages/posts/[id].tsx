import { useState, FC } from 'react';
import Layout from '../components/MyLayout';
import axios from 'axios';
import styled from 'styled-components';
import { NextPage } from 'next';

const Section = styled.section`
  position: relative;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  width: 60%;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 17px -1px rgba(0,0,0,0.81);

  & .post__text {
    margin-bottom: 40px;
  }

  & .post__text:after {
    content: "";
    display: block;
    margin: 40px auto;
    width: 95%;
    border-bottom: 1px solid black;
  }
`;

const Comment = styled.div`
  position: relative;
  width: 950px;
  margin: 0 auto 15px;
  padding: 15px;
  background-color: #f2f3f5;
  border-radius: 18px;

  & .destroy-comment {
    display: none;
    position: absolute;
    margin: 0;
    padding: 0;
    border: 0;  
    background: none;
    top: 5px;
    right: 10px;
    width: 30px;
    font-size: 40px;
    font-family: arial;
    color: #cc9a9a;
    outline: none;
    transition: color 0.2s ease-out;
    cursor: pointer;

    &:after {
      content: "×";
    }
  }

  & .destroy-comment:hover {
    color: #af5b5e;
  }

  &:hover .destroy-comment {
    display: block;
  }
`;

const Form = styled.form`
  width: 100%;

  & .form__button {
    display: block;
    margin: 0 auto;
  }
`;

const Textarea = styled.textarea`
  display: block;
  margin: 10px auto;
  width: 380px;
  height: 80px;
  border-radius: 5px;
`;

const loadData = async (id: string) => {
  const response = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
  const data = response.data;

  return data;
};

interface Props {
  show: Post;
}

const Post: NextPage<Props> = props => {
  const [value, setValue] = useState('');
  const [post ,setPost] = useState(props.show);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    if(!value) {
      return;
    }

    await axios.post('https://simple-blog-api.crew.red/comments', {postId: post.id, body: value });
    
    const show = await loadData(post.id);
    setValue('');  
    setPost(show);
  }

  const deleteComment = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget.dataset;
    await axios.delete(`https://simple-blog-api.crew.red/comments/${id}`);

    const show = await loadData(post.id);
    setPost(show);
  }
  
  return (
    <Layout>
      <Section>
        <h2 className="post__heading">{post.title}</h2>
        <p className="post__text">{post.body}</p>
        <div>
          {post.comments.map(comment => (
            <Comment key={comment.id}>
              <button
                type="button"
                className="destroy-comment"
                aria-label="Delete"
                data-id={comment.id}
                onClick={deleteComment}
              />
              <p className="comment__text">{comment.body}</p>
            </Comment>
          ))}
        </div>
        <Form onSubmit={handleSubmit}>
          <Textarea 
            type="text" 
            placeholder="input comment"
            value={value}
            onChange={handleChange} 
          />
          <button type="submit" className="form__button">Add comment</button>
        </Form>
      </Section>
    </Layout>
  )
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const show = await loadData(id as string);

  return { show };
};

export default Post;