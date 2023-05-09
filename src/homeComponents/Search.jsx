// import { useState } from "react";

// export default function Search() {
//   const [searchCity, setSearchCity] = useState("");
//   const [searchResult, setSearchResult] = useState();

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         `https://bundo-bp.web.app/docks${searchCity}`
//       );
//       const data = await response.json;
//       setSearchResult(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <div>
//       <h2>Find BÜNDOCK</h2>
//       <form>
//         <input 
//         type="text" 
//         placeholder="Enter City" 
//         value={searchCity}
//         onChange={(e) => setSearchCity(e.target.value)}/>
//       </form>
//       <button onClick={handleSearch}>Search</button>
//       {searchResult && }
//     </div>
//   );
// }
