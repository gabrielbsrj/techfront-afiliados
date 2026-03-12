// Root layout obrigatório para o Next.js inicializar corretamente
// A linguagem e o Header/Footer são gerenciados pelo app/[locale]/layout.js

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
