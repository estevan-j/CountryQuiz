import './CardResult.scss'
import Congrats from '/congrats.svg';

const CardResult = ({score, handleNewGame}) => {
  return (
    <section className="card-results">
      <img className='congrats' src={Congrats} alt='congrats' />
      <h2>Congrats! You completed the quiz.</h2>
      <div className='result'>Your answer  {score}/10 correctly</div>
      <button className="btn-new" onClick={() => handleNewGame()}>
        Play again
      </button>
    </section>
  )
}

export default CardResult
