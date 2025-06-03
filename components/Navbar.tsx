import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import * as React from "react";
import styles from "../css/Navbar.module.css";

export default function Navbar() {
    const handleScroll = (id: string) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, 
                behavior: "smooth",
            });
        }
    };

    const items: MenuItem[] = [
        {
            label: "Dashboard",
            icon: "pi pi-home",
            command: () => handleScroll("welkom"),
        },
        {
            label: "Over mij",
            icon: "pi pi-star",
            command: () => handleScroll("over-mij"),
        },
        {
            label: "Ervaring",
            icon: "pi pi-envelope",
            command: () => handleScroll("ervaring"),
        },
        {
            label: "Contact",
            icon: "pi pi-envelope",
            command: () => handleScroll("contact"),
        },
    ];

    return (
        <div className="card">
            <Menubar className={styles.navbarStyle} model={items} />
        </div>
    );
}