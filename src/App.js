import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getRecipeData } from "./store/recipes-actions";
import ListOfRecipes from "./components/Recipes/ListOfRecipes";

import Content from "./components/UI/Content";
import Navbar from "./components/UI/Navbar";
import Home from "./components/UI/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Home />
      {/* <Content /> */}
      {/* <ListOfRecipes /> */}
    </>
  );
}

export default App;
