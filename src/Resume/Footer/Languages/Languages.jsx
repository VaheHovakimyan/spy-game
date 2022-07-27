import './Languages.scss';

export default function Languages(){
    return(
        <div className="languages">

            <div className='title_line'>
                <div className="language_title">
                    <p className="language_title_text">Languages</p>
                </div>
                <div className='black_line'></div>
            </div>

            <div className='languages_list'>

                <div className='language_div'>
                    <p className='language_text'>Armenian</p>
                </div>

                <div className='language_div'>
                    <p className='language_text'>Russian</p>
                </div>

                <div className='language_div'>
                    <p className='language_text'>English</p>
                </div>
            </div>
        </div>
    )
}