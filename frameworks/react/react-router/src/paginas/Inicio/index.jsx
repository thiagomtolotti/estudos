import styles from './inicio.module.css'
import PostCard from "src/componentes/PostCard"

import posts from 'src/json/posts.json'

function Inicio(){
return (
	<ul className={styles.posts}>
		{posts.map( post => (
			<li key={post.id}>
				<PostCard post={post}/>
			</li>
		))}
	</ul>
    )
}

export default Inicio