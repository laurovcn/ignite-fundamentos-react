import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment () {
  return (
    <div className={styles.comment}>
      <img src='http://github.com/lvneto.png' alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lauro Neto</strong>
              <time title='11 de maio às 08:16h' dateTime='2023-05-11 08:16:30'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!!!</p>
        </div>

        <footer>
          <ThumbsUp />
          Aplaudir
          <span>20</span>
        </footer>

      </div>
    </div>
  )
}