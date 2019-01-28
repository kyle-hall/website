
const Post = props => (
  <div>
    <h1>Test-Driven Data Structures with Kotlin, Part 1</h1>
    <article>
      <section>
        <h2>Quick TDD Crash Course</h2>
        <p>
        Alright, for those who don't know, or maybe need a refresher, test-driven development
        is a process for writing better code by writing the tests first. Test-driven development follows
        a three-step process:
        </p>
        <ol>
          <li>Write the test. See it fail.</li>
          <li>Write or change some code to make the test pass.</li>
          <li>
            Once you're green, refactor the code you wrote so it isn't just a mad grab at the easiest thing you could
            do to make your tests pass.
          </li>
        </ol>
      </section>
      <section>
        <h2>The Data Structure: Binary-Search Tree (BST)</h2>
        <p>A binary-search tree is a special kind of tree in that each node in the tree can have up to two children</p>
      </section>
    </article>
  </div>
)

export default Post
