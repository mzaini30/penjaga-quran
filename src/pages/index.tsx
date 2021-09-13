import React from 'react'
import "./index.pcss"
import {Link} from "react-router-dom"
import "./ngaji"

function Menu(){
	interface Menunya {
		judul: string
		link: string
	}

	const menunya: Array<Menunya> = [
		{judul: "Ngaji", link: "ngaji"}
	]

	return <>{menunya.map(x => <Link to={`/${x.link}`}>{x.judul}</Link>)}</>
}

export default function(){
	document.title = 'Penjaga Quran'

	return <div id='index'>
		<div className="text-center">
			<h1>Penjaga Quran</h1>
			<h2>ولقد يسرنا القرآن للذكر فهل من مدكر</h2>
		</div>
		<div className="menu">
			<Menu/>
		</div>
	</div>
}
