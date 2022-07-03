import React,{useState,useEffect} from 'react'

function Card() {
  
  const [user,setUser] = useState([]);

  const fetchData = ()=>{
    fetch("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0e18886c150602cc9925a14586c7a549&hash=27d312585cb5f51e91b447e3d155a4d7").then((response)=>{
      return response.json();
    }).then((data)=>{
      let users = data.data.results;
      setUser(users);

      console.log(users);
    })
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
  <>
    <h2>Marvel Charcters List:-</h2>
      <div class="row row-cols-4 md-4 g-4">
      {  user.map((person,key)=>(
        <div class="col">
          <div class="card">
            <img src={person.thumbnail.path + "/portrait_xlarge." +person.thumbnail.extension} className="card-img-top"></img>
            <div class="card-body">
              <h5 class="card-title">{person.name}</h5>
              
            </div>
          </div>
        </div>
        ))
      }
      </div>

  </>
  )
}

export default Card