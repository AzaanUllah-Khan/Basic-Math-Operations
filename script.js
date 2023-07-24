const res = document.getElementById('res')
const input = document.getElementById('number')
function add() {
    res.style.height = "auto"
    res.innerHTML = ''
    Swal.fire({
        title: 'Enter Number To Add With',
        input: 'number',
        confirmButtonText: 'Add',
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            res.innerHTML =+ input.value + (+ result.value)
        }
    })
}
function sub() {
    res.style.height = "auto"
    res.innerHTML = ''
    Swal.fire({
        title: 'Enter Number To Subtract With',
        input: 'number',
        confirmButtonText: 'Subtract',
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            res.innerHTML = `<p>${input.value - (+ result.value)}</p>`
        }
    })
}
function mul() {
    res.style.height = "auto"
    res.innerHTML = ''
    Swal.fire({
        title: 'Enter Number To Multiply With',
        input: 'number',
        confirmButtonText: 'Multiply',
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            res.innerHTML = `<p>${input.value * (+ result.value)}</p>`
        }
    })
}
function div() {
    res.style.height = "auto"
    res.innerHTML = ''
    Swal.fire({
        title: 'Enter Number To Divide With',
        input: 'number',
        confirmButtonText: 'Divide',
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            res.innerHTML = `<p>${input.value / (+ result.value)}</p>`
        }
    })
}

function fac() {
    res.style.height = "auto"
    res.innerHTML = ''
    for (i = 1; i <= input.value; i++) {
        if (input.value % i == 0) {
            res.innerHTML += `<p>${i}</p>`
        }
    }
}

function sqr(){
    res.style.height = "auto"
    res.innerHTML = ''
    res.innerHTML = `<p></p>${input.value*input.value}`
}
function sqrR(){
    res.style.height = "auto"
    res.innerHTML = ''
    res.innerHTML = `<p>${Math.sqrt(input.value)}`
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