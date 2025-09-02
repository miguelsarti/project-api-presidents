import "./globals.css";

export const metadata = {
  title: "Usuário API",
  description: "Projeto para mostrar tudo que eu sei",
  icons: {
        icon: "/img/favicon.icon.png",
    },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
