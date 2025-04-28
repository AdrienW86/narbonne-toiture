import React from 'react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}> Les étapes clés d’un chantier de peinture intérieure et extérieure avec Narbonne Toiture </h1>
            <p className={styles.intro}> Chez Narbonne Toiture, notre expertise ne s'arrête pas aux toitures. Nous réalisons également vos projets de peinture intérieure et extérieure, pour rénover ou valoriser votre bien. Chaque chantier est pris en charge avec rigueur, savoir-faire et exigence. Découvrez notre méthodologie. </p>
        
        <h2 className={styles.h2}> 1. Première rencontre et analyse du projet </h2>
            <p className={styles.p}> Tout commence par une visite technique de votre bien. Nous inspectons l'état des surfaces, vous conseillons sur les meilleures solutions (peinture résistante, hydrofuge, décorative, etc.) et vous proposons un devis clair et détaillé. </p>

        <h2 className={styles.h2}> 2. Préparation minutieuse des supports </h2>
            <ul className={styles.ul}> Avant toute application, nous nous assurons d’une préparation irréprochable :</ul>
                <li className={styles.li}> Mise en place de protections pour vos sols, meubles et ouvertures. </li>
                <li className={styles.li}> Nettoyage, traitement des fissures, et remise en état des surfaces abîmées. </li>
                <li className={styles.li}> Ponçage soigné pour une adhérence optimale des couches de peinture. </li>
                <li className={styles.li}> Application d'une sous-couche adaptée au type de support. </li>

        <h2 className={styles.h2}> 3. Mise en peinture </h2>
            <p className={styles.p}> Nous appliquons la peinture avec précision, en respectant les temps de séchage et en multipliant les couches si nécessaire pour garantir une finition homogène, aussi bien en intérieur qu’en extérieur. </p>

        <h2 className={styles.h2}> 4. Détails et finitions </h2>
            <p className={styles.p}> Nous apportons un soin particulier aux détails : angles parfaits, teintes uniformes, finitions impeccables. Chaque élément est inspecté pour un rendu haut de gamme. </p>

        <h2 className={styles.h2}> 5. Nettoyage complet et remise des lieux </h2>
            <p className={styles.p}> Après travaux, nous procédons au nettoyage intégral du chantier : retrait des protections, évacuation des déchets, et remise en état des lieux. La réception du chantier se fait en votre présence pour valider ensemble la qualité de notre intervention. </p>
            
            <p className={styles.intro}> Narbonne Toiture vous garantit une prestation de peinture durable, soignée et respectueuse de votre environnement. Sublimez vos espaces avec des professionnels investis à vos côtés. </p>
    </section>
  )
}
