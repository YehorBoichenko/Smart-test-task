import { Wrapper } from '@/shared/components/Wrapper';
import { Table } from '@/shared/components/Table';
import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';

export default async function Home() {
  return (
    <Wrapper>
      <Header />
      <Table />
      <Footer />
    </Wrapper>
  );
}
