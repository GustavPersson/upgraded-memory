import React, { Component } from 'react';
import _ from 'lodash';

import {
  Container,
  Divider,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Responsive
} from 'semantic-ui-react';

import faceSmall from './assets/face_small.jpg';
import face from './assets/face.jpg';

import './styles.css';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease'
};

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
};

class App extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false
  };

  handleOverlayRef = c => {
    const { overlayRect } = this.state;

    if (!overlayRect)
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width')
      });
  };

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const { menuFixed } = this.state;

    return (
      <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size="mini" src={faceSmall} />
              </Menu.Item>
              <Menu.Item header>Gustav Persson</Menu.Item>
            </Container>
          </Menu>
        </Visibility>

        <Container text>
          <Image src={face} size="medium" centered />
          <Container fluid textAlign="center">
            <Menu
              compact
              icon="labeled"
              horizontal
              style={{
                margin: '0 auto'
              }}
            >
              <Menu.Item as="a" href="https://twitter.com/gustavpersson">
                <Icon name="twitter" />
                Twitter
              </Menu.Item>

              <Menu.Item as="a" href="https://github.com/GustavPersson">
                <Icon name="github" />
                Github
              </Menu.Item>

              <Menu.Item as="a" href="mailto:gustav.e.persson@gmail.com">
                <Icon name="mail" />
                Email
              </Menu.Item>
            </Menu>
          </Container>
          <Divider />
          <p>
            I am a software developer with good skills and a special interest in
            modern web technologies and games programming.
          </p>
          <p>
            I have an interest in front and back end development, and especially
            enjoy debugging and experimentation, in order to keep quality at a
            high level. I enjoy working in agile projects, and am highly
            flexible.
          </p>
          <p>
            I studied Games Programming for 3 years at the Blekinge Institute of
            Technology, before joining the Karlskrona branch of the consultancy
            firm HiQ in 2010, after which I've mostly worked with Web
            development, while trying to keep as up to date with games
            programming as possible.
          </p>
          <p>
            My goal is to be part of a team that works with cutting edge
            technologies and projects, where I am able to continually develop my
            skills, work close to design teams, learn new things and take a lot
            of responsibility.
          </p>
          <p>
            I'm used to working in Windows, Linux and Mac systems, with a wide
            array of tools. My main programming languages are C++, Java and
            JavaScript. I am especially experienced in Web programming, and have
            an education in Games programming. The last years I've been working
            with both back and front end development on web portals and web
            applications, mobile applications built with React Native,
            modernized and customized web sites for mobile content, and a mobile
            operating system based on web technologies.
          </p>
          <p>
            I am not afraid to voice my opinion and take a discussion, and enjoy
            taking responsibility for different projects. During my free time
            I'm a passionate Malmö FF supporter, I have a season pass on the
            north stand, I enjoy watching sports, and spend whatever extra time
            I have with my fiancée, our cats, running and playing computer
            games.
          </p>

          <Header as="h1" textAlign="center">
            Experience
          </Header>
          <Divider horizontal>
            Djäkne Partners AB
            <Responsive as={'span'} minWidth={768}>
              {' - Partner and Front End Developer - Malmö, Sweden - 2018 -'}
            </Responsive>
          </Divider>
          <p>
            Worked with several projects and companies as part of Djäkne
            Partner's work with startups and other clients. Worked with
            rebuilding a big crowd sourced news platform to use more modern
            technologies, both on their web based platform as well as on
            rewriting their app in React Native. Further, I worked with building
            a customer zone and web based tools for a site survey company, as
            well as several minor consultancy hours with minor customers and
            partners.
          </p>
          <p>
            I worked with several projects at the same time, often switching
            several times in a week in order to produce the best possible
            outcome for the customers, had direct customer contact on all
            projects. The projects were done in very small teams, where
            everybody shared responsibility of code, design, and customer
            contact and planning.
          </p>
          <Divider horizontal>
            Modcam AB
            <Responsive as={'span'} minWidth={768}>
              {' - Front End Lead - Malmö, Sweden - 2016 - 2018'}
            </Responsive>
          </Divider>
          <p>
            Worked as a Front End Lead for a Malmö based Startup working with
            business intelligence, developing and maintaining front end
            solutions for customers to view their data, and manage their
            services and devices.
          </p>
          <p>
            I worked in a high pace environment, with continous releases, using
            a version of SCRUM that worked for our small team. We used ReactJS
            as the main Front End framework, with Redux as a state management
            system, rendering both on the client and the server to improve
            performance to handle the large amounts of data customers had access
            to. We used SASS as a CSS preprocessor, and had a build environment
            built around Webpack and Babel, compiling to both NodeJS-compatible
            code, and code that runs on the client.
          </p>
          <Divider horizontal>
            Mobenga AB
            <Responsive as={'span'} minWidth={768}>
              {' - Front End Developer - Malmö, Sweden - 2015 - 2016'}
            </Responsive>
          </Divider>
          <p>
            Worked as a Front End Developer in several teams, developing
            Sportsbook applications. The applications ranged from web apps in a
            native wrapper, designed only for mobile users, to full multi
            platform applications, with support for a wide range of devices with
            a mobile first design in mind.
          </p>
          <p>
            Worked together with internal teams to create and improve Front End
            development tools, used to improve productivity and align all
            company products to a unified way of working.
          </p>
          <p>
            Worked in a high pace environment, with continous releases to the
            company partners, using both SCRUM and Kanban. We used KnockoutJS as
            the main Front End framework, used LESS as a CSS preprocessor, and
            had a build environment built around Gulp, that amongst other things
            contained a ES2015-translator, allowing us to write JavaScript using
            the newest syntaxes.
          </p>

          <Divider horizontal>
            HiQ Skåne AB
            <Responsive as={'span'} minWidth={768}>
              {' - Consultant - Lund, Sweden - 2013 - 2015'}
            </Responsive>
          </Divider>
          <Header as="h4">Consultancy Assignments</Header>
          <List bulleted>
            <List.Item>
              Web App Programmer, Firefox OS, Sony Mobile AB
            </List.Item>
            <List.Item>
              Platform Programmer, Firefox OS, Sony Mobile AB{' '}
            </List.Item>
            <List.Item>
              Web App Frontend Developer, Blackberry Blend, Blackberry{' '}
            </List.Item>
            <List.Item>Web Frontend Developer, InfabVitamin AB </List.Item>
          </List>
          <Divider horizontal>
            Sony Mobile AB
            <Responsive as={'span'} minWidth={768}>
              {' - App Programmer - Lund, Sweden - June 2013 - Nov 2013'}
            </Responsive>
          </Divider>
          <p>
            Worked on Sony’s Firefox OS project, in a small team managing the
            core apps (e.g. communications, calendar, SMS and the lock screen).
            The team made bug fixes to, “Sonyfied”, and implemented new features
            to several of the apps, allowing for basic prototype phones to be
            created. All apps were written completely using HTML5, CSS3 and
            JavaScript, on a Linux based workstation.
          </p>
          <p>
            Was also part of the Platform team, working with making sure that
            the code base was regularly being kept up to date with Mozilla.
          </p>
          <Divider horizontal>
            Sony Mobile AB
            <Responsive as={'span'} minWidth={768}>
              {' - Platform Programmer - Lund, Sweden - Nov 2013 - Apr 2014'}
            </Responsive>
          </Divider>
          <p>
            Worked in the Platform team for Sony’s Firefox OS project. Our team
            was in charge of making the Firefox OS platform compatible with Sony
            hardware, fixing bugs, ensuring compatibility with Sony branded apps
            (Walkman, Album, Entrance etc.), writing automated tests, and
            implementing and contributing new features to Mozilla, improving the
            OS for everyone.
          </p>
          <p>
            We worked in a Linux environment, using a variety of programming
            languages and tools, for example HTML5, JavaScript, Python, C and
            Git.
          </p>
          <Divider horizontal>
            Blackberry
            <Responsive as={'span'} minWidth={768}>
              {
                ' - Web Application Developer - Malmö, Sweden - May 2014 - Dec 2014'
              }
            </Responsive>
          </Divider>
          <p>
            Worked in a Malmö based Web development team for Blackberry,
            developing the front end for the Blend application, in close
            co-operation with several distributed teams in Canada and Russia.
            Blend is an web based application that displays information from
            your Blackberry devices on a variety of other devices, like your PC,
            Mac or Tablet. The front end app was built as an AngularJS-app,
            moving the MVC part of the app to the front end, and everything was
            being rendered by a QT Webviewer instance.
          </p>
          <p>
            We worked in Windows and Mac environments, using a variety of
            programming languages and tools, for example HTML5, JavaScript,
            AngularJS, Sass and Git.
          </p>
          <Divider horizontal>
            Infab Vitamin
            <Responsive as={'span'} minWidth={768}>
              {' - Front End Developer - Malmö, Sweden - Jan 2015 - Mar 2015'}
            </Responsive>
          </Divider>
          <p>
            Worked with a distributed team in Malmö and India to create a small
            web application specially ordered by a major US pharmaceutical
            company.
          </p>
          <p>
            I worked in a Mac environments, using a variety of modern web
            technologies and libraries, including Less, jQuery, Angular and
            Bootstrap, and the app was built on a backend server using CakePHP.
          </p>
          <Divider horizontal>
            HiQ Karlskrona AB
            <Responsive as={'span'} minWidth={768}>
              {' - Consultant - Karlskrona, Sweden - 2010 - 2013'}
            </Responsive>
          </Divider>
          <Header as="h4">Consultancy Assignments</Header>
          <List bulleted>
            <List.Item>
              Front End Developer, Web Platforms and Applications, Telenor
              Sverige AB
            </List.Item>
            <List.Item>Front End Developer, Milou AB </List.Item>
          </List>
          <Divider horizontal>
            Telenor Sverige AB
            <Responsive as={'span'} minWidth={768}>
              {' - Web Programmer - Karlskrona, Sweden - 2010 - 2013'}
            </Responsive>
          </Divider>
          <p>
            Worked with the Telenor “Mina Sidor” team, maintaining and improve a
            web application used by Telenor’s customers to handle their
            subscriptions and services. The application is built with the Spring
            MVC and Security frameworks on top of a backend built with Java EE.
            The projects at Mina Sidor revolved mostly around allowing the web
            portal to interact with around lying Telenor systems, in order to
            correctly handle newly launched services, subscription types and
            general changes in other systems.
          </p>
          <p>
            Worked with the Telenor.se team to maintain and improve Telenor’s
            main page and web shop. Telenor.se is built with the Spring
            framework and Java EE on the backend for both the informational
            pages and the web shop, using Tridion CMS for content management.
            Was part of a project to modernize the web site, introducing HTML5
            and CSS3 technologies in order to rework the majority of the front
            end, letting the site support different devices through responsive
            web design, and giving the site editors more freedom to create the
            site content they wanted with Tridion, allowing for easier updating
            of site content.
          </p>
          <p>
            Over a period of a few months, I worked with a project to create a
            new proof-of-concept portal from the bottom up, based on
            technologies from both Telenor.se and Mina Sidor. The goal of the
            project was to allow for special, and more complex, business rules
            than the ones that are used on the other portals.
          </p>

          <Divider horizontal>
            Milou AB
            <Responsive as={'span'} minWidth={768}>
              {' - Web Programmer - Karlskrona, Sweden - 2013'}
            </Responsive>
          </Divider>
          <p>
            Worked on a small project to modernize a customer's entire web site,
            upgrading the client’s CMS and updating it to use modern
            technologies like parallax scrolling and responsive web design,
            using HTML5 and CSS3. The project team was small, and the tempo was
            hectic, but everything went according to plan and the site was
            released according to plan.
          </p>

          <Divider horizontal>
            Blekinge Institute of Technology
            <Responsive as={'span'} minWidth={768}>
              {' - Project Leader/Developer, Jan 2010 – May 2010'}
            </Responsive>
          </Divider>
          <p>
            Were the project leader and a game logic developer on a big project
            during my last year at BTH, where we developed our own computer
            strategy game in C++, using Scrum and various other technologies to
            handle the project management. We completed the project on time, and
            received overall positive reactions from play testers and graders.
          </p>
        </Container>

        <Segment
          inverted
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
          vertical
        >
          <Container fluid textAlign="center">
            <Menu
              compact
              icon="labeled"
              horizontal
              inverted
              style={{
                margin: '0 auto'
              }}
            >
              <Menu.Item as="a" href="https://twitter.com/gustavpersson">
                <Icon name="twitter" />
                Twitter
              </Menu.Item>

              <Menu.Item as="a" href="https://github.com/GustavPersson">
                <Icon name="github" />
                Github
              </Menu.Item>

              <Menu.Item as="a" href="mailto:gustav.e.persson@gmail.com">
                <Icon name="mail" />
                Email
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
