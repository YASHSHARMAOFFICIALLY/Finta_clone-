import "./globals.css"
import {Inter} from "next/font/google"
const inter = Inter({subsets:["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-screen `}>
       
        {/* The "children" is where your Home page content will show up */}
        <main>{children}</main>
      </body>
    </html>
  );
}