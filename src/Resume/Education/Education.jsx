import './Education.scss';

export default function Education(){
    return(
        <div className="education">

            <div className='title_line'>
                <div className="education_title">
                    <p className="education_title_text">Education</p>
                </div>
                <div className='black_line'></div>
            </div>

            <div className='education_lists'>

                <div className='education_polytech'>
                    <div className="name_and_date">
                        <p className='name_and_date_text'>National Polytechnic University of Armenia</p>
                        <p className='name_and_date_text'>2021-2025</p>
                    </div>
                    <p className='education_degree'>Bachelor</p>
                </div>

                <div className='education_Numfive'>
                    <div className="name_and_date">
                        <p className='name_and_date_text'>Vagharshapat secondary school N5 Gorky</p>
                        <p className='name_and_date_text'>2018-2021</p>
                    </div>
                    <p className='education_degree'>Pupile</p>
                </div>

                <div className='education_Numfour'>
                    <div className="name_and_date">
                        <p className='name_and_date_text'>Vagharshapat basic school N4 Kh. Abovyan</p>
                        <p className='name_and_date_text'>2009-2018</p>
                    </div>
                    <p className='education_degree'>Pupile</p>
                </div>

            </div>
        </div>
    )
}