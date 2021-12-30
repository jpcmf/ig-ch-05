import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <Header />
      </div>

      <img src="/banner.png" alt="imagem" className={styles.banner} />

      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>xxx</h1>
            <ul>
              <li>
                <FiCalendar />
                {/* {post.first_publication_date} */}
                29 Dez 2021
              </li>
              <li>
                <FiUser />
                {/* {post.data.author} */}
                João
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>

          <article>
            <h2>xxxx sec</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              saepe, tempora mollitia vero veniam ipsa quaerat cumque,
              aspernatur, nihil animi nobis. Officiis, ipsa recusandae placeat,
              animi commodi quidem maxime fuga culpa aspernatur distinctio
              dolore vero dignissimos. <a href="/">Eius impedit</a> aperiam{' '}
              <strong>quos</strong> debitis pariatur aspernatur alias totam
              facere voluptatum <i>adipisci</i>
              eos ipsam consequatur quo earum perferendis, commodi consequuntur
              nihil sint? Dolore recusandae sed magni ut sint porro molestiae
              minima neque dolor ullam cupiditate unde saepe blanditiis harum,
              quibusdam ex praesentium impedit hic!
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
