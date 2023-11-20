import { Form, useLoaderData } from "react-router-dom"

function Show(props) {

  const iceCream = useLoaderData()

    return (
      <div className="show">
        <h2>{iceCream.name}</h2>
        <p>{iceCream.description}</p>
        <img src={iceCream.image} alt={iceCream.name} />

        <h2>Updtae {iceCream.name}</h2>
        <Form action={`/update/${iceCream._id}`} method="post">
          <input type="input" name="name" placeholder="Ice Cream Name" defaultValue={iceCream.name}/>
          <input type="input" name="description" placeholder="Ice Cream Description" defaultValue={iceCream.description}/>
          <input type="input" name="image" placeholder="Ice Cream Image URL" defaultValue={iceCream.image}/>
          <input type="submit" value={`update ${iceCream.name}`} />
        </Form>

        <h2>Delete {iceCream.name}</h2>
        <Form action={`/delete/${iceCream._id}`} method="post">
        <input type="submit" value={`delete ${iceCream.name}`} />
        </Form>
      </div>
    )
  }
  
  export default Show