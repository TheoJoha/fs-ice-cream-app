import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import App from "./App"
import { iceCreamsLoader, iceCreamLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { createAction, deleteAction, updateAction } from "./actions"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index />} loader={iceCreamsLoader}/>
      <Route path=":id" element={<Show />} loader={iceCreamLoader}/>
      <Route path=":id" element={<Show />} />
      <Route path="create" action={createAction}/>
      <Route path="update/:id" action={updateAction}/>
      <Route path="delete/:id" action={deleteAction}/>
    </Route>
  )
)

export default router