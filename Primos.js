//Weslley Balbino dos Santos - 2024100565
//Java Script
//Turma 963R

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function findLargestPrimes() {
    const userNumber = parseInt(prompt("Digite um número: "));
    
    if (isNaN(userNumber)) {
        console.log("Por favor, insira um número válido.");
        return;
    }
    
    if (!isPrime(userNumber)) {
        console.log(userNumber + " não é um número primo.");
        return;
    }

    const primes = [];
    let count = 0;
    let num = userNumber;

    while (count < 10) {
        if (isPrime(num)) {
            primes.push(num);
            count++;
        }
        num++;
    }

    console.log("Os 10 maiores números primos a partir de " + userNumber + " são:");
    console.log(primes.join(", "));
}

findLargestPrimes();
