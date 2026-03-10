import type { Metadata } from 'next';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'Rimuru v2.1 | Enhanced Profile',
  description: 'Profile of Rimuru / GEN.S - Creative Developer & Gamer',
};

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>RIMURU</h1>
        <div className={styles.version}>v2.1 / CORE ACTIVE</div>
      </header>

      <main className={styles.main}>
        {/* PROFILE SECTION */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>👤 IDENTITY</h2>
          <div className={styles.profile}>
            <span className={styles.name}>リムル / GEN.S</span>
            <span className={styles.role}>Creative Developer & Gamer</span>
            <div className={styles.bioText}>
              <p>
                「遊び」を「創造」に変えるデジタル・ノマド。2000万年の時を超えて（設定）、現代のWeb技術とゲーミングカルチャーに没頭中。
                死と生の境界線を楽しむように、コードとデザインの境界を行き来しています。
              </p>
              <p>
                フォートナイトや原神が好き。<br />
                🔥 死と生の境目も、遊び心で楽しむタイプ。
              </p>
            </div>
          </div>
        </section>

        {/* SPECS & GAMING SECTION */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>⚙️ SPECS & STATUS</h2>
          <div className={styles.grid2}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Main Game</span>
              <span className={styles.specValue}>Fortnite / Genshin</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Style</span>
              <span className={styles.specValue}>High Sensitivity / Speed</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>PC: CPU</span>
              <span className={styles.specValue}>AMD Ryzen 5 7500F</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>PC: GPU</span>
              <span className={styles.specValue}>NVIDIA RTX 4060</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Keyboard</span>
              <span className={styles.specValue}>FUN60</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Mouse</span>
              <span className={styles.specValue}>Logitech G203</span>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>🛠 SKILL SET</h2>
          <div className={styles.tagContainer}>
            <span className={styles.tag}>かめはめ波が撃てる</span>
            <span className={styles.tag}> フォートナイト</span>
            <span className={styles.tag}>自作ｐｃ</span>
            <span className={styles.tag}>原神</span>
            <span className={styles.tag}>動画制作</span>
            <span className={styles.tag}>スマブラ</span>
          </div>
          <div className={styles.tagContainerLast}>
            <span className={styles.tag}>反射神経</span>
            <span className={styles.tag}>ゼル伝</span>
            <span className={styles.tag}>格闘ゲーム</span>
            <span className={styles.tag}>ファイヤーボールも撃てる</span>
          </div>
        </section>

        {/* LINKS SECTION */}
        <section className={styles.card}>
          <h2 className={styles.sectionTitle}>🌐 CONNECT</h2>
          <div className={styles.linkGrid}>
            <a 
              className={styles.linkCard} 
              href="https://www.youtube.com/@Serenchannel-c6x" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className={styles.linkTitle}>YouTube</span>
              <span className={styles.linkDesc}>Gameplays & Highlights</span>
            </a>
            <a 
              className={styles.linkCard} 
              href="https://pacmanonline.org/game-ja" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className={styles.linkTitle}>パックマンゲーム</span>
              <span className={styles.linkDesc}>Main Website</span>
            </a>
            <a 
              className={styles.linkCard} 
              href="https://mrdoob.com/projects/chromeexperiments/google-gravity/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className={styles.linkTitle}>Gravity</span>
              <span className={styles.linkDesc}>Inspiration</span>
            </a>
            <a 
              className={styles.linkCard} 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className={styles.linkTitle}>X / Twitter</span>
              <span className={styles.linkDesc}>Daily Updates</span>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Rimuru Project. All rights reserved.</p>
        <span style={{ opacity: 0.5 }}>System Status: Normal | Rendering: Blink</span>
      </footer>
    </div>
  );
}
