import { useState } from 'react';
import Layout from './components/MyLayout';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';
import { NextPage } from 'next';

const H1 = styled.h1`
  margin-left: 50px;
`;

const StyledLi = styled.li`
  position: relative;
  list-style: none;
  text-align: center;
  height: 100px;
  max-width: 950px;
  padding-top: 30px;
  margin: 0 auto 15px;
  border: 1px solid lightgrey;

  & .destroy-post {
    display: none;
    position: absolute;
    margin: 0;
    padding: 0;
    border: 0;  
    background: none;
    top: 10px;
    right: 20px;
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

  &:hover .destroy-post {
    display: block;
  }

  & .destroy-post:hover {
    color: #af5b5e;
  }

  & .post__title {
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    text-decoration: none;
    font-size: 15px;
    color: black;

    &:hover {
      color: grey;
    }
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  position: absolute;
  text-decoration: none;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin-top: 10px;
  padding: 8px;
  right: 20px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: black;
  }
`;

const loadPosts = async () => {
  const response = await axios.get(`https://simple-blog-api.crew.red/posts`);
  const data = response.data;

  return data;
};

interface Props {
  shows: Post[];
}

const Index: NextPage<Props> = props => {
  const [posts, setPosts] = useState<Post[]>(props.shows);

  const deletePost = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget.dataset;
    await axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);
    
    const show = await loadPosts();
    setPosts([...show.reverse()]);
  }

  return (
    <Layout>
      <Link href="/posts/new">
        <StyledLink>Add new post</StyledLink>
      </Link>
      <H1>Posts</H1>
      <ul>
        {posts.map(show => (
          <StyledLi key={show.id}>
            <button
              type="button"
              className="destroy-post"
              aria-label="Delete"
              data-id={show.id}
              onClick={deletePost}
            />
            <Link href="/posts/[id]" as={`/posts/${show.id}`}>
              <a className="post__title">{show.title}</a>
            </Link>
          </StyledLi>
        ))}
      </ul>
    </Layout>
  )
};

Index.getInitialProps = async function() {
  const show = await loadPosts();

  return {
    shows: [...show].reverse(),
  };
};

export default Index;