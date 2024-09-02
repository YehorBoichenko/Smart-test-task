import React from 'react';
import { Wrapper } from '@/shared/components/Wrapper';
import Link from 'next/link';


const NotFoundPage: React.FC = () => {
  return (
    <Wrapper>
      <section className='page404'>
        <div className="container">
          <div className='flexCenter'>
            <div className='textCenter'>
              <div className='fourZeroFourBg'>
                <h1 className='textEightXL'>404</h1>
              </div>
              <div className='contentBox404'>
                <h3 className='textFourXL'>Look like you're lost</h3>
                <p className='textLg'>
                  The page you are looking for is not available!
                </p>
                <Link href="/" className='link404'>Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default NotFoundPage;
