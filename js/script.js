const buttonCommentsElem = document.querySelector('.button__send');
const inputCommentsElem = document.querySelector('.input__comments');
const comentBlockElem = document.querySelector(".coment__block")
const inputBlockElem = document.querySelector(".input__block")

buttonCommentsElem.addEventListener('click', inputComments)

function inputComments (){

    fetch ("https://randomuser.me/api/")
        .then(function (x) {
            return x.json()
        })
        .then(function (response) {
            const firstName = response.results[0].name.first
            const lastName = response.results[0].name.last
            const pictureName = response.results[0].picture.large

            tupoeGovno(firstName, lastName  , pictureName)
        })

function tupoeGovno(fn, ln, pn) {
    

    const newElem = document.createElement("div");

    newElem.className = "comment__block"

    newElem.innerHTML = `
        <div class = 'avatar__block'>
            <img class="avatar" src="${pn}" alt="">
        </div>
        <div class="comment__block-text">
            <div class="padding">
                <div class="header__block">
                    <div class="block__name">${fn} ${ln}</div>
                    <div class="burger">
                        <div class="burger__block"></div>
                        <div class="burger__block"></div>
                        <div class="burger__block"></div>
                    </div>
                </div>
                <div class="block__text">${inputCommentsElem.value}</div>
                <div class="estimation">
                    <div class="like"><span>${ Math.ceil(Math.random() * 1000) }</span> Like <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4.66667 14.6667H2.66667C2.31305 14.6667 1.97391 14.5262 1.72386 14.2761C1.47381 14.0261 1.33334 13.687 1.33334 13.3333V8.66667C1.33334 8.31305 1.47381 7.97391 1.72386 7.72386C1.97391 7.47381 2.31305 7.33334 2.66667 7.33334H4.66667M9.33334 6V3.33334C9.33334 2.8029 9.12262 2.2942 8.74755 1.91912C8.37248 1.54405 7.86377 1.33334 7.33334 1.33334L4.66667 7.33334V14.6667H12.1867C12.5082 14.6703 12.8203 14.5576 13.0653 14.3493C13.3103 14.1411 13.4718 13.8513 13.52 13.5333L14.44 7.53334C14.469 7.34224 14.4561 7.14712 14.4022 6.9615C14.3483 6.77588 14.2547 6.6042 14.1279 6.45835C14.0011 6.31249 13.8441 6.19596 13.6677 6.11681C13.4914 6.03767 13.2999 5.99781 13.1067 6H9.33334Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></button></div>
                    <div class="dislike"><span>${ Math.ceil(Math.random() * 1000) }</span> Dislike <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M11.3333 1.33333H13.3333C13.687 1.33333 14.0261 1.47381 14.2761 1.72386C14.5262 1.97391 14.6667 2.31305 14.6667 2.66667V7.33333C14.6667 7.68696 14.5262 8.02609 14.2761 8.27614C14.0261 8.52619 13.687 8.66667 13.3333 8.66667H11.3333M6.66667 10V12.6667C6.66667 13.1971 6.87738 13.7058 7.25245 14.0809C7.62752 14.456 8.13623 14.6667 8.66667 14.6667L11.3333 8.66667L11.3333 1.33333L3.81333 1.33333C3.49178 1.3297 3.17975 1.4424 2.93473 1.65066C2.68971 1.85893 2.52821 2.14873 2.48 2.46667L1.56 8.46667C1.53099 8.65776 1.54388 8.85288 1.59777 9.0385C1.65166 9.22412 1.74526 9.3958 1.87209 9.54166C1.99892 9.68751 2.15595 9.80405 2.33228 9.88319C2.50862 9.96233 2.70006 10.0022 2.89333 10L6.66667 10Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></button></div>
                </div>
            </div>
        </div>
    `
    inputCommentsElem.value = ""

    let dislikeElem = newElem.querySelector(".dislike span")
    let likeElem = newElem.querySelector(".like span")
    const btnLikeElem = newElem.querySelector(".like button")
    const btnDislikeElem = newElem.querySelector(".dislike button")
    const blockLikeElem = newElem.querySelector(".like svg")
    const blockDislikeElem = newElem.querySelector(".dislike svg")

    let currentSent = "none"
    
    btnLikeElem.addEventListener("click", function() {
        if (currentSent == "none"){
            likeElem.innerText = Number(likeElem.innerText) + 1
            blockLikeElem.classList.add('active')
            currentSent = "like"
        } else if (currentSent == "like"){
            likeElem.innerText = Number(likeElem.innerText) - 1
            blockLikeElem.classList.remove('active')
            currentSent = "none"
        } else if (currentSent == "dislike"){
            dislikeElem.innerText = Number(dislikeElem.innerText) - 1
            blockDislikeElem.classList.remove('active')
            likeElem.innerText = Number(likeElem.innerText) + 1
            blockLikeElem.classList.add('active')
            currentSent = "like"
        }
    })
    
    btnDislikeElem.addEventListener("click", function() {
        if (currentSent == "none"){
            dislikeElem.innerText = Number(dislikeElem.innerText) + 1
            blockDislikeElem.classList.add('active')
            currentSent = "dislike"
        } else if (currentSent == "dislike"){
            dislikeElem.innerText = Number(dislikeElem.innerText) - 1
            blockDislikeElem.classList.remove('active')
            currentSent = "none"
        } else if (currentSent == "like"){
            likeElem.innerText = Number(likeElem.innerText) - 1
            blockLikeElem.classList.remove('active')
            dislikeElem.innerText = Number(dislikeElem.innerText) + 1
            blockDislikeElem.classList.add('active')
            currentSent = "dislike"
        }

    })


    inputBlockElem.before(newElem)
}}

