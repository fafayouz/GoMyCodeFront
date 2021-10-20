import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Posts.css'
import Image from './Profil.png'
import API from './../../Api/API';


const Posts = () => {
    const [cards, setCards] = useState([])
    
    
    useEffect(() => {
        API.get('/api/GetPosts').then(res => {
            setCards(res.data)
        }).catch(err => {
          console.log(err)
        })
        
      }, [])
    return (
        <>
            <div className="Posts-Container">
                {cards.slice(0).reverse().map((post) =>
                    <div className="Posts-Card">
                    <div className="Card-Image">
                        <img src={Image} alt="Image-Profil" />
                    </div>
                    <div className="Card-Name">
                        <h3> {post.name} </h3>
                    </div>
                    <div className="Card-Gender">
                        <span className="Bold">Gender : <span> {post.gender}</span></span>
                    </div>
                    <div className="Card-Birth">
                    <span className="Bold">Birth : <span> {post.birth === "" ? "/" : post.birth}</span></span>
                    </div>
                    <div className="Card-Link">
                        <div className="Link-Wiki">
                            <a href={`${post.wikiUrl}`}>wikiUrl</a>
                        </div>
                        <div className="Link-SinglePage">
                            <Link to={`/Details/${post._id}`}>Detail </Link>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}

export default Posts
