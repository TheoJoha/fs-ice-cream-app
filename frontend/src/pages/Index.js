import { Form, Link, useLoaderData } from "react-router-dom"

function Index (props) {
  const icecreams = useLoaderData()

    return (
      <>
      <div className="create">
        <Form action="/create" method="post">
          <input type="input" name="name" placeholder="Ice Cream Name" />
          <input type="input" name="description" placeholder="Ice Cream Description" />
          <input type="input" name="image" placeholder="Ice Cream Image URL" />
          <input type="submit" value="Create Ice Cream" />
        </Form>
      </div>
      <div className="icecream-list">
        {icecreams.map(icecream =>(
          <div key={icecream.id} className="icecream">
            <Link to={`/${icecream.id}`}>
              <h2>{icecream.name}</h2>
            </Link>
            <p>{icecream.description}</p>
            <img src={icecream.image} alt={icecream.name} />
          </div>
        ))}
      </div>
      </>
    )
  }
  
  export default Index