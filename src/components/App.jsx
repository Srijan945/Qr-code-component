import styles from './css/App.module.css';
import Footer from './Footer';
import Card from './Card';

function App() {
  return (
    <main className={styles.app}>
      <Card />
      <Footer />
    </main>
  );
}

export default App;
