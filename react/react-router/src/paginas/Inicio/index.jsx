import Banner from "../../componentes/Banner"
import styles from './inicio.module.css'
import Post from "src/componentes/Post"

import posts from 'src/json/posts.json'

function Inicio(){
    return (
        <main>
            <Banner />

            <ul className={styles.posts}>
				{posts.map( post => (
					<li key={post.id}>
						<Post post={post}/>
					</li>
				))}
			</ul>
        </main>
    )
}

export default Inicio