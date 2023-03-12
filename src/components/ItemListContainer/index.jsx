import styles from "./ItemListContainer.module.scss"

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <p className={styles.greetings}>{greeting}</p>
    </div>
  )
}

export default ItemListContainer;