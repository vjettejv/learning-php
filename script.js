var firstDiv = document.querySelector('#first-div') // select the first available h1 element

let firstRow = document.createElement('div');
let secondRow = document.createElement('div');
document.body.appendChild(firstRow);
document.body.appendChild(secondRow);


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 8; i++) {
    let title = document.createElement('span');
    title.className = 'title';
    title.style.color = 'white';
    title.style.fontSize = '24px';
    title.style.padding = '20px';
    title.style.border = '1px solid';
    title.style.backgroundColor = 'red';
    title.style.textAlign = 'center';
    title.style.display = 'inline-block';
    title.textContent = i;
    
    if (i < 5) {
        firstRow.appendChild(title);
    } else {
        secondRow.appendChild(title);
    }
    if (i % 2 == 0){
        title.style.backgroundColor = 'green';
    }
    if (isPrime(i)){
        title.style.backgroundColor = 'yellow';
    }
}