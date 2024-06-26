const form = document.querySelector('form')
const body = document.querySelector('body')

form.addEventListener("submit",function (e){
e.preventDefault()

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')
if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
} else if(weight === '' || weight < 0 || isNaN(weight)){
results.innerHTML = `Please give a valid weight ${weight}`
} else{
    const bmi = (weight /((height * height )/10000)).toFixed(2)
    // if(bmi < 18.9){
    //     results.innerHTML = `You are under weight ${bmi}`
    // } else if ( bmi >= 18.9 && bmi <= 24.9){
    //     results.innerHTML = `You are normal ${bmi}`
    // } else{
    //     results.innerHTML = `Your are out of control ${bmi}`
    // }
    
    switch(true){
        case (bmi < 18.9):
            results.innerHTML = ` ${bmi} <br/>You are under weight`
            break;
            case(bmi >= 18.6 && bmi <= 24.9) :
            results.innerHTML = ` ${bmi} <br/> You are normal`
            break;
            default:
                results.innerHTML = `${bmi} <br/> Your are out of control `
    }
    
}
})