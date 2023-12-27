import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import Loading from "./loading-old";

async function FetchMeals() {
  const mealsList = await getMeals();

  return <MealsGrid meals={mealsList} />;
}

const Meals = async () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delecious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<Loading />}>
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
