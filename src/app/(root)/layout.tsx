'use client';
import { createStore } from '@/store/store';
import { Provider } from 'react-redux';
import '@/shared/styles/main.sass';
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
