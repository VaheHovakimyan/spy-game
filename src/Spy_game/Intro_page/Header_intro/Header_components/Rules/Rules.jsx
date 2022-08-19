import Close from '../../../Intro_page_icons_and_image/Close.png';
import '../../Header_intro.scss';
import './Rules.scss';

export default function Rules_comp({ showRules,setShowRules,lang }) {


    return (
        <>
            <div className={showRules ? "info" : "show_info"}>

                <div className='close_div'>
                    <div className='close_div_empty'></div>
                    <div className='close_button' onClick={(evt) => {
                        evt.preventDefault();
                        setShowRules(!showRules);
                    }}><img src={Close} alt="Close_icon" className='close_icon' /></div>
                </div>


                <div className='rules_div'>
                    <h3 className='rules_title'> {lang === 0 ? "Ինչպե՞ս խաղալ" : lang === 1 ? "Как играть?" : "How to play?"} </h3>

                    <div className='rules_text'>
                        {lang === 0 ? "1. Պետք է ընտրել անհրաժեշտ լեզուն, հետո սեղմել «Խաղալ», ընտրել կատեգորիան իսկ հետո կբացվի խաղացողների, լրտեսների և ժամանակի վահանակները այդտեղից ընտրում եք անհրաժեշտ քանակը" : lang === 1 ? "1. Вам нужно выбрать нужный язык, затем нажать «Играть», выбрать категорию и далее откроются панели игроков, шпионов и времени, оттуда вы выбираете необходимое количество" : "1. You need to select the required language, then click «Play», select the category and then the players, spies and time panels will open from there you select the required amount"}
                    </div>

                    <div className='rules_text'>
                        {lang === 0 ? "2. Սեղմում ենք «Գնացինք» և բառերը սկսում ենք բացել (բոլոր սովորական մասնակիցների բառը նույն բառն է իսկ լրտեսի բառի փոխարեն լինում է «Դուք լրտես եք») հերթականությամբ առաջին մասնակիցը բացում է բառը և փոխանցում մյուսին այդպես այնքան մինչև «Բացել» կամ «Փակել» բառի փոխարեն հայտնվում է «Ժամանակ» բառը վերջին մասնակիցը սեղմում է «Ժամանակ» և սկսվում է ժամանակի հետհաշվարկը" : lang === 1 ? "2. Нажимаем «Пошли» и начинаем открывать слова по порядку (слово для всех рядовых участников одно и то же, только вместо слова шпион «Ты шпион»). Первый участник открывает слово и передает его другому пока не появится слово «Время» вместо слова «Открыть» или «Закрыть», последний участник нажимает «Время», и начинается отсчет времени" : "2. We press «Let's go» and start opening the words in order (the word of all ordinary participants is the same word, and instead of the word of spy, «You are a spy»), the first participant opens the word and passes it to the other until the word «Time» appears instead of the word «Open» or «Close», the last participant presses «Time» and time begins the countdown"}
                    </div>
                    <div className='rules_text'>
                        {lang === 0 ? "3. Խաղացողները սկսում են միմյանց հարցեր տալ որպեսզի պարզեն իրենց մեջ գտնվող լրտեսին, օրինակ՝ եթե ընտրել եք «Տեղանուն» կարող եք հարցնել ինչ կենդանիներ են ապրում այնտեղ եթե մասնակիցը սխալ է պատասխանում կարող եք քվեարկության միջոցով նրան դուրս թողնել խաղից, այդպես այնքան մինչև բոլոր լրտեսները խաղից դուրս մնան" : lang === 1 ? "3. Игроки начинают задавать друг другу вопросы, чтобы узнать в них шпиона, например, если вы выбрали «Локация» вы можете спросить, какие животные там живут, если участник ответит неправильно, вы можете проголосовать за его выбывание из игры, так пока все шпионы не выйдут из игры" : "3. Players start asking each other questions in order to find out the spy in them, for example, if you chose «Location» you can ask what animals live there, if the participant answers incorrectly, you can vote him out of the game, so until all the spies be out of the game"}
                    </div>
                    <div className='rules_text'>
                        {lang === 0 ? "Հաղթում են սովորական խաղացողները եթե գտնում են բոլոր լրտեսներին մինչ ժամանակի ավարտը" : lang === 1 ? "Обычные игроки выигрывают, если находят всех шпионов до истечения времени" : "Normal players win if they find all the spies before time runs out"}
                    </div>
                    <div className='rules_text'>
                        {lang === 0 ? "Հաղթում է(են) լրտեսը(լրտեսները) երբ նրանք գուշակում են բառը կամ ժամանակը ավարտվում է" : lang === 1 ? "Шпион(ы) побеждает, когда угадывает слово или истекает время" : "The spy(s) wins when they guess the word or time runs out"}
                    </div>
                    <div className='rules_text'>
                        {lang === 0 ? "Բարի ժամանց)" : lang === 1 ? "Хорошо тебе провести время)" : "Have a good time)"}
                    </div>
                </div>
            </div>
        </>
    )
}