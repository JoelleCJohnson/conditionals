let firstName = 'Joelle'

console.log((firstName) ? firstName : "Who are you?")

console.log(`Hello${(firstName) ? ', ' + firstName : ''}`)

function showData(data){
    console.log((data) ? data : 'Loading...')
}
let ourData = undefined
showData(ourData)

ourData = ['Apples', 'Oranges']
showData(ourData)
