'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/modules/navbar/Navbar';
import Footer from '@/components/modules/footer/Footer';

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const showNavFooter = !pathname.startsWith('/login-register');

  return (
    <>
      {showNavFooter && <Navbar />}
      <main>{children}</main>
      {showNavFooter && <Footer />}
    </>
  );
}
