// export default function Navbar(obj){ // here we pass props we know that this props is object
//     return (
//         <div>
//             <h1>{obj.name}</h1>
//             <h1>{obj.city}</h1>
//             <h1>{obj.num}</h1>
//         </div>
//     );
// }


import './Component.css'
export default function Navbar({ name, city, num }) {
  // object destructuring
  return (
    <div className="nav">
      <h1>{name}</h1>
      <h1>{city}</h1>
      <h1>{num}</h1>
    </div>
  );
}
