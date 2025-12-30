import HeaderMenu from "./components/header_menu";
import "./globals.css";

export const metadata = {
  title: "Drama news",
  description: "Noticias e analises sobre o mundo das séries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <HeaderMenu />
        {children}
      </body>
    </html>
  );
}
