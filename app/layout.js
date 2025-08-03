import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'FeedbackHub',
  description: 'Collect feedback easily & effectively',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
