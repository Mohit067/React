import './App.css'
import Card from './Card'
import Mobile from './Mobile'
import data from './data.json'
function App() {

  // let Arr = [
  //   ['mohit', 'rohit', 'aman'],
  //   ['html', 'css', 'js']
  // ]

  return (
    // <h1>
    //   {/* 1st way
    //   {/* <div>
    //       {Arr.map((arr) => ( // if we dont want return use () => ()
    //         arr.map((item, index) => {
    //             return <h1 key={index}>{item}</h1>
    //           })
    //         )
    //       )}
    //   </div> */}

    //   {/* 2nd way */}
    //   {/* {Arr.map((arr) => { // if we want return use () => {}
    //     return (
    //       arr.map((item) => {
    //         return <h1>{item}</h1>
    //       })
    //     )
    //   })} */}

    //   {/* 3rd way */}
    //   {/* {Arr.map((arr, index) => { // if we want return use () => {}
    //     return (
    //       <div key={index}>
    //         {arr.map((item, index) => {
    //           return <h1 key={index}>{item}</h1>
    //         })}
    //       </div>
    //     )
    //   })}  */}

    //   {/* list renderin using in component */}
    //   {Arr.map((user, index) => {
    //     return <Card key={index} userDetails={user}/>
    //   })}

    // </h1>

    data.map((item, index) => {
        return <Mobile details={item} key={index} />
    })
  )
}

export default App
