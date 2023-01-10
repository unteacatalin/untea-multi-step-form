import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { SelectedContextProvider } from '../store/selected-context';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SelectedContextProvider>
        <Component {...pageProps} />
      </SelectedContextProvider>
    </Layout>
  );
}

export default MyApp;
