const res = document.getElementById('res')
const input = document.getElementById('number')
function add() {
    res.style.height = "auto"
    res.innerHTML = ''
    Swal.fire({
        title: `Enter Number To Add ${input.value} With`,
        input: 'number',
        confirmButtonText: 'Add',
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            res.innerHTML =+ input.value + "+" + result.value + "=" + (+ input.value + (+ result.value))
        }
    })
}
function sub() {
    res.style.height = "auto"
    res.innerHTML = ''
    Swal.fire({
        title: `Enter Number To Subtract ${input.value} With`,
        input: 'number',
        confirmButtonText: 'Subtract',
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            res.innerHTML = `<p>${input.value} - ${result.value} = ${input.value - (+ result.value)}</p>`
        }
    })
}
function mul() {
    res.style.height = "auto"
    res.innerHTML = ''
    Swal.fire({
        title: `Enter Number To Multiply ${input.value} With`,
        input: 'number',
        confirmButtonText: 'Multiply',
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            res.innerHTML = `<p>${input.value} x  ${result.value} = ${input.value * (+ result.value)}</p>`
        }
    })
}
function div() {
    res.style.height = "auto"
    res.innerHTML = ''
    Swal.fire({
        title: `Enter Number To Divide ${input.value} With`,
        input: 'number',
        confirmButtonText: 'Divide',
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            res.innerHTML = `<p>${input.value} / ${result.value} = ${(input.value / (+ result.value)).toFixed(2)}</p>`
        }
    })
}

function fac() {
    res.style.height = "auto"
    res.innerHTML = ''
    res.innerHTML = `<h1 style='font-size: 20px; margin-bottom: 10px;'>Factors of ${input.value} Are :</h1>`
    for (i = 1; i <= input.value; i++) {
        if (input.value % i == 0) {
            res.innerHTML += `<p>${i}</p>`
        }
    }
}

function sqr(){
    res.style.height = "auto"
    res.innerHTML = ''
    res.innerHTML = `<p>Square of ${input.value} is ${input.value*input.value}</p>`
}
function sqrR(){
    res.style.height = "auto"
    res.innerHTML = ''
    res.innerHTML = `<p>Square root of ${input.value} is ${(Math.sqrt(input.value)).toFixed(2)}`
}

function tab(){
    res.style.height = "auto"
    res.innerHTML = ''
    for(i=1;i<11;i++){
        res.innerHTML += `<p>${input.value} * ${i} = ${input.value * i}</p>`
    }
    res.innerHTML += `<button onclick=l()>Generate Further</button>`
}
function l(){
    res.innerHTML = ''
    res.style.overflowY = "auto"
    res.style.height = "500px"
    for(i=1;i<51;i++){
        res.innerHTML += `<p>${input.value} * ${i} = ${input.value * i}</p>`
    }
}