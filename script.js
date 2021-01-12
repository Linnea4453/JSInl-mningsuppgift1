
// let counter = 0
// const array = []


// document.getElementById('firstname').addEventListener('keyup', (e) => {
//     if(e.target.value.length < 4) {
//         document.getElementById('results').innerText = e.target.id + ' uppfyller inte kravet'
//         document.getElementById('add_btn').disabled = true
//     }
//     else{
//     document.getElementById('results').innerText = ''
//     document.getElementById('add_btn').disabled = false
//     }
// })

// document.getElementById('add_btn').addEventListener('click', () => {
//     let element = document.getElementById('input')

// array.push(element.value)
// element.value= ''
// console.log(array)
// } ) 

// document.getElementById('remove_btn').addEventListener('click', () => {
//     array.pop()
//     console.log(array)
//     } ) 



// document.getElementById('firstname').addEventListener('keyup', (e) => {
//     validateInputLength(e)
// } )
// document.getElementById('lastname').addEventListener('keyup', (e) => {
//     validateInputLength(e)
// } )
let inputs = document.getElementsByTagName('input')

for(let input of inputs) { 
    input.addEventListener('keyup', (e) => {
        if(e.target.value.length < 4) {
            document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
            document.getElementById('add_btn').disabled = true
        }
        else{
            document.getElementById(`${e.target.id}-error`).innerText = ''
            document.getElementById('add_btn').disabled = false
        }
        console.log
    })
}

// function validateInputLength(e) {
//     if(e.target.value.length < 4) {
//         document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
//         document.getElementById('add_btn').disabled = true
//     }
//     else{
//         document.getElementById(`${e.target.id}-error`).innerText = ''
//         document.getElementById('add_btn').disabled = false
//     }
// }