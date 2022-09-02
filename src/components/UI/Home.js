import React from 'react'
import classes from "./Home.module.css"

export default function Home() {
  const goToRecipes = () => {
    //to connect recipes function
  }
  return (
    <div className={classes.home}>
    <p className={classes.homeText}>LOREN IPSUM IS<br/>
    SIMPLE DUMMY<br/>
    TEXT OF THE<br/>
    PRINTING</p>
    <button className={classes.recipeBtn} onClick={goToRecipes}>SEE RECIPES</button>
    </div>
  )
}
