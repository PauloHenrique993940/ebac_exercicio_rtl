import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://images.tcdn.com.br/img/img_prod/747391/miniatura_batmovel_1966_com_boneco_batman_1_32_jada_toys_9760_1_5e7c2560b118afc68cc89bebc235b3c2.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
