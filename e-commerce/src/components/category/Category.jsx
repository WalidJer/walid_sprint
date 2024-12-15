import {categories} from  "../../data/categeory";

const Category = () => {
  return (
    <div className="categories">

        {categories.map((category)=>
        <div key={category.id} className="category-item">
            <img src={category.image} alt={category.title} className="category-item-img" />
            <b className="category-item-title">{category.title}</b>
        </div>

        )}
    </div>
  )
}

export default Category



// import { useEffect, useState } from "react";

// const Category = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       const res = await fetch("/path-to-your-categories-api");
//       const data = await res.json();
//       setCategories(data); 
//     };
//     fetchCategories();
//   }, []);

//   return (
//     <div className="categories">
//       {categories.map((category) => (
//         <div key={category.id} className="category-item">
//           <img
//             src={category.image}
//             alt={category.title}
//             className="category-item-img"
//           />
//           <b className="category-item-title">{category.title}</b>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Category;

