import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  
  return (
    <div className={ styles.profileContainer }>
      <img src="https://github.com/jfmacedo91.png" alt="Jean Fernandes de Macedo" />
      <div>
        <strong>Jean Macedo</strong>
        <p>
          <img src="icons/level.svg" alt="levelUp" />
          Level { level }
        </p>
      </div>
    </div>
  );
}
