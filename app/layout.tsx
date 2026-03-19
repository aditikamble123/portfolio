import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aditi Kamble — Creative Developer',
  description:
    'Portfolio of Aditi Kamble — Creative Developer specialising in Next.js, Framer Motion, and high-performance scroll interactions.',
  openGraph: {
    title: 'Aditi Kamble — Creative Developer',
    description: 'Immersive scroll experiences & digital craftsmanship.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#080808] text-white antialiased">{children}</body>
    </html>
  );
}
