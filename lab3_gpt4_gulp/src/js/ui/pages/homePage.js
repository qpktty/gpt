import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initWoman from "./../components/initWoman.js";
import initCtaBanner from "./../components/initCtaBanner.js";
import initStatia from "./../components/initStatia.js";
import initStepSection from "./../components/initStepSection.js";
import initLinks from "./../components/initLinks.js";
import initCopyright from "./../components/initCopyright.js";
import initBurger from "./../components/initBurger.js";


const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section woman"></section>
    <section class="section cta_banner"></section>
    <section class="section statia_5"></section>
    <section class="section step_section"></section>
    <section class="section links"></section>
    <section class="copyright"></section> 
  `;

  rootNode.insertAdjacentHTML("beforeend", template);
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация секции "woman" с мок датой
  const womanNode = rootNode.querySelector(".woman");
  initWoman(womanNode);

  // инициализация баннера с мок датой
  const ctaBannerNode = rootNode.querySelector(".cta_banner");
  initCtaBanner(ctaBannerNode);

  const statiaNode = rootNode.querySelector(".statia_5");
  initStatia(statiaNode);

  // инициализация шаг в будущее
  const stepSectionNode = rootNode.querySelector(".step_section");
  initStepSection(stepSectionNode);

  // инициализация ссылок внизу (футер)
  const linksNode = rootNode.querySelector(".links");
  initLinks(linksNode);

  // инициализация копирайта внизу
  const copyrightNode = rootNode.querySelector(".copyright");
  initCopyright(copyrightNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
