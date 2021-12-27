import { GetStaticProps } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import { FiCalendar, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <div className={commonStyles.container}>
      <Header />
      <main>
        <div>
          <Link href="/">
            <a>
              <strong>Titulo</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                veritatis non quia ipsa mollitia, beatae velit excepturi,
                dolorem qui ab officiis sed, itaque libero nam exercitationem
                vitae explicabo maxime? Temporibus.
              </p>
              <ul>
                <li>
                  <FiCalendar />
                  27 Dec 2021
                </li>
                <li>
                  <FiUser />
                  João Paulo Fricks
                </li>
              </ul>
            </a>
          </Link>
        </div>
      </main>
      <footer>hellow footer</footer>
    </div>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
