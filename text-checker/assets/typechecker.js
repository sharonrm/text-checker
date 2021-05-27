

const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const leadingTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output")

const colorTags = document.querySelectorAll("div.colors div")
const body = document.body
console.log(colorTags)







sentenceTag.addEventListener('keyup', (e) => {

    if(sentenceTag.value) {
        outputTag.value = sentenceTag.value
    } else {
        outputTag.value = originalText
    }
    
})

outputTag.addEventListener('keyup', () => {
    if(outputTag.value) {
        sentenceTag.value = outputTag.value
    } else {
        outputTag.value = originalText
        sentenceTag.value = ""
    }
    
})

//When I change the slider, I want to update the text next to it and 
//increase the font-size
typesizeTag.addEventListener('input', () => {
    outputTag.style.fontSize = typesizeTag.value + 'px'
    typesizeOutput.innerHTML = typesizeTag.value + 'pixels'
})

//When I change the slider, I want to update the text and increase the line-height
leadingTag.addEventListener('input', () => {
    outputTag.style.lineHeight = leadingTag.value
    lineheightOutput.innerHTML = leadingTag.value
})

//when I change the italic checkbox, update the font style to normal or italic if it's checked
//or not
italicTag.addEventListener("change", () => {
    if (italicTag.checked) {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})

//when I change my select for typeface, update the font-family
typefaceTag.addEventListener('input', () => {

    outputTag.style.fontFamily = typefaceTag.value
})

//when I move the slide, the font weight will change
fontweightTag.addEventListener('input', () => {
    outputTag.style.fontWeight = fontweightTag.value
    fontweightOutput.innerHTML = fontweightTag.value
})

//go through each colorTag when you click on a div, the background and font color will change to the same style 
//as the div.
colorTags.forEach(tag => {
    tag.addEventListener("click", () => {
        outputTag.style.backgroundColor = tag.style.backgroundColor
        outputTag.style.color = tag.style.color
    })
})

