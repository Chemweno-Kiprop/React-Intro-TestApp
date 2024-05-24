import profilePic from './assets/Profile.jpg'
function Card(){
    return(
        <div className="card">
          <img  className="cardImage" src={profilePic} alt="This is a profile picture"></img>
          <h2 className='cardTitle'>Chemweno</h2>
          <p className='cardText'>I am learning web development and design logos</p>
        
        </div>
    )

}
export default Card