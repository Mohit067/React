function App() {
  return (
    <>
      <div className="py-4 bg-gray-900 text-gray-100 p-4">
        <header className="max-w-[60rem] flex items-center justify-between text-white m-auto text-lg">
          <h1 className="text-3xl"><span className="font-bold text-cyan-400 ">B</span>rand</h1>
          <div className="flex item-center align-center gap-6 px-5 py-4 text-xl">
            <a href="#">About us</a>
            <a href="#">Read me</a>
            <a href="#">More info</a>
            <a href="#">Portfolio</a>
          </div>

          <button className="cursor-pointer border rounded-xl px-6 py-2 text-cyan-400 bg-lime-700">Join Us</button>
        </header>
      </div>

      <div className="max-w-[60rem] m-auto py-[8rem]">
          <h1 className="text-6xl py-3 text-center font-medium">
              The best way to learn <span className="bg-amber-400 border rounded-2xl m-1 px-3">DSA</span>, is please do not nothing!!!
          </h1>

          <p className="py-2 m-4 text-center font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio architecto voluptatibus, dolores accusantium saepe sequi ut, quos maxime aliquam similique eius porro odit corrupti nostrum. Sed, animi? Dolorem, architecto officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolorum quidem, suscipit at qui perspiciatis voluptate molestiae provident pariatur alias rerum autem debitis asperiores aperiam quisquam, perferendis sequi ducimus! Praesentium?
          Ipsam doloribus qui odit, laboriosam non, repudiandae praesentium nobis, placeat repellendus unde rerum ipsum repellat deleniti tempore perspiciatis delectus. Ipsam excepturi minima quae quod nihil iure, natus qui necessitatibus! Omnis.
          </p>
          <button className="flex m-auto cursor-pointer border rounded-xl px-8 py-3 mt-4 text-cyan-400 bg-lime-700">Agree</button>
        </div>
    </>
  );
}

export default App;
