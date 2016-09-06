// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // Appear,
  // BlockQuote,
  // Cite,
  // CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  // Link,
  ListItem,
  List,
  // Markdown,
  // Quote,
  Slide,
  Spectacle,
  // Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

require("prismjs");
require("prismjs/components/prism-typescript");

const images = {
  title: require("../assets/images/title.png"),
  maurice: require("../assets/images/maurice1024.jpg"),
  lookingback: require("../assets/images/lookingback.jpg"),
  trends: require("../assets/images/trends.png"),
  ng1: require("../assets/images/ng1.png"),
  ng2: require("../assets/images/ng2.png"),
  milestones: require("../assets/images/milestones.png"),
  sergeant: require("../assets/images/sergeant.png"),
  reactStarter: require("../assets/images/react-starter.png"),
  typescript: require("../assets/images/typescript.png"),
  cli: require("../assets/images/cli.png"),
  styleGuide: require("../assets/images/style-guide.png"),
  codelyzer: require("../assets/images/codelyzer.png"),
  lego: require("../assets/images/lego.png"),
  modules: require("../assets/images/modules.png"),
  components: require("../assets/images/components.png"),
  templates: require("../assets/images/templates.png"),
  services: require("../assets/images/services.png"),
  di: require("../assets/images/di.png"),
  http: require("../assets/images/http.png"),
  rx: require("../assets/images/rx.png"),
  thanks: require("../assets/images/thanks.png")
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
            code={require("raw!../assets/code/app.module.ts")}
            ranges={[
              { loc: [0, 255], title: "Angular 2 main module" },
              { loc: [22, 24] },
              { loc: [7, 8], note: "The module decorator" },
              { loc: [0, 1] },
              { loc: [8, 11] },
              { loc: [15, 18] },
              { loc: [18, 21] }
            ]}
          />

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
            code={require("raw!../assets/code/app.component.ts")}
            ranges={[
              { loc: [0, 255], title: "The main component" },
              { loc: [10, 11] },
              { loc: [3, 4], note: "The component decorator" },
              { loc: [5, 6], note: "The markup tag" },
              { loc: [6, 7], note: "Location of markup" },
              { loc: [8, 9], note: "Dependencies on child components" },
              { loc: [11, 12], note: "Properties are exposed to the template" }
            ]}
          />

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
            code={require("raw!../assets/code/component.html")}
            ranges={[
              { loc: [0, 255], title: "Templates" },
              { loc: [1, 2], note: "Displaying data" },
              { loc: [12, 13], note: "Property binding" },
              { loc: [10, 11], note: "Structural directives" },
              { loc: [11, 12], note: "Event or output binding" },
              { loc: [22, 24], note: "[()] Banana in a box two way data binding" }
            ]}
          />

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
            code={require("raw!../assets/code/static.movie.service.ts")}
            ranges={[
              { loc: [0, 255], title: "Movie service" },
              { loc: [3, 4], note: "" },
              { loc: [2, 3], note: "" },
              { loc: [7, 21], note: "" }
            ]}
          />

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
            code={require("raw!../assets/code/http.movie.service.ts")}
            ranges={[
              { loc: [0, 255], title: "HTTP" },
              { loc: [1, 2], note: "Import HTTP" },
              { loc: [8, 9], note: "" },
              { loc: [11, 14], note: "" },
              { loc: [3, 4], note: "" }
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="typescript"
            code={require("raw!../assets/code/movies.component.ts")}
            ranges={[
              { loc: [0, 255], title: "Movies component" },
              { loc: [2, 3], note: "" },
              { loc: [10, 11], note: "" },
              { loc: [16, 17], note: "" },
              { loc: [19, 24], note: "" }
            ]}
          />

          <Slide>
            <Image src={images.thanks.replace("/", "")} width="900px"/>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
