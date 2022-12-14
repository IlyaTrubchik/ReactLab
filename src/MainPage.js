import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import logo from './logo.svg';
import { LOCALES } from './i18n/locales';
import { FormattedMessage } from 'react-intl';
import { messages } from './i18n/messages';
import { IntlProvider } from 'react-intl';
import { Doers_ru } from './JS/Scripts';
import { ToggleButton,ToggleButtonGroup,Button } from 'react-bootstrap';
import './App.css'
import './index.css'

/**/
export let x = Math.floor(Math.random() * 5);
if(sessionStorage.getItem("Ident")!=null)
{
x=sessionStorage.getItem("Ident")-1;
}

console.log(x);
sessionStorage.setItem("Ident",x+1);


class OnSecondPageButton extends React.Component {
    onclick () {
      window.location.assign("/"+(x+1));
      
    }

    render() {
      return (<button onClick={(e) => this.onclick(e)}><FormattedMessage id ="gotobtn">Перейти</FormattedMessage></button>);
    }
  }
class OnListPageButton extends React.Component{
    onclick () {
        window.location.assign("/List");
        
      }
  
      render() {
        return (<button onClick={(e) => this.onclick(e)}><FormattedMessage id="ListBtn">Список Деятелей</FormattedMessage></button>);
      }
}

  

   

function MainPage() {
    
    function LangButtons(props){  
        return (
        <ToggleButtonGroup type="radio" name="options" defaultValue={props.default} class="menu-languages" >
          <ToggleButton 
            id="lang-ru"
            variant="outline-secondary"
            value={0}
            href="#"
            size='sm'
            onclick={()=>localStorage.setItem("Loc",0)}
            >
            Русский
          </ToggleButton>
          <ToggleButton id="lang-en" variant="outline-secondary" value={1} href="#" size='sm' onclick={()=>localStorage.setItem("Loc",1)} >
            Английский
          </ToggleButton>
        </ToggleButtonGroup>
        )
      }
      function GetLang(){
        if (localStorage.getItem("Loc")==0 || localStorage.getItem("Loc")==null)
        {
          return LOCALES.RUSSIAN;
        }
        else
        {
          return LOCALES.ENGLISH;
        }
      }
        const  [locale,setLocale]= useState(LOCALES.RUSSIAN); 
   
      
return (
<IntlProvider  messages={messages[locale]} locale={locale}> 
<body >
<header>
      <div class="head-menu">
        <div class="menu-languages">
          <LangButtons onClick={()=>setLocale(GetLang)} default={0} ru={LOCALES.RUSSIAN} eng={LOCALES.ENGLISH}></LangButtons>
        </div>
        <div class="menu-navigation-buttons">
          <Button href="/List" className="list-figures" variant="outline-success"><p>Список деятелей</p></Button>        
          <Button href="/" className="main-page" variant="outline-primary"><p>Главная страница</p></Button>        
        </div>
      </div>
    </header>
<main class = "MainContainer">
    <div class="firstBorder"></div>
<section class ="AboutSiteContainer">
    <div class="SiteInfo">
        <p><FormattedMessage id="SiteInfo">Сайт, или веб-сайт, также веб-узел, — одна или несколько логически связанных между собой веб-страниц; также место расположения контента сервера. Обычно сайт в Интернете представляет собой массив связанных данных, имеющий уникальный адрес и воспринимаемый пользователями как единое целое.</FormattedMessage></p>
    </div>
</section>
<div class="firstBorder"></div>
<h1><FormattedMessage id="HumanOfDay">Деятель Дня</FormattedMessage></h1>
 <section class = "HumanOfDay">
    <div   class = "Human">
        <h1 id="DoerName"><FormattedMessage id={"name"+x}></FormattedMessage></h1>
        <div class = "Image">
        <img id = "DoerImage" src = {Doers_ru[x].image}/>
        </div>
        <h2 id="DoerYears" ><FormattedMessage id={"time"+x}>1978-Настоящее время</FormattedMessage></h2>
        <div class = "DayPersonBtn">
        <OnSecondPageButton  ><FormattedMessage id ="gotobtn">Перейти</FormattedMessage></OnSecondPageButton>
        </div>
    </div>
    <div id="DoerShortInfo" class = "HumanDayInfo" >
        <p><FormattedMessage id={"shortInfo"+x}>Нарадзіўся 14 лістапада 1978 года ў г. Казань, у сям’і вайскоўца. З 1979 года сям’я пераехала ў Беларусь. У 2000 годзе скончыў факультэт менеджменту Беларускага дзяржаўнага эканамічнага ўніверсітэта. У 2000 годзе ўзнагароджаны медалём Міністэрства адукацыі і навукі Расійскай Федэрацыі «За лепшую навуковую працу» сярод маладых вучоных па выніках адкрытага ўсерасійскага конкурсу. У 2004 годзе абараніў дысертацыю, прысуджана навуковая ступень кандыдата эканамічных навук.</FormattedMessage></p>
    </div>
 </section>
 <div class="firstBorder"></div>
 <section class ="Developers">
    <div class="Developers-Container">
        <div class="Developer">
                <img class="DeveloperImage" src="images/Fedya.png"/>
                <p class="DeveloperName"><FormattedMessage id="Fedor">Федор Сапраньков</FormattedMessage></p>
                <div class="DeveloperIcons">
                    <div class="Icons">
                        <a href ="https://github.com/FedorDevelopmer"><i class="fa-brands fa-github"></i></a>
                        <a href="https://vk.com/f.saprankov"><i class="fa-brands fa-vk"></i></a>
                    </div>
                </div>
        </div>
        <div class="Developer">
            <img class="DeveloperImage" src="images/Ilya.png"/>
            <p class="DeveloperName" ><FormattedMessage id = "Ilya">Илья Трубчик</FormattedMessage></p>
            <div class="DeveloperIcons">
                <div class="Icons">
                    <a href="https://github.com/IlyaTrubchik"><i class="fa-brands fa-github"></i></a>
                    <a href = "https://vk.com/cytctcyvjbg"><i class="fa-brands fa-vk"></i></a>
                </div>     
            </div>
        </div>
        <div class="Developer">
            <img class="DeveloperImage" src="images/Leha.png"/>
            <p class="DeveloperName" ><FormattedMessage id="Alex">Алексей Манчик</FormattedMessage></p>
            <div class="DeveloperIcons">
                <div class="Icons">
                    <a href = "https://github.com/cooperative0zero"><i class="fa-brands fa-github"></i></a>
                    <a href="https://vk.com/xxx___lexa___xxx" ><i class="fa-brands fa-vk"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="firstBorder"></div>
</main>
<footer>

</footer>
</body>
</IntlProvider>
 
);

}



export default MainPage;
