/* sample data store*/
import React from "react";
export default { 
    currentUserId: "judy",
    users:[
        {
            id:"judy",
            email:"judy@bc.edu",
            photo:"https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fuser1.png?v=1615537283783",
            name: "Judy Hopps",
            bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species.",
            
        },
        {
            id:"nick",
            email:"nick@bc.edu",
            photo:"https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fuser2.png?v=1615537289218",
            name:"Nick Wilde",
            bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."
        },

        {
            id:"flash",
            email:"flash@bc.edu",
            photo:"https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fuser3.png?v=1615537287127",
            name: "Flash Slothmore",
            bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles.",
            
        }
    ],
    followers:[
        {
            userId:"nick",
            followerId:"judy"
        },
        {
            userId:"judy",
            followerId:"nick"
        },
        {
            userId:"judy",
            followerId:"flash"
        }
    ],
    posts:[
        {   
            id:"post-1",
            userId:"judy",
            photo:"https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fpost1.png?v=1615537275632",
            desc:"#zootopia #excited",
            datetime: "2020-02-09T22:45:28Z",   

        },
        {
            id:"post-2",
            userId:"nick",
            photo:"https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fpost2.png?v=1615537293436",
            desc:"#happy #selfie with Judy",
            datetime: "2020-02-06T22:45:28Z",
        },
        {
            id:"post-3",
            userId:"flash",
            photo:"https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fpost3.png?v=1615537290888",
            desc:"Don't worry I got this",
            datetime: "2020-02-03T22:45:28Z",
        },
        {
            id:"post-4",
            userId:"judy",
            photo:"https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fpost4.png?v=1615537295352",
            desc:"Just trying to make a #friend",
            datetime: "2020-02-06T22:45:28Z",
        },
        {
            id:"post-5",
            userId:"judy",
            photo:"https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fpost5.png?v=1615537294571",
            desc:"I am now the first rabbit officer!",
            datetime: "2020-02-06T22:45:28Z",
        },
        {
            id:"post-6",
            userId:"judy",
            photo:"https://cdn.glitch.com/49490be1-7cb5-4d1a-b574-3100d317c0a2%2Fpost6.png?v=1615537285965",
            desc:"Having #goodtimes with folks here",
            datetime: "2020-02-06T22:45:28Z",
        },
    ],
    comments:[
        {
            userId:"nick",
            postId:"post-1",
            text:"Welcome to Zootopia!",
            datetime:"2020-02-09T22:51:40Z"
        },
        {
            userId:"judy",
            postId:"post-1",
            text:"Thanks!😁Looking forward to meeting you!", 
            datetime:"2020-02-09T22:52:01Z"
        },
        {
            userId:"flash",
            postId:"post-2",
            text:"Looking good you two! 🐰🦊", 
            datetime:"2020-02-09T22:54:20Z"
        }
    ],
    likes:[
        {
            userId:"judy",
            postId:"post-1",
            datetime:"2020-02-09T22:50:40Z"
        },
        {
            userId:"nick",
            postId:"post-2",
            datetime:"2020-02-09T22:51:40Z"
        },
        {
            userId:"flash",
            postId:"post-2",
            datetime:"2020-02-09T22:54:20Z"
        },
        {
            userId:"judy",
            postId:"post-3",
            datetime:"2020-02-09T22:53:40Z"
        }
    ]
}

