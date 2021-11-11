const products = [
    {
      id: 30,
      name: "Agua Con Gas 1,5 lts",
      stock: 86,
      cost: 45,
    },
    {
      id: 29,
      name: "Agua Sin Gas 1,5 lts",
      stock: 100,
      cost: 140,
    },
    {
      id: 76,
      name: "Alambrado Chardonnay 750 ml",
      stock: 92,
      cost: 575,
    }
]

let is_ok = true;

let getDatos = () => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(products)
            }, 3000)
        } else {
            reject("Error")
        }
    })
}

let fetchingData = async () => {
    try {
        const result = await getDatos();
        console.log(result);
    } catch(err) {
        console.log(err)
    }
}

fetchingData();