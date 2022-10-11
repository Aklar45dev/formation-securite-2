import './App.css'

function Card(props) {

  return (
    <div className='card'>
    <button className="btn" onClick={() => props.startvideo(0)}>
        <img alt="pic" className="btn-pic" src='https://formation-video-cfpvd.s3.ca-central-1.amazonaws.com/v2/frame1.png' />
    </button>
    <h2 className="btn-title">Chapitre 1</h2>
    <p className="btn-subtitle">Le briefing</p>
    </div>
  )
}

export default Card
