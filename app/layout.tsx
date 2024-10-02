import { Header } from "../Components/Header";
import { Providers } from "../Components/Providers";
import "./globals.css";

export const metadata = {
  title: 'Books', // Change this to your desired website name
  description: 'BUmewhere',
  icons: {
    icon: './SPlitslogo.png', // Path to your favicon file in the public directory
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}