import BlogLayout from '../../components/BlogLayout'
import blogStyles from '../../common/blogPostStyles'

const Post = props => (
  <BlogLayout>
    <div style={blogStyles.containerStyle}>
      <h1 style={{ fontFamily: ['Montserrat', 'sans-serif'], fontSize: '3vw' }}>
        Gradle Test Output and Coverage Tools
      </h1>
      <p style={blogStyles.contentStyle}>
        So, I've got a little story for you today about Gradle. It's a funny/frustrating story of
        one developer's journey over the course of several months towards a better understanding of
        his tools.
      </p>
      <article>
        <section>
          <h2 style={blogStyles.headerStyles}>A Little Background</h2>
          <p style={blogStyles.contentStyle}>
            I started off programming with Java. I used it for school, and writing Java was my first
            job out of college. So, for better or worse, I'm a fan of the JVM and its many powerful
            languages. I recently switched from Scala to Kotlin - more to come on that later - and I
            wanted to use Gradle as my build tool. Now, being a good little developer, I wanted to
            set up testing and continuous integration on my projects to ensure I was writing the
            best quality code I could.
          </p>
          <p style={blogStyles.contentStyle}>
            So, with this goal in mind, I searched around for a test coverage tool, and finally
            settled on <a href='https://www.eclemma.org/jacoco/'>JaCoCo</a>. It looked like a
            well-used option, and I didn't want to spend too much time on picking a tool when I was
            really just interested in generating the reports for my simple project. After some work,
            I got the necessary configuration added to my gradle file to generate an HTML report of
            my coverage from Jacoco. Success! I patted myself on the back for being a good little
            developer. And this led me into a very frustrating three or four months.
          </p>
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>The Problem</h2>
          <p style={blogStyles.contentStyle}>
            When I run my test suites, I like to see, right there in my terminal, the names of the
            tests and whether they passed or failed. I feel that this is a very small thing that
            most developers would take for granted. I agree. Just one little problem: I wasn't
            getting them. Every time I ran my tests from the terminal, I got{' '}
            <span>Build Success</span> if they all passed. And that's it. Nothing about which tests
            ran, how long they took, anything. Odd.
          </p>
          <p style={blogStyles.contentStyle}>
            Was it a problem with Gradle? I intentionally failed one of my tests and re-ran them.
            Build failed with the name of the test and how it failed right there in the terminal.
            Hmm. Okay, that's what I wanted to see. So, why didn't I get that for the passing tests?
          </p>
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>A Few Dead Ends</h2>
          <p style={blogStyles.contentStyle}>
            As I was still pretty new to Gradle, I went to the Internet for help. I came across many
            versions of the same basic question on StackOverflow: "How do I get Gradle to output my
            tests in the terminal?" There were a few common suggestions:
          </p>
          <ul style={blogStyles.contentStyle}>
            <li>
              Run <span>gradle test -i</span> instead of <span>gradle test</span>. This didn't work
              for me. All I got was a list of all the tasks Gradle ran to execute my tests. This was
              enlightening, but didn't solve my problem.
            </li>
            <li>
              Add the following to your <span>build.gradle</span>:
              <pre style={blogStyles.codeSampleStyling}>{`test {
    testLogging {
        standardOutputStreams true
        events "passed", "skipped", "failed"
    }
}
                `}</pre>
              (Spoiler Alert: This is, mostly, the right thing to do. It's just that something else
              is wrong.)
            </li>
            <li>
              A Gradle plugin called "Gradle Test Logger Plugin". Now, because I just figured out
              what was wrong with my setup, this might actually work. I haven't tried it again. But,
              at the time, it looked like another dead end.
            </li>
          </ul>
          <p style={blogStyles.contentStyle}>
            And, as I mentioned before, I spent the last three or four months trying to figure this
            out. Every time I started a new Kotlin project, I copied over my build.gradle file. And
            on every new project, I saw the same thing. And it frustrated the hell out of me.
          </p>
          <p style={blogStyles.contentStyle}>Until today.</p>
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>The Solution</h2>
          <p style={blogStyles.contentStyle}>Today, I figured it out.</p>
          <p style={blogStyles.contentStyle}>
            I decided to try again after looking at another gradle project that did everything I
            wanted. And, when I looked at their Gradle file, they weren't doing a whole lot as far
            as setup for their tests. Considering everything I tried over the past few months, I was
            perturbed that they seemed to done it so easily.
          </p>
          <p style={blogStyles.contentStyle}>
            Comparing their test configuration to mine, the only difference I saw was that they use{' '}
            <span style={blogStyles.insetStyle}>tasks.withType(Test)</span> instead of just{' '}
            <span style={blogStyles.insetStyle}>test</span>. I was ready to try anything at that
            point because I had been trying to make this work for so long.
          </p>
          <p style={blogStyles.contentStyle}>So, I added it.</p>
          <p style={blogStyles.contentStyle}>And it didn't work.</p>
          <div>
            <img
              src='https://media.giphy.com/media/ReImZejkBnqYU/giphy.gif'
              alt='lego figure typing on computer throws it out of frustration'
            />
          </div>
          <p style={blogStyles.contentStyle}>
            Okay.... So, I sat there, staring at my code, frustrated beyond belief that I could not
            make this work. And then, something caught my attention. I'm not sure why, but my code
            coverage configuration suddenly stuck out to me. Could it be....? So, I cut out all
            references to JaCoCo. And, guess what?
          </p>
          <h3 style={blogStyles.headerStyles}>It Worked!</h3>
          <div>
            <img
              src='https://media.giphy.com/media/ToMjGpxFDidbjZxDbyw/giphy.gif'
              alt='lego figure typing on computer throws it out of frustration'
            />
          </div>
          <p style={blogStyles.contentStyle}>
            I re-ran my tests, and all of them were printed out with a neat little{' '}
            <span style={blogStyles.insetStyle}>PASSED</span>.
          </p>
        </section>
        <section>
          <h2 style={blogStyles.headerStyles}>Conclusion</h2>
          <p style={blogStyles.contentStyle}>
            Thus concludes my long and frustrating tale. I'm not sure what it is about JaCoCo, but
            running it with no configuration appears to make it swallow all test output. I need to
            do some more looking into this, because, while it's nice to have this output in my
            terminal, I really don't want to go without code coverage.
          </p>
        </section>
      </article>
    </div>
  </BlogLayout>
)

export default Post
