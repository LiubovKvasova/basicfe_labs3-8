import { Component } from 'react';
import kyivImg from '../../../assets/Kyiv.jpg';

const generateRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

class Content extends Component {
  constructor () {
    super();
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(event) {
    const {target} = event;
    target.style.background = generateRandomColor();
    target.style.color = generateRandomColor();
  }

  render() {
    return (
      <div>
        <p>Дата та місце народження: 10 травня 2003р. м. Дубно</p>
        <p>Освіта: <br />
          Дубенська ЗОШ I-III ст. №1; <br />
          Дубенська гімназія №2; <br />
          НТУУ "КПІ", м. Київ
        </p>
        <p>Хобі:</p>
        <ul>
          <li>Гра на фортепіано</li>
          <li>Писати картини</li>
          <li>Перегляд пізнавальних відео</li>
          <li id="first-el" onClick={this.changeColor}>Досліджувати невідомі місця</li>
        </ul>
        <p id="second-el" onClick={this.changeColor}>Улюблені фільми:</p>
        <ol>
          <li>"1+1", 2012</li>
          <li>"Щоденники принцеси", 2001</li>
          <li>"З міркувань совісті", 2016</li>
        </ol>
        <p>Київ — столиця України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у
          північній Наддніпрянщині. Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. За
          легендою «Повісті врем'янних літ», Київ було засновано легендарним полянським князем Києм разом із братами Щеком і
          Хоривом, і сестрою Либідь. Літопис не має дати заснування міста. Археологічні та писемні джерела свідчать, що Київ
          розвинувся на основі язичницького поселення кінця 5—початку 6 століття.</p>
        <a href="https://uk.wikipedia.org/wiki/%D0%9A%D0%B8%D1%97%D0%B2" target="_blank" rel="noreferrer">
          <img src={kyivImg} alt="Місто Київ" width="400" />
        </a>
      
      </div> 
    );
  }
}
  
export default Content;