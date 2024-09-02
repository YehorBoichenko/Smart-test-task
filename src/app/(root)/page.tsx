/**
 * The `Home` component is a React functional component that serves as the main page layout.
 * It uses several shared components to structure the page:
 * - `Wrapper` to encapsulate the content
 * - `Header` to display the page header
 * - `Table` to render a table of data
 * - `Footer` to show the page footer
 *
 * This component is asynchronous, which may be used for data fetching or other asynchronous operations.
 *
 * @returns {JSX.Element} The rendered JSX for the Home page, including the Wrapper, Header, Table, and Footer components.
 */
import { Wrapper } from '@/shared/components/Wrapper';
import { Table } from '@/shared/components/Table';
import { Header } from '@/shared/components/Header';
import { Footer } from '@/shared/components/Footer';

export default async function Home() {
  return (
    <Wrapper>
      <Header />
      <Table />
      <Footer />
    </Wrapper>
  );
}
