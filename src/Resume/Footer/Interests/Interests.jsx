import './Interests.scss';

export default function Interests(){
    return(
        <div className="interests">

            <div className='title_line'>
                <div className="interest_title">
                    <p className="interest_title_text">Interests</p>
                </div>
                <div className='black_line'></div>
            </div>

            <div className='interest_list'>

                <div className='interest_div'>
                    <p className='interest_text'>Football</p>
                </div>

                <div className='interest_div'>
                    <p className='interest_text'>Music</p>
                </div>

                <div className='interest_div'>
                    <p className='interest_text'>Fishing</p>
                </div>

                <div className='interest_div'>
                    <p className='interest_text'>Hiking</p>
                </div>

            </div>
        </div>
    )
}