
import styles from "./styles.module.css"

const ButtonLoader = () =>  {
  return(
    <div className="w-full h-full flex justify-center items-center">
      <span className={styles.loader}></span>
    </div>
  )
}

export {ButtonLoader};