/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :0 :)')
// window.fetch("https://platzi-avo.vercel.app/api/avo")
//     .then(res => res.json())
//     .then(response => {
//         response.data.forEach(item => {
//             console.log(item.name);
//         });
//     })

const baseUrl = "https://platzi-avo.vercel.app"
const appNode = document.querySelector('#app')

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: 'currency',
        currency: 'USD'
    }).format(price)
    return newPrice
}

async function getItems() {
    const result = await window.fetch(`${baseUrl}/api/avo`)
    const avoList = await result.json()
    const todosLosItems = []
    avoList.data.forEach(item => {
        console.log(item.name);
        const container = document.createElement("div")
        container.className = "md:flex bg-purple-300 hover:bg-purple-500 rounded-lg p6"

        const title = document.createElement('h2')
        title.textContent = item.name
        //title.style = "font-size: 2em;"
        //title.style.fontSize = "2rem"
        title.className = "text-2md text-red-600"

        const image = document.createElement('img')
        image.src = `${baseUrl}/${item.image}`
        image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"


        const price = document.createElement('div')
        const span = document.createElement('span')
        span.textContent = formatPrice(item.price)
        price.appendChild(title)
        price.appendChild(span)
        price.className = "text-center md:text-left"

        container.append(image, price)
        todosLosItems.push(container)
    });
    appNode.append(...todosLosItems)

}

getItems()
