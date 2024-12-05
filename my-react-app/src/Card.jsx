import profilePic from './assets/Valorant-Jett.png'

function Card () {
    return(
        <div className="card">
            <img src={profilePic} alt="Profile Photo" className='card-image' />
            <h2 className='card-title'>Jett</h2>
            <p className='card-text'>Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.</p>
        </div>
    )
}

export default Card
