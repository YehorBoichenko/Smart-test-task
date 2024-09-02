import Link from 'next/link';

/**
 * NotFoundPage Component - A React Functional Component that displays a 404 error page.
 * 
 * This component renders a 404 error page with an animation of eyes, an error message,
 * and a link to navigate back to the home page.
 * @returns {JSX.Element} The rendered NotFoundPage component.
 */

const NotFoundPage: React.FC = () => {
  return (
    <section className="errorPage">
      <div className="container">
        <div className="eyes">
          <div className="eye">
            <div className="eye__pupil eye__pupil--left"></div>
          </div>
          <div className="eye">
            <div className="eye__pupil eye__pupil--right"></div>
          </div>
        </div>

        <div className="errorPageHeading">
          <h1 className="errorPageHeading__title">Looks like you're lost</h1>
          <p className="errorPageHeading__description">404 error</p>
        </div>

        <Link
          href="/"
          className="errorPageButton"
          aria-label="Back to home"
          title="Back to home"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
};
export default NotFoundPage;

// Previous version of not found  page

// import React from 'react';
// import { Wrapper } from '@/shared/components/Wrapper';
// import Link from 'next/link';

// const NotFoundPage: React.FC = () => {
//   return (
//     <Wrapper>
//       <section className='page404'>
//         <div className="container">
//           <div className='flexCenter'>
//             <div className='textCenter'>
//               <div className='fourZeroFourBg'>
//                 <h1 className='textEightXL'>404</h1>
//               </div>
//               <div className='contentBox404'>
//                 <h3 className='textFourXL'>Look like you're lost</h3>
//                 <p className='textLg'>
//                   The page you are looking for is not available!
//                 </p>
//                 <Link href="/" className='link404'>Go to Home</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Wrapper>
//   );
// };

// export default NotFoundPage;
