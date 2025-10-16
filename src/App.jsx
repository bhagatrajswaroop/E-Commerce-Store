// import React, { useState } from 'react'

// function App(){
//   const [weather, setWeather] = useState(null);
//   const [input, setInput] = useState("");

//   async function handleWeather() {
//     const API_KEY = "1b543e375a6863b85bb51824844bc9f1";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`;

//     try {
//       const result = await fetch(url);
//       const response = await result.json();

//       if (response.cod === 200) {
//         setWeather(response);
//       } else {
//         alert("No city found");
//         setWeather(null);
//       }
//     } catch (error) {
//       alert("Error fetching weather data.");
//       console.error(error);
//     }
//   }
// }
//   return (
//     <div>
//       <h1>Weather App</h1>
//       <div>
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           type="text"
//           placeholder="Enter city"
//           className="input"
//         />
//         <button onClick={handleWeather} className="button">WEATHER</button>
//       </div>

//       {weather && (
//         <div className="weather-info">
//           <p><strong>City:</strong> {weather.name}</p>
//           <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
//           <p><strong>Condition:</strong> {weather.weather[0].description}</p>
//           <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
//           <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// --
// // // // import React, { useMemo, useState } from 'react'

// import { useEffect, useState } from "react"

// // import { useCallback, useState } from "react"
// // import Header from "./header"

// // // import { useMemo, useState } from "react"

// // // // function App(){
// // // //     var [count,setCount] = useState(0)
// // // //     function handleInc(){
// // // //         setCount(count+1)
// // // //     }
// // // //     function hello(){
// // // //         console.log("hello world");
// // // //     }
// // // //     var result = useMemo(()=>{return hello()},[])
// // // //     return(
// // // //         <div>
// // // //             <h1>{count}</h1>
// // // //             <button onClick={handleInc}>Inc</button>

// // // //         </div>
// // // //     )
// // // // }

// // // // export default App

// // // function App(){
// // //     var [count,setCount] = useState(0)
// // //     var [number,setNumber] = useState(0)
// // //     function handleInc(){
// // //         setCount(count+1)

// // //     }
// // //     function cubeNum(num){
// // //         console.log("calculation done");
// // //         return Math.pow(num,3)
// // //     }
// // //     var result = useMemo(()=>{return cubeNum(number)},[number])
// // //     return(
// // //         <div>
// // //             <input value={number} onChange={(e)=>{setNumber(e.target.value)}} type="number" />
// // //             <h1>{result}</h1>
// // //             <h1>{count}</h1>
// // //             <button onClick={handleInc}>Counter</button>

// // //         </div>
// // //     )
// // // }
// // // export default App

// // function App(){
// //     var [count,setCount] = useState(0)
// //     var fn = useCallback(function (){
// //         console.log("hello iam teh fn");
// //     },[])
// //     return(
// //         <div>
// //             <Header a = {fn}/>
// //             <h1>{count}</h1>
// //             <button onClick={()=>{setCount(count+1)}}>Counter</button>

// //         </div>
// //     )
// // }

// // export default App


// // function App(){
// //     var a = "helllo world"
// //     return(
// //         <div>
// //             <Header name = {a}/>

// //         </div>
// //     )
// // }

// // export default App


// function App(){
//     var [data,setData] = useState([])
//     var [cart,setCart] = useState([])
//     async function fetchData(){
//         var result = await fetch("https://fakestoreapi.com/products")
//         var response = await result.json()
//         setData(response)
//     }

//     useEffect(()=>{
//         fetchData()
//     },[])
//     function addToCart(product){
//         var exits = cart.find(item=>item.id == product.id)
//         if(exits){
//             alert("already in the cart")
//         }else{
//             setCart([...cart,product])
//         }


//     }
//     console.log(cart);
//     return(
//         <div>
//             {
//                 data.map((item)=>{
//                     return(
//                         <div>
//                             <h1>{item.title}</h1>
//                             <h2>{item.price}</h2>
//                             <img style={{height : "100px",width : "100px"}} src={item.image} alt="" />
//                             <button onClick={()=>addToCart(item)}>Add to cart</button>
//                         </div>
//                     )
//                 })
//             }
//             <h1>cart details</h1>
//             <h1>items in the{cart.length}</h1>
//             {
//                 cart && (
//                     <div>
//                         {
//                             cart.map((item)=>{
//                                 return(
//                                     <div>
//                                         <h1>{item.title}</h1>
//                                         <h2>{item.price}</h2>
//                                         <img style={{height : "100px",width : "100px"}} src={item.image} alt="" />
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                 )
//             }

//         </div>
//     )
// }

// export default App

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    async function fetchData() {
        const result = await fetch("https://fakestoreapi.com/products");
        const response = await result.json();
        setData(response);
    }

    useEffect(() => {
        fetchData();
    }, []);

    function addToCart(product) {
        const exists = cart.find(item => item.id === product.id);
        if (exists) {
            alert("Already in the cart");
        } else {
            setCart([...cart, product]);
        }
    }

    console.log(cart);

    return (
        <div className="container">
            <h1 className="heading">E-Commerce Store</h1>

            <div className="product-list">
                {data.map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.image} alt={item.title} className="product-image" />
                        <h2 className="product-title">{item.title}</h2>
                        <h3 className="product-price">${item.price}</h3>
                        <button onClick={() => addToCart(item)} className="add-to-cart-btn">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-section">
                <h2>Cart Details</h2>
                <p>Items in Cart: {cart.length}</p>
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div>
                                <h3>{item.title}</h3>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;

// import React, { useContext } from 'react'
// import { DataContext } from './App'
// function Header(){
//     var data = useContext(DataContext)
//     return(
//         <div>
//             <h1>{data}</h1>


//         </div>
//     )
// }

// export default Header;


//  function App(){
//      var message = "iam the context"


//      return(
//          <div>
//              <DataContext.Provider value={message}>
//                  <Header/>

//              </DataContext.Provider>

//          </div>
//      )
//  }

// export default App;