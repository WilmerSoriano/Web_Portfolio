import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
   return (
      <section cassName={styles.container}>   
         <div className={styles.content}>
            <h1 className={styles.title}>Welcome to my Portfolio</h1>
            <p className={styles.description}>
               My name is Wilmer Soriano.<br/> 
               I am a Computer Science Major at<br/> 
               the University of Texas at Arlington.<br/> 
            </p>
            <a href="mailto:official_Wilmer.2020@outlook.com" className={styles.contactBtn}>
               Contact Me</a>
         </div>
         <img 
         src="/assets/hero/heroImage.png"
         alt="Image of me" 
         className={styles.heroImg}
         />
         <div className={StyleSheet.topBlur}/>
         <div className={StyleSheet.bottomBlur}/>
      </section>
   )
}