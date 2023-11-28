import { useEffect, useState } from "react";
import { axios } from "axios";
import { useCategory } from "../../context";

import "./Categories.css";

export const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);
    const { hotelCategory, setHotelCategory} = useCategory();

    const handleShowMoreRightClick = () => {
        setNumberOfCategoryToShow(prev => prev + 10);
    };

    const handleShowMoreLeftClick = () => {
        setNumberOfCategoryToShow(prev => prev - 10);
    };

    useEffect(() => {
        (async () => {
            try {
                const { data } = axios.get("https://breezetraveloapp.herokuapp.com/api/category");
                const categoriesToShow = data.slice(
                    numberOfCategoryToShow + 10 > data.length ? data.length - 10 : numberOfCategoryToShow,
                    numberOfCategoryToShow > data.length ? data.length : numberOfCategoryToShow + 10
                );
                setCategories(categoriesToShow);
            } catch(err){
                console.log(err);
            }
        })();
    }, [numberOfCategoryToShow]);

    const handleCategoryClick = (category) => {
        setHotelCategory(category);
    };

    return <section className="categories d-flex align-center gap cursor-pointer">
        {numberOfCategoryToShow >= 10 && (<button onClick={handleShowMoreLeftClick}>
        <span class="material-symbols-outlined">chevron_left</span>
        </button>
        )}

        {categories && categories.map(({_id, category}) => (<span className={`${category === hotelCategory ? "border-bottom" : ""}`} key={_id} onClick={() => handleCategoryClick(category)}>{category}</span>))}
        {numberOfCategoryToShow < categories.length && (<button onClick={handleShowMoreRightClick}>
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
        )}
    </section>;

}