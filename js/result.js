import {results , mbtis} from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti')
const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const notionEl = document.querySelector('.notion')
const notionImgEl = document.querySelector('.notion img')

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach((boxEl, index)=>{
    boxEl.innerHTML = result.results[index]
})
jobEls.forEach((jobEl ,index)=>{
    jobEl.innerHTML=result.jobs[index]
})
notionEl.href = result.notionUrl
notionImgEl.src = result.notionImg