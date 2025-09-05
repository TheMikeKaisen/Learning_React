
function App() {

  return (
    <div style={{background: "#dfe6e9", height:"100vh"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
       <div>
         <div>

        <br />
        <PostComponent />
        </div>
        <div>

        <br />
        <PostComponent />
        </div>
        <div>

        <br />
        <PostComponent />
        </div>
        
       </div>
      </div>
    </div>
  )
}

let componentStyle = {
  width: 350,
  height: 150,
  backgroundColor: "white",
  borderRadius: 20,
  borderColor: "gray",
  borderWidth: 1,
  justifyContent: "center"
}

let imageUrl = "https://imgs.search.brave.com/dw7vYRP_kzI5JUtslZA0a42utiIh6VORT1VD-AeJHZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzIwLzY1LzM4/LzM2MF9GXzIyMDY1/MzgzNl90enZnbUlS/TUUwUGpnYzRkUHhv/MUU4enF2bGp6aHZH/Ui5qcGc"
function PostComponent(){
  return (
    <div style={componentStyle}>
      {/* // section 1 */}
      <div style={{display:"flex"}}>
        {/* Image */}
        <div>
          <img src={imageUrl} 
            style={{
              width:150,
              height:100,
              borderRadius:100
            }}
          /> 
        </div>

        {/* // details */}
        <div>
          <div><b>Karthik H Nair</b></div>
          <div>23000 followers</div>
          <div>12m</div>
        </div>
      </div>

      {/* Section 2 */}
      <div>
        <b>One Stop repository to learn typescript is here!</b>
        
      </div>

    </div>
  )
}

export default App
