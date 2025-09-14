

export default function App(){
  return (
    <>
      <p className="text-2xl text-center py-4">Flex Properties</p>
      {/* Raw CSS STYLES */}
      {/* <div style={{display: "flex", justifyContent: "space-around"}}> */}
      <div className="flex justify-around">
        <p className="bg-blue-300">Hello 1</p>
        <p className="bg-red-300">Hello 2</p>
        <p className="bg-green-300">Hello 3</p>
      </div>

      {/* GRID PROPERTIES */}
      <p className="text-2xl py-4 text-center">Grid Properties</p>
      <div className=" grid grid-cols-12"> {/* Creating 12 columns  */}
        <div className="col-span-5 bg-blue-300">child1</div>
        <div className="col-span-5 bg-red-300">child2</div>
        <div className="col-span-2 bg-green-300">child3</div>

        {/* Trying to access more than grid space  */}
        <div className="col-span-13 bg-purple-300">If max grid is 12 and i try to access 20, it will only take up 12 of them.</div>



      </div>
      {/* RESPONSIVENESS */}
      <p className="text-2xl text-center py-4">Responsive</p>
      <div className="xl:bg-amber-200 md:bg-blue-300 sm:bg-red-200 bg-green-300">This text is responsive</div>

      {/* Task: to make list items one after other on large screens and one below other on small screens */}
      <div className="text-lg text-center py-4">
        Responsiveness Large vs Small Screen
      </div>
      <div className="sm:flex sm:justify-around">
        <li className="bg-green-300">list item - 1</li>
        <li className="bg-red-300">list item - 2</li>
        <li className="bg-blue-300">list item - 3</li>
      </div>
    </>
  )
}