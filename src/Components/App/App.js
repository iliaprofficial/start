import './App.css';
import {useState} from "react";
import Gadget from "../Gadget/Gadget";

const App = () => {
    const [gadget, setGadget] = useState('phone')

    const openPhone = () => {
        setGadget('phone')
    }

    const openPC = () => {
        setGadget('pc')
    }

    const openTV = () => {
        setGadget('tv')
    }

    return (
        <div className="App">
            <div className="AppShow">
                <div className={`AppShowGadget ${gadget}`}>
                    <Gadget gadget={gadget}/>
                </div>
            </div>
            <div className="AppBar">
                <img onClick={openPhone} className="AppBarIcon"
                     src={`https://img.icons8.com/windows/32/${gadget === 'phone' ? 'ff' : '00'}0000/phone.png`}/>
                <img onClick={openPC} className="AppBarIcon"
                     src={`https://img.icons8.com/windows/32/${gadget === 'pc' ? 'ff' : '00'}0000/laptop.png`}/>
                <img onClick={openTV} className="AppBarIcon"
                     src={`https://img.icons8.com/windows/32/${gadget === 'tv' ? 'ff' : '00'}0000/tv.png`}/>
            </div>
            <div className="AppDesc">
                <div className={`AppDescContent ${gadget}`}>
                    <div className="AppDescContentPhone">
                        <ul>
                            <li>
                            <span>
                                ПОИСК
                                <p>Кнопка поиска расположена в правом нижнем углу, а поле ввода по умолчанию скрыто</p>
                            </span>
                            </li>
                            <li>
                            <span>
                                ВЕРТИКАЛЬНЫЙ КОНТЕНТ
                                <p>Красная иконка с телефоном означает, что данный контент адаптирован для просмотра на телефоне в вертикальном положении</p>
                            </span>
                            </li>
                        </ul>
                    </div>
                    <div className="AppDescContentPc">
                        <ul>
                            <li>
                                <span>
                                    ПОИСК
                                    <p>Строка поиска расположена сверху, это даёт возможность быстро перейти к поиску фильмов и сериалов</p>
                                </span>
                            </li>
                            <li>
                                <span>
                                    КОНТЕНТ ПО НАСТРОЕНИЮ
                                    <p>Иконки с названиями настроений означают, что по клику на них сразу откроется максимально подходящий вам фильм или сериал, соответствующий выбранному вами настроению</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="AppDescContentTv">
                        <ul>
                            <li>
                                <span>
                                    УПРАВЛЕНИЕ ГОЛОСОМ
                                    <p>На телевизорах всё управление интерфейсом осуществляется с помощью голоса</p>
                                </span>
                            </li>
                            <li>
                                <span>
                                    НУМЕРАЦИЯ КОНТЕНТА
                                    <p>Иконки с номерами фильмов дают возможность включить фильм, не произнося его названия. Например, вы можете просто сказать: "Включи третий фильм"</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
