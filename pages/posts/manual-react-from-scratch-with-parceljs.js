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
    </section>
  </PostLayout>
)

export default Post
