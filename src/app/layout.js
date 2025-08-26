import "./globals.css";

export const metadata = {
  title: "Tailwind",
  description: "Projeto para mostrar tudo que eu sei",
  icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
