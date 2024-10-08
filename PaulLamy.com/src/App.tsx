
import './App.css'
import '../index.css'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Intro from './intro/Intro'
import Tech from './components/Tech'
import Project from './projects/Project'
import CardMentor from './assets/images/cardmentor.png'
import TraceChain from './assets/images/tracechain.png'
import Mat434 from './assets/images/mat434.png'
import Contact from './contact/Contact'

// fonts
// import "./assets/fonts/contb.ttf";
// import "./assets/fonts/ContinuumLight.ttf";
// import "./assets/fonts/contm.ttf";

const bestTechnologiesTitle = "Best Technologies" as string;
const bestTechnologiesArray = [
  { imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png', description: "React" },
  { imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png', description: "TypeScript" },
  { imagePath: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', description: "JavaScript" },
  { imagePath: 'https://www.svgrepo.com/show/376337/node-js.svg', description: "Node" },
  { imagePath: 'https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png', description: "C++" },
  { imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png', description: "SQL" },
  { imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png', description: "AWS" },
  { imagePath: 'https://cdnlogo.com/logos/m/30/mongodb-icon.svg', description: "MongoDB" },
  { imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png", description: "CSS" },
  { imagePath: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", description: "Tailwind" },
] as Technology[];

const alsoExperiencedTitle = "Also Experienced Using" as string;
const alsoExperiencedArray = [
  { imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/2048px-Python_logo_01.svg.png", description: "Python" },
  { imagePath: "https://aety.io/wp-content/uploads/2016/11/java-logo-vector.png", description: "Java" },
  { imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png", description: "C#" },
  { imagePath: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", description: "Linux" },
  { imagePath: "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png", description: "Firebase" },
  { imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/449px-Pandas_mark.svg.png", description: "Pandas" },
  { imagePath: "https://user-images.githubusercontent.com/50221806/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png", description: "NumPy" },
  { imagePath: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", description: "Vue" },
  // { imagePath: "https://w7.pngwing.com/pngs/679/344/png-transparent-wing-ide-integrated-development-environment-python-computer-software-eric-raspberry-miscellaneous-monochrome-computer-program.png", description: "TKinter" }
] as Technology[];
const whatIHaveBeenDoingTitle = "What I Have Been Doing Recently" as string;
const whatIHaveBeenDoingArray = [
  { imagePath: "https://upload.wikimedia.org/wikipedia/en/f/f4/Docker_logo.svg", description: "Docker" },
  { imagePath: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg", description: ".NET" },
  { imagePath: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Neovim-logo.svg", description: "NeoVim" },
  { imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png", description: "GraphQL" },
  { imagePath: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png", description: "Go" },
  { imagePath: 'https://rust-lang.org/logos/rust-logo-512x512.png', description: "Rust" },
  // { imagePath: "", description: "JavaScript Testing" },
  // { imagePath: "", description: "Data Science" }
] as Technology[];

const CMTechUsed = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png', alt: "React" },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png', alt: "TypeScript" },
  { src: 'https://www.svgrepo.com/show/376337/node-js.svg', alt: "Node" },
  { src: 'https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png', alt: "MySQL" },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png', alt: "AWS" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png", alt: "CSS" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind" },
] as ImageType[];

const TCTechUsed = [
  { src: 'https://www.svgrepo.com/show/376337/node-js.svg', alt: "Node" },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', alt: "Vue" },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png', description: "TypeScript" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind" },
  { src: 'https://cdnlogo.com/logos/m/30/mongodb-icon.svg', description: "MongoDB" },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg', description: "MongoDB" },
] as ImageType[];

const MAT434TechUsed = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/2048px-Python_logo_01.svg.png", alt: "Python" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/449px-Pandas_mark.svg.png", alt: "Pandas" },
  { src: "https://user-images.githubusercontent.com/50221806/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png", alt: "NumPy" },
] as ImageType[];

const cardMentorDesc: string = 'Flashcard app for studying any discipline. Cards you get wrong have a higher priority, so you see those cards more often. Includes a translation API for quickly translating phrases to different languages.';
const tracechainDesc: string = "Social media app where the user adds a source to a post, and posts with sources can be filtered.";
const mat434Desc: string = 'Final project for MAT434 Statistical Learning and Classification. Takes in and edits a list of 5000 films, performs basic EDA, and uses a prediction pipeline to predict the rating of a movie.';

const redirect: Function = (hyperlink: string) => {
  switch (hyperlink) {
    case "CM":
      window.open('https://github.com/PaulLamy27/CapstoneFlashcardApplication');
      break;
    case "TC":
      window.open('https://github.com/Joshua-Burdick/TraceChain');
      break;
    case "M434":
      window.open('https://github.com/PaulLamy27/Mat434Project/');
      break;
    default:
      console.error("something happened with the switch!");
      break;
  }
}

function App() {

  return (
    <>
      <div className="container">
        <div className="navbar"><Navbar /></div>
        <div className="hero"><Hero /></div>
        <div className="intro"><Intro /></div>
        <div className="projects-container">
          <h1>Here are the most recent projects I contributed to: </h1>
          <div className="project" onClick={() => redirect("CM")}>
            <Project title='CardMentor' description={cardMentorDesc} imagePath={CardMentor} imageWidth='10rem' imageHeight='10rem' techUsed={CMTechUsed} />
          </div>
          <div className="project" onClick={() => redirect("TC")}>
            <Project title='TraceChain' description={tracechainDesc} imagePath={TraceChain} imageWidth='15rem' imageHeight='10rem' techUsed={TCTechUsed} />
          </div>
          <div className="project" onClick={() => redirect("M434")}>
            <Project title='MAT434 Movie Rating Prediction' description={mat434Desc} imagePath={Mat434} imageWidth='15rem' imageHeight='10rem' techUsed={MAT434TechUsed} />
          </div>
        </div>
        <h1> I am a quick learner and can work with any tool for the job, but here is what I have extensive experience with:</h1>
        <div className="tech">
          <Tech title={bestTechnologiesTitle} items={bestTechnologiesArray} />
          <Tech title={alsoExperiencedTitle} items={alsoExperiencedArray} />
          <Tech title={whatIHaveBeenDoingTitle} items={whatIHaveBeenDoingArray} />
        </div>
        <div className="contact">
          <Contact />
        </div>

      </div>
    </>
  )
}

export default App

