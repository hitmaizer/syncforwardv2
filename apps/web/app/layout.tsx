import StyledComponentsRegistry from './registry';
import 'src/font-face.css';
import '@config/fontsource';
import AppProvider from 'src/providers/app';
import { GlobalStyle } from '@styles';
import Layout from '@components/Layout';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <GlobalStyle />
          <StyledComponentsRegistry>
            <Layout>{children}</Layout>
          </StyledComponentsRegistry>
        </AppProvider>
      </body>
    </html>
  );
}
