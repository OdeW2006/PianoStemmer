import styles from "../css/Dashboard.module.css";
import Navbar from "../components/Navbar";
import React from "react";
import { InputTextarea } from 'primereact/inputtextarea';

export default function DashboardPage() {

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div id="welkom" className={styles.pagePart}>
                    <label className={styles.headerStyle}>Welkom</label>
                    <div className={styles.welcomeGrid}>
                        <div className={styles.welcomeTextField}>
                            <label className={styles.welcomeInfo}>
                                Klinkt uw piano niet meer zoals voorheen? Is hij ontstemd en toe aan een professionele stembeurt? Dan bent u hier aan het juiste adres!

                                Ik ben een ervaren en gepassioneerde pianostemmer met jarenlange expertise in het stemmen en onderhouden van pianos. Een goed gestemde piano zorgt niet alleen voor een prachtige, zuivere klank, maar verlengt ook de levensduur van uw instrument.

                                Of u nu een professionele pianist bent, een enthousiaste amateur of een trotse eigenaar van een familiepiano, ik zorg ervoor dat uw instrument weer perfect klinkt. Met nauwkeurigheid en vakmanschap breng ik uw piano terug naar zijn optimale stemming, zodat u weer volop kunt genieten van het spelen.

                                Bent u geinteresseerd in een stembeurt? Neem gerust een kijkje op mijn website voor meer informatie of om direct een afspraak in te plannen. Ik help u graag om uw piano weer in topconditie te brengen!</label> <label className={styles.welcomeInfo}>
                                Klinkt uw piano niet meer zoals voorheen? Is hij ontstemd en toe aan een professionele stembeurt? Dan bent u hier aan het juiste adres!
                            </label>
                        </div>
                        <div className={styles.welcomImageField}>
                            <img className={styles.pianoImage} src="./Images/PianoFoto.png" alt="Foto kan niet worden geladen."></img>
                        </div>
                    </div>
                </div>
                <div id="over-mij" className={styles.pagePartSecond}>
                    <label className={styles.headerStyle}>Over mij</label>
                </div>
                <div id="ervaring" className={styles.pagePart}>
                    <label className={styles.headerStyle}>Ervaring</label>
                </div>
                <div id="contact" className={styles.pagePartSecond}>
                    <label className={styles.header}>Contact</label>
                    <form className={styles.contactForm}>

                        <div className={styles.formPart}>
                            <label>Naam</label>
                            <input></input>

                            <label>Achternaam</label>
                            <input></input>
                            <br />
                        </div>
                        <div className={styles.formPart}>
                            <label>Email adres</label>
                            <input></input>
                           
                            <label>Telefoonnummer</label>
                            <input></input>
                            <br />
                            <label>Bericht</label><br />
                            <InputTextarea />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}