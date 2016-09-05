// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  title: require("../assets/title.png"),
  maurice: require("../assets/maurice1024.jpg"),
  lookingback: require('../assets/lookingback.jpg'),
  trends: require("../assets/trends.png"),
  ng1: require("../assets/ng1.png"),
  ng2: require("../assets/ng2.png"),
  milestones: require("../assets/milestones.png"),
  sergeant: require("../assets/sergeant.png"),
  reactStarter: require("../assets/react-starter.png"),
  typescript: require("../assets/typescript.png"),
  cli: require("../assets/cli.png"),
  styleGuide: require("../assets/style-guide.png"),
  codelyzer: require("../assets/codelyzer.png"),
  lego: require("../assets/lego.png"),
  modules: require("../assets/modules.png"),
  components: require("../assets/components.png"),
  templates: require("../assets/templates.png"),
  services: require("../assets/services.png"),
  di: require("../assets/di.png"),
  http: require("../assets/http.png"),
  rx: require("../assets/rx.png"),
  thanks: require("../assets/thanks.png"),


  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} 
              transitionDuration={500}
              progress='bar'>
          <Slide bgImage={images.title.replace("/", "")}>
            <Heading margin="250px 0px 0px">
              The productive developer guide to Angular 2
            </Heading>
          </Slide>
          <Slide bgImage={images.maurice.replace("/", "")}>
              <Heading textColor='black'>
                Who am I?
            </Heading>
            <List>
              <ListItem>Maurice de Beijer</ListItem>
              <ListItem>The Problem Solver</ListItem>
              <ListItem>Microsoft Azure MVP</ListItem>
              <ListItem>Freelance developer/instructor</ListItem>
              <ListItem>Twitter: @mauricedb</ListItem>
              <ListItem>Web: http://www.TheProblemSolver.nl</ListItem>
              <ListItem>E-mail:	maurice.de.beijer@gmail.com</ListItem>
            </List>
          </Slide>
          <Slide bgImage={images.lookingback.replace("/", "")}>
              <Heading textColor='black'>
               Looking back
            </Heading>
          </Slide>
          <Slide>
            <Image src={images.trends.replace("/", "")} 
                   height="500px"/>
          </Slide>

          <Slide>
            <Heading textColor='black' 
                     textSize='5rem'
                     margin='50px'>
                Angular 2 !== Angular 1
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.ng2.replace("/", "")}/>
              </Fill>
              <Fill>
                <Image src={images.ng1.replace("/", "")}/>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Image src={images.milestones.replace("/", "")} 
                   width="900px"/>
          </Slide>
          <Slide>
              <Heading textColor='black' 
                       textSize='5rem'>
                Angular is opinionated
            </Heading>
            <Image src={images.sergeant.replace("/", "")} 
                   margin="40px auto 0px" 
                   height="500px"/>
          </Slide>

          <Slide>
            <Image src={images.reactStarter.replace("/", "")} x
                   width="900px"/>
          </Slide>

          <Slide>
            <Image src={images.typescript.replace("/", "")} 
                   width="900px"/>
          </Slide>

          <Slide>
            <Image src={images.cli.replace("/", "")} 
                   width="900px"/>
          </Slide>

          <Slide>
            <Image src={images.styleGuide.replace("/", "")} 
                   width="900px"/>
          </Slide>

          <Slide>
            <Image src={images.codelyzer.replace("/", "")} 
                   width="900px"/>
          </Slide>

          <Slide>
              <Heading textColor='black'>
                Building blocks
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Modules</ListItem>
                  <ListItem>Components</ListItem>
                  <ListItem>Templates</ListItem>
                  <ListItem>Data binding</ListItem>
                  <ListItem>Directives</ListItem>
                  <ListItem>Services</ListItem>
                  <ListItem>Routing</ListItem>
                  <ListItem>Dependency injection</ListItem>
                </List>
              </Fill>
              <Fill>
                <Image src={images.lego.replace("/", "")} 
                       margin="40px auto 0px"
                       width="460px"/>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
              <Heading textColor='black' 
                       textSize='5rem'>
                Modules
            </Heading>
            <Image src={images.modules.replace("/", "")} 
                   width="900px"/>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="typescript"
            code={require("raw!../assets/app.module.ts")}
            ranges={[
              { loc: [0, 255], title: "Angular 2 main module" },
              { loc: [22, 24] },
              { loc: [7, 8], note: 'The module decorator' },
              { loc: [0, 1] },
              { loc: [8, 11] },
              { loc: [15, 18] },
              { loc: [18, 21] },
            ]}/>

          <Slide>
              <Heading textColor='black' 
                       textSize='5rem'>
                Components
            </Heading>
            <Image src={images.components.replace("/", "")} 
                   width="900px"/>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="typescript"
            code={require("raw!../assets/app.component.ts")}
            ranges={[
              { loc: [0, 255], title: "The main component" },
              { loc: [10, 11] },
              { loc: [3, 4], note: 'The component decorator' },
              { loc: [5, 6], note: 'The markup tag' },
              { loc: [6, 7], note: 'Location of markup' },
              { loc: [8, 9], note: 'Dependencies on child components' },
              { loc: [11, 12], note: 'Properties are exposed to the template' },
            ]}/>

          <Slide>
              <Heading textColor='black' 
                       textSize='5rem'>
                Templates
            </Heading>
            <Image src={images.templates.replace("/", "")} 
                   width="900px"/>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="markup"
            code={require("raw!../assets/component.html")}
            ranges={[
              { loc: [0, 255], title: "Templates" },
              { loc: [1, 2], note: 'Displaying data' },
              { loc: [12, 13], note: 'Property binding' },
              { loc: [10, 11], note: 'Structural directives' },
              { loc: [11, 12], note: 'Event or output binding' },
              { loc: [22, 24], note: '[()] Banana in a box two way data binding' },
              // { loc: [3, 4], note: '' },
            ]}/>

          <Slide>
            <Image src={images.services.replace("/", "")} 
                   width="900px"/>
          </Slide>

          <Slide>
              <Heading textColor='black' 
                       textSize='5rem'>
                Dependency injection
            </Heading>
            <Image src={images.di.replace("/", "")} 
                   margin="40px auto 0px" 
                   width="900px"/>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="typescript"
            code={require("raw!../assets/static.movie.service.ts")}
            ranges={[
              { loc: [0, 255], title: "Movie service" },
              { loc: [3, 4], note: '' },
              { loc: [2, 3], note: '' },
              { loc: [7, 21], note: '' },
            ]}/>

          <Slide>
            <Image src={images.http.replace("/", "")} 
                   width="900px"/>
          </Slide>

          <Slide>
            <Image src={images.rx.replace("/", "")} 
                   width="900px"/>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="typescript"
            code={require("raw!../assets/http.movie.service.ts")}
            ranges={[
              { loc: [0, 255], title: "HTTP" },
              { loc: [1, 2], note: 'Import HTTP' },
              { loc: [8, 9], note: '' },
              { loc: [11, 14], note: '' },
              { loc: [3, 4], note: '' },
            ]}/>

          <CodeSlide
            transition={[]}
            lang="typescript"
            code={require("raw!../assets/movies.component.ts")}
            ranges={[
              { loc: [0, 255], title: "Movies component" },
              { loc: [2, 3], note: '' },
              { loc: [10, 11], note: '' },
              { loc: [16, 17], note: '' },
              { loc: [19, 24], note: '' },
            ]}/>

          <Slide>
            <Image src={images.thanks.replace("/", "")} width="900px"/>
          </Slide>






















          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/deck.example")}
            ranges={[
              { loc: [0, 29], title: "Walking through some code" },
              { loc: [0, 1], title: "The Beginning" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" },
              { loc: [2, 3] },
              // { loc: [4, 7], image: shiaLabeoufMagicGif },
              { loc: [8, 10] },
              // ...
            ]}/>

          <Slide bgImage={images.maurice.replace("/", "")}>
              <Heading textColor='black'>
                Who am I?
            </Heading>
          </Slide>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle
            </Heading>
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
          <Slide bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/deck.example")}
            ranges={[
              { loc: [0, 29], title: "Walking through some code" },
              { loc: [0, 1], title: "The Beginning" },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" },
              { loc: [2, 3] },
              // { loc: [4, 7], image: shiaLabeoufMagicGif },
              { loc: [8, 10] },
              // ...
            ]}/>

          <Slide bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
