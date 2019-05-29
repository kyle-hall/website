import BlogLayout from '../../components/BlogLayout'
import blogStyles from '../../common/blogPostStyles'

const Post = props => (
  <BlogLayout>
    <div className='post-container'>
      <h1 className='post-container__h1--big'>My Learning Plan for the Year</h1>
      <p className='intro'>
        I have a lot of trouble focusing on one thing at a time when it comes to what I should learn
        to get better at programming. I have a lot of interests, and there are always so many new
        things happening, that I often jump from thing to thing several times each month. I'm
        putting this post together to talk about what I plan to learn this year, and try to put up
        some reminders about what I'm trying to accomplish professionally. It's my hope this will
        help me focus and cut down on the churn.
      </p>
      <article>
        <section>
          <h2>The Problem</h2>
          <p>
            In general, I have a lot of interests. I am currently a web developer with more
            experience using back-end technologies than front-end technologies. I guess I would
            classify myself as an application developer, though, because I have a fair amount of
            experience building UIs using JavaScript frameworks like React and Vue. I want to get
            better at those things, but I would also like to learn a lot more about working on the
            front of the front-end, as Brad Frost talks about in this episode of the{' '}
            <a href='https://shoptalkshow.com/episodes/334/'>ShopTalk Show</a>. CSS - especially CSS
            Grid is a major interest of mine, but I'm not terribly good at laying out whole pages,
            so I'd like to get better at that.
          </p>
          <p>
            But, I would also like to do more machine learning. I think this is going to be a big
            area of growth, and I would like to get into it. I do think there's a fair bit of FOMO
            (Fear Of Missing Out) on this one, but it also looks like a high-demand skill in the
            near future that I don't want to be left behind on.
          </p>
          <p>
            And, in addition to all of that, I am still trying to learn game programming. I have
            swayed back and forth on whether to keep working at this for years. I have also had a
            lot of trouble picking which engine to use, and, in general, just had a lot of trouble
            really getting started. This is in large part due to my inability to focus on the same
            thing for more than a couple weeks at a time. I still want to do this, but I also feel
            like I need to be getting better at my job-specific skills, too.
          </p>
          <p>
            This leads to a lot of internal pressure, which often leaves me feeling paralyzed
            concerning what I should learn next or what I should be focusing on. And think this all
            stems from a complete lack of a plan on my part.
          </p>
        </section>
        <section>
          <h2>The Plan</h2>
          <p>
            So, here's the plan. My focus for this year is becoming a more confident full-stack
            developer. I want to be reasonably confident that I could take a design and an app idea,
            develop the front- and back-end for that app, then deploy it out to production. Right
            now, I don't feel confident about my ability to do that, mostly in the front of the
            front-end area. As such, there are a few technologies I am trying to focus on this year:
          </p>
          <ul>
            <li>React</li>
            <li>GraphQL</li>
            <li>HTML and CSS</li>
            <li>SQL</li>
            <li>Serverless deployment</li>
            <li>Kotlin for back-end work</li>
            <li>Functional Programming</li>
          </ul>
          <p>
            With this list in hand - or, computer rather - I know what I should or should not be
            focusing on at any given time. If it's on the list, good. Otherwise, ignore for now. I
            still need to prioritize this list, but scoping everything I am interested in down this
            list is such a big help. I understand that this may still be a pretty big list. But,
            it's a lot smaller than what I started with, so I'm at least moving in the right
            direction.
          </p>
        </section>
        <section>
          <h2>How I'll Ignore the Noise</h2>
          <p>Right now, I have a few main sources of noise:</p>
          <ul>
            <li>
              <a href='https://tympanus.net/codrops/'>Codrops</a>
            </li>
            <li>Email Newsletters (seriously, my current count is more than two dozen)</li>
            <li>The people around me talking about the cool things they do</li>
          </ul>
          <p>
            The first two are easy. I found a good site-blocking extension for my browser to stop me
            from going to Codrops, and I have filtered all of those newsletters into their own
            folders in my email so they stop popping up on my phone.
          </p>
          <p>
            That last one is difficult, though. I work with some amazing people who all work on
            these great projects. My only real plan here is to put my current focus up somewhere in
            my workspace and keep looking at it to keep myself on track. If anyone has a good
            suggestion for this, I would be glad to hear it.
          </p>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>
            My main goal for this article was to explain some of my thought processes to help myself
            and hopefully someone else dealing with this kind of internal presssure. My secondary
            goal was to force myself to be very public about the thing I am going to focus on for
            the next month. That thing is building React applications with an emphasis on using
            hooks. I plan to work on this until the end of May. That is what I am trying to stick
            to, and I'll report back, hopefully with links to cool apps I've built, at the end of
            May.
          </p>
        </section>
      </article>
    </div>
  </BlogLayout>
)

export default Post
