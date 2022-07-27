import './Skills.scss';

export default function Skills(){
    return(
        <div className="skills">

            <div className='title_line'>
                <div className="skill_title">
                    <p className="skill_title_text">Skills</p>
                </div>
                <div className='black_line'></div>
            </div>

            <div className='skill_lists'>

                <div> 
                    <div className='skill_title_flex'>
                        <p className='skill_title'>HTML/HTML5</p>
                        <p className='skill_percent'>95%</p>
                    </div>
                    <div className='progress_bar'>
                        <div className='progress_bar_html_value'></div>
                    </div>
                </div>

                <div>
                    <div className='skill_title_flex'>
                        <p className='skill_title'>CSS/CSS3</p>
                        <p className='skill_percent'>90%</p>
                    </div>
                    <div className='progress_bar'>
                        <div className='progress_bar_css_value'></div>
                    </div>
                </div>

                <div>
                    <div className='skill_title_flex'>
                        <p className='skill_title'>SASS/SCSS</p>
                        <p className='skill_percent'>80%</p>
                    </div>
                    <div className='progress_bar'>
                        <div className='progress_bar_sass_value'></div>
                    </div>
                </div>

                <div>
                    <div className='skill_title_flex'>
                        <p className='skill_title'>Javascript</p>
                        <p className='skill_percent'>70%</p>
                    </div>
                    <div className='progress_bar'>
                        <div className='progress_bar_js_value'></div>
                    </div>
                </div>

                <div>
                    <div className='skill_title_flex'>
                        <p className='skill_title'>React/Redux</p>
                        <p className='skill_percent'>75%</p>
                    </div>
                    <div className='progress_bar'>
                        <div className='progress_bar_react_value'></div>
                    </div>
                </div>

                <div>
                    <div className='skill_title_flex'>
                        <p className='skill_title'>Git/Github</p>
                        <p className='skill_percent'>75%</p>
                    </div>
                    <div className='progress_bar'>
                        <div className='progress_bar_git_value'></div>
                    </div>
                </div>


            </div>
        </div>
    )
}