import { useParams } from "react-router-dom"

import posts from 'src/json/posts.json'
import PostModelo from "../PostModelo"

const Post = () => {
	const params = useParams()

	const post = posts.find(post => Number(post.id) === Number(params.id))

	return(
		<PostModelo
			FotoCapa={`/assets/posts/${post.id}/capa.png`}
			titulo={post.titulo}
		>

		</PostModelo>
	)
}

export default Post