import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    
    <div className={styles.container}>
       
      <div className={styles.content}>
        <div className={styles.imageProfile}>
          <img
            src="/img/my-pic.jpg"
            alt="Imagem de presidentes"
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Miguel Sarti</h1>
          <p className={styles.description}>
            Eu me chamo Miguel Sarti, tenho 17 anos, sou estudante do SESI e SENAI e atualmente estou na turma 2TDS2. Estou no meu segundo ano de desenvolvimento web, e estou muito animado para continuar aprendendo e crescendo nessa área.
          </p>
          <h2 className={styles.motivacional}>"Nunca desista dos seus sonhos, pois cada passo dado é uma conquista rumo ao sucesso!"</h2>
        </div>  
      </div>
    </div>
  );
}
