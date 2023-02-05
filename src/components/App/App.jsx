import styles from './App.module.css';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';

function App() {
  return (
    <main className={styles.app}>
      <Card />
      <Footer coderName="Srijan Saini"/>
    </main>
  );
}

export default App;
