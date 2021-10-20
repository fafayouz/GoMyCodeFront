import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './SinglePage.css'
import ProfilImage from '../Components/Posts/Profil.png'
import { useHistory } from "react-router-dom";

import API from './../Api/API';
const SinglePage = (props) => {
    const [singleDetails, setSingleDetails] = useState({})
    const [messagevalid , setMessagevalid] = useState()
    
    useEffect(() => {
        API.get('/api/GetPosts').then(res => {
            const card= res.data.find(x => x._id === props.match.params.id)
            setSingleDetails(card)
          }).catch(err => {
            console.log(err)
          })
        
    }, [])
    console.log(singleDetails)
    let history = useHistory();
    const PostDelete = (_id) => {
        API.delete(`/api/DeletePost/${_id}`).then((res) =>{
            if(res.data.err === false) {
              setMessagevalid(res.data.message)
              setTimeout(() => {
                history.push("/");;
              }, 3000);
            }
          })
    }
    return (
        <>
            <Navbar/>
            <div className="SinglePage-Container">
            {messagevalid ? (<div className="MessageValid">
            <span> {messagevalid} we redirect to homepage after 3s .. </span>
      </div>) : (
        <>
        </>
      )}
                <div className="SinglePage-Card">
                    <div onClick={() => {
                    PostDelete(singleDetails._id);
                  }} className="Supp">
                        <h1>
                            X
                        </h1>
                    </div>
                    <div className="SinglePage-Image">
                        <img src={ProfilImage} alt="ProfilImage"/>
                    </div>
                    <div className="Single-Page-Details">
                        <h4>Birth : {singleDetails.birth}</h4>
                        <h4>Death: {singleDetails.death} </h4>
                        <h4>Gender : {singleDetails.gender}  </h4>
                        <h4>Hair : {singleDetails.hair}  </h4>
                        <h4>Height : {singleDetails.height}</h4>
                        <h4>Name : {singleDetails.name}</h4>
                        <h4>Race : {singleDetails.race}</h4>
                        <h4>realm : {singleDetails.realm}</h4>
                        <h4>spouse : {singleDetails.spouse}</h4>
                        <h4>wikiUrl : {singleDetails.wikiUrl}</h4>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePage
