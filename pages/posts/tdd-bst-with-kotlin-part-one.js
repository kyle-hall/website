
import BlogLayout from '../../components/BlogLayout'

const Post = props => (
  <BlogLayout>
    <h1 style={{fontFamily: ['Montserrat', 'sans-serif'], fontSize: '3em'}}>Test-Driven BST with Kotlin, Part 1</h1>
    <article>
      // I feel like there needs to be some sort of introduction here.
      <section>
        <h2 style={{fontFamily: ['Montserrat', 'sans-serif']}}>Quick TDD Crash Course</h2>
        <p style={{fontFamily: ['Sarabun', 'sans-serif']}}>
        Alright, for those who don't know, or maybe need a refresher, test-driven development
        is a process for writing better code by writing the tests first. Test-driven development follows
        a three-step process:
        </p>
        <ol style={{fontFamily: ['Sarabun', 'sans-serif']}}>
          <li>Write the test. See it fail.</li>
          <li>Write or change some code to make the test pass.</li>
          <li>
            Once you're green, refactor the code you wrote so it isn't just a mad grab at the easiest thing you could
            do to make your tests pass.
          </li>
        </ol>
        <p>
          This process ensures that you know your code works, at least as well as you've tested it. Starting with a failing test gives you a place to start and a clear goal in mind: "I need
          to fix this thing and make the test pass." Then, when make your code changes and see the test go green, you know your code actually works because
          the tests failed before you wrote it and passes aftewards. And for me, this boosts my developer happiness, as well.
          If I start with a failing test, I get to start with something that is broken. Writing the code that makes the tests all go green feels
          good because I fixed the broken thing.
        </p>
      </section>
      <section>
        <h2 style={{fontFamily: ['Montserrat', 'sans-serif']}}>The Data Structure: Binary-Search Tree (BST)</h2>
        <p style={{fontFamily: ['Sarabun', 'sans-serif']}}>
          A binary-search tree is a special kind of tree in computer science. It has four main properties we'll concern ourselves with today:
          <ol>
            <li>Each node the in the tree may have up to two children.</li>
            <li>All of the nodes that are left children of a given node are less than that node.</li>
            <li>All of the nodes that are right children of a given node are greater than that node.</li>
            <li>While not strictly true of all BSTs, our BST will not store duplicate values.</li>
          </ol>
        </p>
        <p>
          A note before we move on to the implementation: There are a couple different ways we could implement this BST, imperative and recursive.
          Briefly, the difference is that the imperative approach modifies the BST in place, while the recursive approach returns a new tree when
          operated on. I tend to like a functional programming style, so I'll be writing a recursive BST for this article. I'll likely go into more detail
          about functional programming in a future article.
        </p>
      </section>
      <section>
        <h2>The Implementation</h2>
        <p>
          As the title mentions, we'll be using <a href="https://kotlinlang.org/">Kotlin</a>, a relatively new programming language developed by Jetbrains.
          We can use Gradle to set up our project. Now, I like the JVM, and Gradle, so I'll do a separate article explaining more about creating new Gradle-based
          projects in the future. But, that's outside the scope of this article, so, for now, here's the <span>build.gradle</span> file you'll need to get started
          with this project, in case you'd like to code along with me.

          <pre style={codeSampleStyling}>
{`buildscript {
    ext.kotlin_version = '1.2.61'

    repositories {
        mavenCentral()
    }

    dependencies {
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }
}

plugins {
    id 'org.jetbrains.kotlin.jvm' version '1.2.61'
}

apply plugin: 'kotlin'
apply plugin: 'application'
apply plugin: 'jacoco'

mainClassName = 'MainKt'

defaultTasks 'run'

repositories {
    mavenCentral()
}

test {
    testLogging {
        exceptionFormat = 'full'
    }
}

jacocoTestReport {
    reports {
        html.enabled = true
        html.destination file("test-results/junit/html")
    }
}

dependencies {
    compile "org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version"
    testCompile "org.jetbrains.kotlin:kotlin-test"
    testCompile 'junit:junit:4.11'
    testCompile "org.jetbrains.kotlin:kotlin-test-junit:$kotlin_version"
}

check.dependsOn jacocoTestReport
`}
          </pre>
          Be sure to replace the Kotlin version with the one you have. If you're using an IDE, such as IntelliJ, it should warn you if
          the version I have is different from its version.
        </p>

        <p>
          Okay, so, to get started, put that build.gradle file at the root of your project directory. Then, create
          a series of nested directories that should end up looking like this:
          <pre style={codeSampleStyling}>
{`/binary-search-tree
  src/
    main/
      kotlin/
    test/
      kotlin/
`}
          </pre>
        </p>
      </section>
    </article>
  </BlogLayout>
)

export default Post

const codeSampleStyling = {
  backgroundColor: '#DDD',
  paddingLeft: 15,
  paddingTop: 20,
  paddingBottom: 20,
  borderRadius:5,
  fontFamily: ['Courier New', 'sans-serif'],
  fontSize: 14
}
