import React from 'react';
import styles from "./Button.module.scss";

type Props = {
  text:string
  onUserClick: () => void
}

const Button:React.FC<Props> = ({onUserClick,text}) => {
  return (
    <button onClick={onUserClick} className={styles.headerButton}>
      {text}
    </button>
  );
};

export default Button;