import useFetch from "../hooks/useFetch";

export default function CategoriesList(){
    const {data: categories} = useFetch("https://gist.githubusercontent.com/RainydeVille/18ed79f8abbdddfe82cdf8e176dad45f/raw/8bb6bddbe41802cd59b158c95cadde36ef219805/categories.json");
    return(
        <div className="categories-list">Kategorijos</div>
    )
}