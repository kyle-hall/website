import React from 'react'

import PostLayout from '../../components/PostLayout'

const Post = (props) => (
  <PostLayout title="2020 Introduction">
    <header>
      <p>
        Happy (belated) New Year! And welcome! I have been on a hiatus of sorts for the last few
        months, but with the new year I'm getting back into blogging. As my first article for the
        year, I'll be writing about my hiatus as well as my focus and goals for the year to come.
      </p>
    </header>
    <section>
      <h2>Re-Introduction</h2>
      <p>
        Hi, my name is Kyle Hall, and I'm a software developer from Iowa in the United States. I
        have been working as a developer for the last 4 and half years, and I currently work for
        Pillar Technologies, a part of the Industry X.O group.
      </p>
      <p>
        Generally, I have a lot of interests in software development, but I love the web and I am
        trying to focus on front-end development right now. I have used React a lot, and I'm
        branching out into learning Vue (for philosophical reasons I'll be talking about in an
        upcoming article). I'm also trying to get better at styling and layout with CSS and HTML.
        And I care <em>a lot</em> about creating great website and web applications that are built
        well and can be used and enjoyed by as many people as possible.
      </p>
    </section>
    <section>
      <h2>My Hiatus</h2>
      <p>
        I started blogging last year, and I was presently surprised by the response I got. But,
        about halfway through the year, I got a whole new set of priorities. My wife gave birth to
        our second child, Lucia! She was born in July, and we are so happy she's here with us.
      </p>
      <p>
        Luckily, I was able to take a sizeable amount of time off from work, and I made the decision
        that I wouldn't be programming or blogging at all while I was home. After I went back to
        work in September, I intended to start blogging again, but finding time with both hands free
        to type up articles was difficult with a 3 year-old and 3 month-old to take care of in the
        evenings. Then, the holidays loomed, and I just knew I wouldn't be getting any blogging done
        at all.
      </p>
      <p>
        And, really, this was fine. I enjoyed the time off and the opportunity to focus on other
        things. But, coming into the new year, I knew I wanted to start blogging about the things
        I've been learning again. So, this article is the first of many to come throughout the year,
        and I'm excited to have the opportunity to share my experiences and things I've learned.
      </p>
    </section>
    <section>
      <h2>Goals for the Year</h2>
      <p>
        Despite the fact it's now - *checks calendar* gosh, well I guess it's April - I would like
        to lay a few goals for my professional life as a developer for the year.
      </p>
      <ul>
        <li>Focus on functional programming</li>
        <li>Spend time with a functional language that doesn't let me cheat</li>
        <li>
          Get better at front-end development, specifically styling and UX
          <ul>
            <li>Experiment with Sass, PostCSS, and atomic CSS using Tailwind/Tachyons</li>
            <li>Build full, responsive web pages</li>
          </ul>
        </li>
        <li>Learn basic accessibility for building the open web</li>
        <li>
          Actually build things
          <ul>
            <li>Have three things in production by the end of the year</li>
          </ul>
        </li>
        <li>Work with GraphQL</li>
        <li>Get an article published on CSS Tricks</li>
        <li>Publish a new article at least once a month</li>
        <li>
          Have fun with development by experimenting with new tech
          <ul>
            <li>
              Finite State Machines (I'm really excited about using{' '}
              <a href="xstate.js.org/">XState</a>)
            </li>
            <li>CSS and JS Animations</li>
            <li>Data Visualization</li>
            <li>3D Programming</li>
          </ul>
        </li>
      </ul>
      <p>
        And there they are, my goals for the year. I'll try to report back on them with an article
        each month.
      </p>
    </section>
    <section>
      <h2>Conclusion</h2>
      <p>
        That just about wraps up this re-introduction/plan for the year, but there's something I'd
        like to leave you with before I go. I've been thinking more and more about why I am a
        developer and came up with a list of questions that I want to be thinking about throughout
        the year. I'm big on introspection. Maybe one or more of them will help you reflect on your
        career/journey/etc. as a developer, too.
      </p>
      <ul>
        <li>What do I want to learn? Why?</li>
        <li>What am I making right now?</li>
        <li>What do I want to make?</li>
        <li>What is fun about programming?</li>
        <li>When do I feel the most accomplished or satisfied with my work?</li>
        <li>What brings me joy when programming?</li>
        <li>
          Do you really need to know all of those things, or do you feel pressured to learn some of
          them because you're afraid you won't be a real developer if you don't?
        </li>
        <li>What problems are you solving that you've never solved before?</li>
        <li>How can I have fun with development and really enjoy it like I used to?</li>
      </ul>
      <p>
        Hopefully, that gives you some things to think about and, even better, leads you to discover
        a few things about yourself that will make your life as a developer better.
      </p>
      <p>Thanks for reading; I'll see you in the next one.</p>
    </section>
  </PostLayout>
)

export default Post
