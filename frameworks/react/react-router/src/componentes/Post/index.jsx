import { useParams, Routes, Route } from "react-router-dom"

import posts from 'src/json/posts.json'
import PostModelo from "../PostModelo"

import ReactMarkdown from 'react-markdown'
import './Post.css'
import NaoEncontrado from "src/paginas/NaoEncontrado/index"
import PaginaPadrao from "../PaginaPadrao/index"
import PostCard from "../PostCard/index"

const Post = () => {
	const params = useParams()

	const post = posts.find(post => Number(post.id) === Number(params.id))

	if(!post) return <NaoEncontrado />

	return(
		<Routes>
			<Route path="*" element={<PaginaPadrao />}>
				<Route index element ={
					<PostModelo
						FotoCapa={`/assets/posts/${post.id}/capa.png`}
						titulo={post.titulo}
					>
						<div className="post-markdown-container">
							<ReactMarkdown>
								{post.texto}
							</ReactMarkdown>
						</div>

						<h2>Outros posts que você pode gostar:</h2>
						<div style={{display : 'flex', justifyContent:'space-between'}}>
							{	
								posts.filter(postRecomendado => postRecomendado.id !== post.id).slice(3).map(postRecomendado => 
									<PostCard 
										key={postRecomendado.id}
										post={postRecomendado}
									/>
								)
							}
						</div>
					</PostModelo>
				} />
			</Route>
		</Routes>
	)
}

export default Post