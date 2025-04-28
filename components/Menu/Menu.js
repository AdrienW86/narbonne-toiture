import React from 'react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}> Les étapes d’une couverture de toit avec Narbonne Toiture </h1>
            <p className={styles.p}> Chez Narbonne Toiture, nous mettons tout notre savoir-faire au service de vos projets de couverture, que ce soit pour une construction neuve ou une rénovation. Chaque chantier est conduit avec sérieux, précision et respect des délais. Découvrez notre méthode de travail. </p>
        
        <h2 className={styles.h2}> 1. Analyse de votre toiture et conseils personnalisés </h2>
            <p className={styles.p}> Nous réalisons une première visite gratuite pour évaluer l’état de votre toit ou définir les besoins de votre projet. Nous vous orientons vers les matériaux les mieux adaptés à votre situation : tuiles, ardoises, bac acier, zinc... Un devis clair et détaillé vous est ensuite remis. </p>

        <h2 className={styles.h2}> 2. Préparation sécurisée du chantier </h2>
            <p className={styles.p}> Avant tout début d’intervention, nous sécurisons intégralement la zone de travail. L’installation des échafaudages est réalisée dans le strict respect des normes de sécurité en vigueur. </p>

        <h2 className={styles.h2}> 3. Retrait de l'ancienne toiture (en rénovation) </h2>
            <p className={styles.p}> Lorsqu’il s'agit d'une rénovation, nous procédons à la dépose soigneuse de l’ancienne couverture. Les matériaux retirés sont triés et traités dans le respect des règles environnementales. </p>

        <h2 className={styles.h2}> 4. Installation de la nouvelle couverture </h2>
            <ul className={styles.ul}> Nous assurons ensuite la pose de votre nouvelle toiture avec minutie :</ul>
                <li className={styles.li}> Mise en place d'un écran sous-toiture pour protéger contre l'humidité et le vent. </li>
                <li className={styles.li}> Fixation des liteaux ou des voliges suivant le type de couverture choisi. </li>
                <li className={styles.li}> Pose des éléments de couverture avec un soin particulier apporté aux finitions et à l'esthétique. </li>

        <h2 className={styles.h2}> 5. Étanchéité et finitions soignées </h2>
            <p className={styles.p}> Nous garantissons une étanchéité parfaite autour des cheminées, des lucarnes et des fenêtres de toit. Nous installons également les gouttières et tous les dispositifs d’évacuation des eaux pluviales. </p>

        <h2 className={styles.h2}> 6. Nettoyage du chantier et validation finale </h2>
            <p className={styles.p}> Après l'achèvement des travaux, nous nettoyons soigneusement la zone d’intervention. Un contrôle qualité est effectué en votre présence pour valider la bonne réalisation du chantier et vous remettre la garantie décennale. </p>
            
            <p className={styles.p}> Avec Narbonne Toiture, vous choisissez la sécurité, la qualité et la durabilité pour votre toiture. Faites appel à notre équipe pour un résultat à la hauteur de vos attentes. </p>
    </section>
  )
}