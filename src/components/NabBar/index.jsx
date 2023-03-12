import CartWidget from "../CartWidget"
import styles from "./navbar.module.scss"

const NavBar = () => {
    return (
        <>
        <nav className={styles.container_nav}>
            <a href="https://www.youtube.com/watch?v=xm3YgoEiEDc&t=8s" target={"_blank"}>Home</a>
            <a href="https://www.youtube.com/watch?v=xm3YgoEiEDc&t=8s" target={"_blank"}>Productos</a>
            <a href="https://www.youtube.com/watch?v=xm3YgoEiEDc&t=8s" target={"_blank"}>Sobre Nosotros</a>
            <a href="https://www.youtube.com/watch?v=xm3YgoEiEDc&t=8s" target={"_blank"}> Contacto</a>
            <a href=""> <CartWidget /> </a>
            
        </nav>
        </>
    )
}

export default NavBar