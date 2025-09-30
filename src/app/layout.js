import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
