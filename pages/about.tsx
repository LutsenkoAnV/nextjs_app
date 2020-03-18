import Layout from './components/MyLayout';
import { NextPage } from 'next';

const About: NextPage = () => {
    return (
      <Layout>
        <p>
          Hey, let's build a simple blog.
          We will start with a simple MVP. It will have Posts and Comments features.
       </p>
      </Layout>
    );
  }

  export default About;