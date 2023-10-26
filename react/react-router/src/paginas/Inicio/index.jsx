import styles from './inicio.module.css'
import Post from "src/componentes/Post"

import posts from 'src/json/posts.json'

function Inicio(){
    return (
		<ul className={styles.posts}>
			{posts.map( post => (
				<li key={post.id}>
					<Post post={post}/>
				</li>
			))}
		</ul>
    )
}

export default Inicio