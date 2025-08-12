import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="bg-red-500 p-10 border border-black text-black">
          Home
        </div>
        {children}
      </body>
    </html>
  );
}
