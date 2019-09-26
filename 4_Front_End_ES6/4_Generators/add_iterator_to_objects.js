
// Transformando um objeto em iteravel , adicionando o método [Symbol.iterator]


const obj = {
    values: [1,2,3,4],
    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                index++;
                return {
                    value: this.values[index -1],
                    done: index > this.values.length
                }
            }
        }

    }
}



const it = obj[Symbol.iterator]();

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (let value of obj) {
    console.log(value)
}

const arr2 = [...obj]
console.log(arr2)