import BlogLayout from '../../components/BlogLayout'
import blogStyles from '../../common/blogPostStyles'

const Post = props => (
  <BlogLayout>
    <div style={blogStyles.containerStyle}>
      <h1 style={{ fontFamily: ['Montserrat', 'sans-serif'], fontSize: '3vw' }}>
        How to Deploy a Static Site with Next.js and Netlify
      </h1>
      <p className='intro' style={blogStyles.contentStyle}>
        I like building websites, and I especially like building fast, usable websites. Static sites
        are a great way to do just that. And tools like Next.js and Netlify can help you create and
        share them really easily. Today, I'd like to share a bit of my experience creating a static
        site with Next.js and deploying it with Netlify.
      </p>
      <article>
        <section>
          <h2 style={blogStyles.headerStyles}>Some Definitions</h2>
          <p style={blogStyles.contentStyle}>
            There are, potentially, a bunch of new terms in this article that I thought I'd define
            up-front.
          </p>
          <h3 style={blogStyles.headerStyles}>What is a static site?</h3>
          <p style={blogStyles.contentStyle}>
            A static site is a website where, for the most part, what you see is what you get. The
            content of a page is read from the server on request, and nothing is added to it - no
            database, no data server. If this sounds familiar, it is. This is the foundation of the
            web we're talking about here. Just a file with some content and some links.
          </p>
          <h3 style={blogStyles.headerStyles}>What isn't a static site?</h3>
          <p style={blogStyles.contentStyle}>
            A static site is <strong>not</strong> something like a Wordpress site or single-page
            application. With the Wordpress site, pages are built on templates, and you need a
            server running to actually put those templates together with the content to get a
            webpage back out in the browser. A static site has all of this figured out ahead of
            time, and it doesn't need to do all of this construction on request.
          </p>
          <p style={blogStyles.contentStyle}>
            A static site is also not a single-page application (SPA). These are built - primarily -
            with JavaScript and render much of their content in the browser. This can be great, and
            it can also suck, but that's a topic for another day. The point is, with a SPA, the user
            sends the request, the browser gets a big ol' blob of JavaScript that gets parsed, and
            then some content gets rendered. With a static site, depending on how much JavaScript
            you add, the content is all figured out ahead of time, and that just gets rendered right
            there in your browser.
          </p>
          <p style={blogStyles.contentStyle}>
            Now, static sites don't have to be this basic. There are a lot of great things that can
            be done on top of this without breaking the idea of what being a static site means. I'll
            leave that for another day, but, if your interested check out the{' '}
            <a href='https://syntax.fm/show/034/why-static-site-generators-are-awesome'>Syntax</a>{' '}
            podcast, episode 34 for more information.
          </p>
          <h3 style={blogStyles.headerStyles}>What is Next.js?</h3>
          <p style={blogStyles.contentStyle}>
            <a href='https://nextjs.org/'>Next.js</a> is a framework built by{' '}
            <a href='http://zeit.co/'>Zeit</a>. It's built on top of React, providing a lot of
            defaults and set-up to help you get started creating React apps quickly. It also has the
            option to export that app as a static site, which is what we'll be doing.
          </p>
          <p style={blogStyles.contentStyle}>
            This makes Next.js a static site generator. That means it provides some tooling around
            building a website that is easier and more efficient than writing all of our HTML files
            by hand. For websites that contain the same kind of content in multiple places - a blog
            with many posts, for example - it would be nice if we could template that out. A static
            site generator does exactly that. It ususally provides some kind of templating engine to
            build pieces of your website that it can smash together when it builds your site.
          </p>
          <p style={blogStyles.contentStyle}>
            Hold on now, I hear you say, I thought you said we were making something without any
            templates and that it didn't need to be built. And I did, sort of. The WordPress example
            I gave before did use templates like a static site generator does, true. The difference
            lies in when those templates are used. WordPress builds out a page on request. Each time
            a user visits <span style={blogStyles.insetStyle}>myawesomewebsite.com/</span>, the
            server builds that page. Caching can come into play with that, but the first request to
            the server still smooshes the template and the data together. The static site has
            already been built by the time a user is requesting it. The templates the site author
            used are conveniences, but the content is all just HTML and CSS.
          </p>
          <h3 style={blogStyles.headerStyles}>What is Netlify?</h3>
          <p style={blogStyles.contentStyle}>
            <a href='https://netlify.com/'>Netlify</a> is an absolute gem of a web host. You'll get
            to see first-hand how easy it is to deploy a website with them. They also provide many
            utilities that can enhance your static-site experience, which are out of the scope of
            this article.
          </p>
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>Getting Started with Next.js</h2>
          <p style={blogStyles.contentStyle}>
            I'm not going to spend a lot of time here, because the Next.js docs are amazing. They
            even gamified learning Next by giving you points for completing steps in the tutorials.
            I love it. So, check them out for any gaps I leave here.
          </p>
          <p style={blogStyles.contentStyle}>So, for the quickest of quickstarts:</p>
          <ul style={blogStyles.contentStyle}>
            <li style={listStyles}>
              Create a new directory your machine:{' '}
              <pre style={blogStyles.codeSampleStyling}>{`> mkdir hello-nextjs`}</pre>
            </li>
            <li style={listStyles}>
              Set it up as a JavaScript package:
              <pre style={blogStyles.codeSampleStyling}>{`> cd hello-nextjs
> yarn init -y
`}</pre>
            </li>
            <li style={listStyles}>
              Install next, react, and react-dom:
              <pre style={blogStyles.codeSampleStyling}>{`> yarn add react react-dom next`}</pre>
            </li>
            <li style={listStyles}>
              Add an index page:
              <pre style={blogStyles.codeSampleStyling}>{`> mkdir pages
> touch pages/index.js
`}</pre>
            </li>
            Add these contents to pages/index.js:
            <pre
              style={blogStyles.codeSampleStyling}
            >{`const Index = props => <h1>Hello, Next.js!</h1>

export default Index
`}</pre>
            <li style={listStyles}>
              Run next to serve that website!
              <pre style={blogStyles.codeSampleStyling}>{`> ./node_modules/.bin/next`}</pre>
            </li>
            <li style={listStyles}>
              And last, add the export command to your package.json scripts which should leave your
              package.json file looking like this:
              <pre style={blogStyles.codeSampleStyling}>{`{
  "name": "hello-nextjs",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "export": "next build && next export"
  },
  "dependencies": {
    "next": "^8.0.3",
    "react": "^16.8.3",
    "react-dom": "^16.8.3"
}`}</pre>
            </li>
          </ul>
          <p style={blogStyles.contentStyle}>
            That does feel like a lot - for a quickstart - but it gets us to a point where we can
            deploy. So, push that code up to a git repository, and let's go to{' '}
            <a href='https://netlify.com'>Netlify</a>!
          </p>
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>Deploying with Netlify</h2>
          <p style={blogStyles.contentStyle}>
            Sign up (or log in) and you should see a screen that looks like this:
          </p>
          <img
            style={imageStyle}
            src='/static/images/netlify-new-site.png'
            alt='netlify user page with button to create new site from git'
          />
          <p style={blogStyles.contentStyle}>
            Click on the 'New Site from Git' button, and then select where you pushed your git repo
            (mine is on GitHub). Now, you may not have done this before, so you'll have to authorize
            Netlify on GitHub. It should just be a matter of connecting your GitHub account and then
            agreeing to authorize it when you're redirected. If you have any trouble with that, let
            me know, and I'll do my best to help you.
          </p>
          <p style={blogStyles.contentStyle}>
            Once you have authorized Netlify, you should be able to select the repo you created
            earlier:
          </p>
          <img
            style={imageStyle}
            src='/static/images/select-repo.png'
            alt='netlify repo select page'
          />
          <p style={blogStyles.contentStyle}>
            Then, you'll need to tell Netlify which branch you want to deploy from and how to build
            your site. Rather than explaining, just make sure that your deploy page looks like this:
          </p>
          <img
            style={imageStyle}
            src='/static/images/set-up-deploy.png'
            alt='options for which branch to deploy and how to deploy it'
          />
          <p style={blogStyles.contentStyle}>
            Click 'Deploy Site' and you'll be redirected to a page that looks like this:
          </p>
          <img
            style={imageStyle}
            src='/static/images/deploying-site.png'
            alt='page displaying status of site deploy'
          />
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>Conclusion</h2>
          <p style={blogStyles.contentStyle}>
            And that's it! You now have a deployed static site that anyone can visit. Netlify
            generated a domain for you that you can share with anyone who wants to see your new
            website. You can add a custom domain later, if you'd like.
          </p>
          <p style={blogStyles.contentStyle}>
            If you followed along and created a site with me today, please share it with me on{' '}
            <a href='https://twitter.com/khalligans47'>Twitter</a>. I would love to see what you
            made! Here's mine:{' '}
            <a href='https://festive-bardeen-13118b.netlify.com/'>
              https://festive-bardeen-13118b.netlify.com/
            </a>
          </p>
        </section>
      </article>
    </div>
  </BlogLayout>
)

export default Post

const imageStyle = {
  display: 'block',
  height: 500,
  width: 800
}

const listStyles = {
  marginBottom: 15
}
