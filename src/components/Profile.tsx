import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={ styles.profileContainer }>
      <img src="https://github.com/JFMacedo.png" alt="Jean Fernandes de Macedo" />
      <div>
        <strong>Jean Macedo</strong>
        <p>
          <img src="icons/level.svg" alt="levelUp" />
          Level 1
        </p>
      </div>
    </div>
  );
}