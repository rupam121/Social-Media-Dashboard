import React from 'react'
import Card from './Card'
import '../styles/top-card-list.css'

import {generate as id} from 'shortid'

const cardListData = [
    {
        userName: '@rupamgiri121',
        followers: '4486',
        todayFollowers:12,
        icon: "images/facebook.png",
        name: 'facebook'
    },
    {
        userName: '@imrupamgiri',
        followers:'117',
        todayFollowers:-1,
        icon: "images/twitter.png",
        name: 'twitter'


    },
    {
        userName: '@im.rupam',
        followers:'1045',
        todayFollowers:3,
        icon: "images/instagram24.png",
        name: 'instagram'


    },
    {
        userName: '@imrupam121',
        followers:'120',
        todayFollowers:1,
        icon: "images/youtube.png",
        name: 'youtube'


    },
]

function TopCardList() {
    return (
        <section className="top-card">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map((cardData)=> <Card key={id} {...cardData}/>)
                }
            </div>
        </div>
</section>
    )
}

export default TopCardList