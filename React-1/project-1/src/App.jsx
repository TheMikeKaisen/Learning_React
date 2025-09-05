
function App() {

  return (
    <div style={{background: "#dfe6e9", height:"100vh"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
       <div>
         <div>

        <br />
        <PostComponent 
          logoUrl={imageUrl}
          name="Karthik H" 
          subtitle="2300 followers"
          time="12m"
          description="created a typeScript repository"
        />
        </div>
        <div>

        <br />
        <PostComponent 
          logoUrl={imageUrl}
          name="Shrey" 
          subtitle="promoted"
          description="this is a promoted account"
        />
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


function PostComponent({
  logoUrl,
  name, 
  subtitle,
  time,
  description
}){
  return (
    <div style={componentStyle}>
      {/* // section 1 */}
      <div style={{display:"flex"}}>
        {/* Image */}
        <div>
          <img src={logoUrl} 
            style={{
              width:150,
              height:100,
              borderRadius:100
            }}
          /> 
        </div>

        {/* // details */}
        <div>
          <div><b>{name}</b></div>
          <div>{subtitle}</div>
          {/* CONDITIONAL RENDERING */}
          {/* If time is not provided as a prop, then the below div will not be rendered at all. */}
          {time && <div style={{display:"flex"}}>
              <div>{time}</div>
              <div>
                <img src="https://imgs.search.brave.com/P0qi_JySS7ig-IgQlWCDWI5LwYKgivJ67BXxfS-M6t4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jbG9z/ZS11cC1jbG9jay1m/YWNlLTY1Mzg2OTMu/anBn"
                style={{width:20, background: "white"}} />
              </div>
          </div>}
        </div>
      </div>

      {/* Section 2 */}
      <div>
        <b>{description}</b>
        
      </div>

    </div>
  )
}

export default App
