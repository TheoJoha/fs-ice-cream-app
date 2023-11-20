const URL = "http://localhost:3000"

export const iceCreamsLoader = async () => {
    const response = await fetch(URL + "/icecreams")
    const icecreams = await response.json()
    return icecreams
  }

export const iceCreamLoader = async ({ params }) => {
    const response = await fetch(URL + "/icecreams/" + params.id)
    const icecream = await response.json()
    return icecream
}