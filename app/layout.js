export const metadata = {
  title: 'CarMarket',
  description: 'Demo avtomobilski portal'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 20, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
