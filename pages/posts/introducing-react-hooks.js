import BlogLayout from '../../components/BlogLayout'

const Post = _ => (
  <BlogLayout>
    <div className='post-container'>
      <h1 className='post-container__h1--big'>Introducing React Hooks</h1>
      <article>
        <p>
          React Hooks are the best new thing from the popular JavaScript framework. They offer an
          alternative to class-based components, which I am really happy about, and, apparently, so
          are a lot of other people. This feature went from being in alpha at the beginning of the
          year to getting released in a stable version in March.
        </p>
        <section>
          <h2>Class-based vs Functional Components</h2>
          <p>
            As someone who likes functional programming, I prefer functional components better over
            class-based components. But, what's the difference?
          </p>
          <h3>Functional Components</h3>
          <p>
            Functional components are very simple. They are React components that are just
            JavaScript functions. They take props as a function argument, can process those props or
            calculate other data needed for the render, and then return a chunk of JSX.
          </p>
          <p>
            This is a much more straightforward and simple way to create React components. It's also
            my personal preference as someone who likes functional programming. It is so much
            cleaner and doesn't have any of the problematic characteristics of ES6 classes that I'll
            get to below.
          </p>
          <h3>Class-based Components</h3>
          <p>Here's a quick list of the characteristics of class-based components:</p>
          <ul>
            <li>
              They are declared using the <span className='inset-code-sample'>class</span> keyword
              introduced in the ECMAScript 2015 standard.
            </li>
            <li>
              They extend the React component like so:{' '}
              <span className='inset-code-sample'>class ZenComponent extends React.Component</span>
            </li>
            <li>
              Class components that receive props must define a constructor that takes those props,
              call super with those props or risk inconsistencies with the React framework.
            </li>
            <li>
              Class-based components also end up using{' '}
              <span className='inset-code-sample'>this</span>
              quite a bit, which isn't exactly problematic, but it is a highly misunderstood feature
              in JavaScript. This leads to a lot of headaches when people think it will work exactly
              this <span className='inset-code-sample'>this</span> in Java or some other programming
              language.
            </li>
          </ul>
          <p>
            And that's all well and fine. However, there's something going on in the background that
            I've been avoiding until now. ES6 classes are problematic at best. They were added in to
            make programmers from other languages feel more comfortable when they were forced to use
            JavaScript as they were pushed to be more "fullstack". What you get instead is a feature
            that looks like it does what you need until you start trying to{' '}
            <span className='inset-code-sample'>typeof</span>
            or things that rely on a classical inheritance mindset. Javascript is not a lanaguage
            that uses classical inheritance; it uses prototypal inheritance. Classes are just
            syntatic sugar on top of the old function way of creating object in JavaScript. And,
            thus, I would like to avoid ES6 classes whenever I can.
          </p>
          <p>
            If you like to learn more about the problems with ES6 classes, here are some resources:
            <ul>
              <li>
                <a href='https://github.com/petsel/not-awesome-es6-classes'>
                  Not Awesome ES6 Classes
                </a>
              </li>
              <li>
                Kyle Simpon's
                <a href='https://davidwalsh.name/javascript-objects'> "Inherited a Mess"</a> series
              </li>
              <li>
                And Eric Elliot's series on this topic:{' '}
                <a href='https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3'>
                  The Two Pillars of JavaScript
                </a>
              </li>
            </ul>
          </p>
          <h3>So... Why would I ever use class-based components?</h3>
          <p>
            Well, the main reason concerns state and life-cycle methods. Until quite recently,
            class-based components were the only way to have local component state or to access
            life-cyle methods in a React component. Functional components were relegated to the
            "dumb view" portion of React apps.
          </p>
          <p>This leads us nicely into the main topic for today...</p>
          <img
            src='https://media.giphy.com/media/ehTMCiPzFTiak/giphy.gif'
            alt="Nintendo's Super Smash Brother New Challenger Message"
          />
        </section>
        <section>
          <h2>React Hooks</h2>
          <p>
            React Hooks are THE big new feature of React. And what do they do? They make functional
            components viable for use throughout your entire app. Because they finally give
            functional components a way to have their own local state. They also, after a fashion,
            give you the ability to do the same things you would do in a{' '}
            <span className='inset-code-sample'>componentDidMount</span>
            method in a class-based component. That comparison isn't one-to-one, but I haven't done
            enough research - and it's outside of the scope of this introduction - to understand and
            explain how things are different between things like the{' '}
            <span className='inset-code-sample'>useEffect</span> hook and{' '}
            <span className='inset-code-sample'>componentDidMount</span>. So, more to come on that
            in the future.
          </p>
          <p>
            There are many hooks from React. The simplest is{' '}
            <span className='inset-code-sample'>useState</span>, which I'll be discussing here.
            React also gives you the tools to create custom hooks, which I have not explored yet, so
            I'll leave that for a future post.
          </p>
          <p>
            Alright, on to the code! The next example will show a simple usage of the{' '}
            <span className='inset-code-sample'>useState</span>
            hook:
          </p>
          <pre className='code-example'>{`
const HookCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p data-testid={'count-display'}>{count}</p>
      <button
        data-testid={'increment'}
        type="button"
        style={buttonStyle}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  )
}
`}</pre>
          <p>Cool, so let's break that down.</p>
          <ul>
            <li>We've create a functional component, so far so good.</li>
            <li>
              Then we see something that may look a little weird:{' '}
              <span className='inset-code-sample'>const [count, setCount] = useState(0)</span>
              <p>
                What's going on there? Well, we are deconstructing two objects out of the return
                value of the useState hook. We called useState with 0, and that sets the initial
                state for this component. Then we get back the current state - we're calling it
                count - and a function that lets us change that state, the second variable there
                called setCount. We just as easily could have called those things anything else we
                want, becase of the way JavaScript destructuring works.
              </p>
            </li>
            <li>
              The rest looks fairly straightforward now that we understand that. The count variable
              is display in the text of the paragraph tag, and the button gets the setCount function
              as its click handler.
            </li>
            <li>
              This should create a component that acts as a simple counter:{' '}
              <a href='https://competent-hamilton-c8b4ff.netlify.com/'>Check it out!</a>
            </li>
          </ul>
          <p>
            What you should see - besides some unrelated work I was doing to try out TypeScript with
            React - is a button that increments the display!
          </p>
          <img src='https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif' alt='office party' />
          <p>Wait, hold on. What's that I hear you say?</p>
          <p>"So you made a counter with a button, big whoop"</p>
          <p>
            And... okay, yeah this isn't the most exciting example. It is pretty simple. But the
            point is I didn't have to use ES6 classes to create a React component with local state!
            And that's awesome!
          </p>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>
            If this was at all interesting, I highly recommend checking out React hooks. They are
            fantastic, and I'm already loving them. Check out the{' '}
            <a href='https://reactjs.org/docs/hooks-intro.html'>docs</a>
            for a quick start.
          </p>
          <p>
            Oh, and if you were a little underwhelmed by the counter example, check out this{' '}
            <a href='https://elated-bohr-7e3d49.netlify.com/'>form</a> I created using hooks that
            uses the useState hook and also gets a good example of a closure and currying at the
            same time. I used <a href='https://elated-bohr-7e3d49.netlify.com/'>NES.css</a> to style
            that form, because it was fun.
          </p>
        </section>
      </article>
    </div>
  </BlogLayout>
)

export default Post
