'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/modules/navbar/Navbar';
import Footer from '@/components/modules/footer/Footer';

export default function ClientWrapper({ children }) {
  const pathname = usePathname();

  // مسیرهایی که نباید Navbar و Footer داشته باشند
  const noLayoutRoutes = [
    '/login-register',
    '/account/dashboard',
    '/account/tickets',
    '/account/tickets/newTicket',
    '/account/orders',
    '/account/user-products',
    '/account/my-listings',
    '/account/favorites',
    '/account/comments'
  ];

  const hideLayout = noLayoutRoutes.some((route) => pathname.startsWith(route));

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
