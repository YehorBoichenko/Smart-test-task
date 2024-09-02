/**
 * `HomeLayout` component is a React functional component that provides a Redux store context
 * to its child components. It initializes the Redux store and uses the `Provider` component
 * from `react-redux` to pass the store to its descendants.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the `main` element.
 * 
 * @returns {JSX.Element} The rendered `main` element containing the Redux `Provider` with the store and the children.
 * 
 */

'use client';
import { createStore } from '@/store/store';
import { Provider } from 'react-redux';
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = createStore();
  return (
    <main>
      <Provider store={store}>{children}</Provider>
    </main>
  );
}
