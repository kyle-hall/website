import PostLayout from '../../components/PostLayout'

const Post = props => (
  <PostLayout title={'Starting a React Project from Scratch with Parcel.js'}>
    <header>
      <p>
        Hey, y'all. I've been working on more React as I gear up for a new project at work, and I
        decided to try my hand at setting a React project from scratch.{' '}
        <span className='inset-code-sample'>create-react-app</span> is cool for getting started
        quickly, but usually leaves me with a project that's got too much going on for me. I usually
        put up with that because I don't want to deal with creating my own Webpack config. But, with
        the advent of <a href='https://parceljs.org'>Parcel.js</a>, I don't need to worry about
        that. So, let's get started.
      </p>
      <p>
        Small disclaimer: I'm going to use Yarn throughout this article, and I won't be showing the
        equivalent commands using npm. This is for the sake of brevity. In case, you'd like one,
        here's a quick conversion guide:
      </p>
      <pre className='code-example'>
        {`yarn add == npm install

yarn remove == npm uninstall
`}
      </pre>
    </header>
    <section>
      <h2>Step One: The Base</h2>
      <p>First, we need a project:</p>
      <pre className='code-example'>
        {`> mkdir my-awesome-manual-react-project && cd my-awesome-manual-react-project 

> yarn init -y      
`}
      </pre>
      <p>Cool. Now that we have a project, let's install some stuff:</p>
      <pre className='code-example'>
        {`> yarn add @babel/core @babel/cli @babel/preset-env @babel/preset-react --dev

> yarn add parcel-bundler --dev 

> yarn add react react-dom  
`}
      </pre>
      <p>
        These installs give us a <em>lot</em> of stuff. We get React and react-dom, which is good
        since that's the kind of project we're building. We get Parcel which is going to handle all
        of the build layer for us, which is really great. We will not be writing a single line of
        config for Parcel. It has sensible defaults for bundling the application, including code
        splitting in the production build, which means we don't need to do a thing to get going.
        Lastly, we get Babel along with some presets for ensuring browser compatibility and proper
        transformations for our React code. Babel, if you don't know, is a language transformer for
        JavaScript that makes it possible to use many future or unstable features of the language
        today, as well as rewriting your ES6+ code to work in older browsers.
      </p>
      <p>
        For Babel, we will need a little bit of a config. But, it's a little baby config, really.
        Only three lines:
      </p>
      <pre className='code-example'>
        {`{
  "presets": ["@babel/preset-env, "@babel/preset-react"]
}`}
      </pre>
      <p>Next, we'll add a couple scripts to start and build the app to our package.json:</p>
      <pre className='code-example'>
        {`{
  // ...the rest of your package.json
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}`}
      </pre>
      <p>
        That's cool, but we still don't have an app, yet, just a bunch of other people's code. Let's
        fix that by creating an index.html and an index.js:
      </p>
      <pre className='code-example'>
        {`// index.html at the root of the project
        
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Parcel.js React project!</title>
  </head>
  <body>
    <div id="app"></div>

    <script src="./index.js"></script>
  </body>
</html>
`}
      </pre>
      <pre className='code-example'>
        {`// index.js file at the root of the project

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<h1>Hello, React App</h1>, document.querySelector('#app'))
`}
      </pre>
      <p>
        That should give us a really simple app. Let's find out. Start it up with{' '}
        <span className='inset-code-sample'>yarn start</span> and load up{' '}
        <span className='inset-code-sample'>http://localhost:1234</span> in your browswer. You
        should see our welcome message.
      </p>
      <p>
        <em>Note:</em> The port <span className='inset-code-sample'>1234</span> is the default for
        Parcel's dev server.
      </p>
      <p>
        And that's pretty cool. A (fledgling) app in a couple minutes with no configuration for
        building and no separate development server needed to get hot-module reloading. Fantastic.
      </p>
      <p>But, there's still something missing... Tests!</p>
    </section>
    <section>
      <h2>Step Two: The Tests</h2>
    </section>
  </PostLayout>
)

export default Post
