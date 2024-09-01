import React from 'react';
import { Wrapper } from '@/shared/components/Wrapper';
import Link from 'next/link';
import styles from '@/app/notFound.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <Wrapper>
      <section className={styles.page404}>
        <div className={styles.container}>
          <div className={styles.flexCenter}>
            <div className={styles.textCenter}>
              <div className={styles.fourZeroFourBg}>
                <h1 className={styles.textEightXL}>404</h1>
              </div>
              <div className={styles.contentBox404}>
                <h3 className={styles.textFourXL}>Look like you're lost</h3>
                <p className={styles.textLg}>
                  The page you are looking for is not available!
                </p>
                <Link href="/" className={styles.link404}>Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default NotFoundPage;
