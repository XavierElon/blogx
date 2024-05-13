import axios from 'axios'

const url = 'https://66422e943d66a67b34368bcb.mockapi.io/transactions/user1'

const getTransactions = async () => {
  const arr = []
  axios
    .get(url)
    .then((response) => {
      console.log(response.data)
      response.data.map((item) => {
        const amountStripped = item.amount.replace('$', '')
        const amount = parseFloat(amountStripped)
        console.log(amount)
        const exists = checkIfIdExists(arr, item.userId)
        if (exists !== -1) {
          arr[exists][1] += amount
        } else {
          arr.push([item.userId, amount])
        }
      })

      arr.forEach((item) => (item[1] = Math.floor(item[1])))
      arr.sort((a, b) => a[0] - b[0])
      console.log(arr)
    })
    .catch((error) => {
      console.error(error)
    })
}

const checkIfIdExists = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === id) {
      return i
    }
  }
  return -1
}

getTransactions()
