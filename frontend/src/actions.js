import { redirect } from "react-router-dom";

const URL = "http://localhost:4000"

export const createAction = async ({ request }) => {
    // get data from form
    const formData = await request.formData()

    // set up our new ice cream to match schema
    const newIceCream = {
        name: formData.get("name"),
        description: formData.get("description"),
        image: formData.get("image"),
    }

    // send new ice cream to API
    await fetch(URL + "/icecreams", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newIceCream),
    })
    // redirect to index
    return redirect("/")

}

export const updateAction = async ({ request, params }) => {

    // get data from form
    const formData = await request.formData()

    // set up our new ice cream to match schema
    const updatedIceCream = {
        name: formData.get("name"),
        image: formData.get("image"),
        description: formData.get("description")
    }

    // Send new ice cream to our API
    await fetch(URL + "/icecreams/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedIceCream)
    })
    // redirect to index
    return redirect("/")
}

export const deleteAction = async ({ params }) => {
    // Send delete request to our API
    await fetch(URL + "/icecreams/" + params.id, {
        method: "delete"
    })
    // redirect to index
    return redirect("/")
}