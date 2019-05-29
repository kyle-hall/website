import React from 'react'
import Link from 'next/link'

import PostLayout from '../../components/layouts/PostLayout'

const Post = props => (
  <PostLayout title={'Test-Driving React Hooks'}>
    <p>
      <Link href={'/posts/introducing-react-hooks'}>
        <a>Last time</a>
      </Link>
      , I talked about what React hooks are, how they enable deeper use of functional components,
      and why you might want to use functional components over class-based components. This time,
      I'd like to focus on testing React hooks, specifically test-driving them into an application.
    </p>
    <p>
      I'd like to note up front that I'm going to be assuming a couple things in this article.
      First, I assume you have npm installed and know how to use it. And second, you know how to
      create a new react application (I recommend using{' '}
      <a href='https://facebook.github.io/create-react-app/docs/getting-started'>
        create-react-app
      </a>{' '}
      to get started if you don't know how or just want to get something started quickly).
    </p>
    <section>
      <h2>Testing Options for Hooks</h2>
      <p>
        Before getting too far, I'd like to start with a quick primer on testing React. I plan to
        write a much bigger article about this, but an introduction to the main players should be
        sufficient for today.
      </p>
      <h3>The Players</h3>
      <p>There are three main players for testing in React:</p>
      <ul>
        <li>Jest</li>
        <li>Enzyme</li>
        <li>react-testing-library</li>
      </ul>
      <p>
        <a href='https://jestjs.io/'>Jest</a> is a very popular JavaScript test runner. It provides
        many utilities for testing your applications, and I highly recommend it.
      </p>
      <p>
        <a href='https://airbnb.io/enzyme'>Enzyme</a> is a testing utility for React. It provides
        the ability to render the components in your application and search for elements in the
        render tree.
      </p>
      <p>
        <a href='https://testing-library.com/docs/react-testing-library/intro'>
          react-testing-library
        </a>{' '}
        is another testing library for React that sells itself as a replacement for Enzyme.
      </p>
      <p>
        For this article, we will be using Jest and react-testing-library. I am far more familiar
        with Enzyme, but, unfortunately, as of the time of this post it does not fully support hooks
        at this time. Follow <a href='https://github.com/airbnb/enzyme/issues/2011'>this</a> GitHub
        issue for more information and updates on its support for React hooks.
      </p>
    </section>
    <section>
      <h2>Getting Set Up</h2>
      <p>
        Assuming you have a new React project, we just need to add a couple things to get going.
        First, check your
        <span className='inset-code-sample'>package.json</span> file to ensure you have at least
        version <span className='inset-code-sample'>16.8.0</span> of React, as that is the first
        version containing hooks in the stable build. Next head to your terminal and add the
        dependencies for react-testing-library:
      </p>
      <h3>Using npm</h3>
      <pre className='code-example'>{`> npm install --save-dev react-testing-library`}</pre>
      <h3>Using yarn</h3>
      <pre className='code-example'>{`> yarn add --dev react-testing-library`}</pre>

      <p>
        Now, I would suggest you read the docs for yourself, such as they are in their current
        state. I had some difficulty understanding what I need for testing this hook. The relevant
        links are the following:
        <ul>
          <li>
            <a href='https://github.com/testing-library/react-testing-library'>The GitHub repo</a>
          </li>
          <li>
            <a href='https://testing-library.com/https://testing-library.com/'>
              The home of the docs
            </a>
          </li>
          <li>
            <a href='https://testing-library.com/docs/react-testing-library/intro'>
              The docs for react-testing-library
            </a>
          </li>
        </ul>
      </p>
    </section>
    <section>
      <h2>Driving the Hook In</h2>
      <p>
        Great, so with that done, we can drive in this hook. The hook we'll be using, as I mentioned
        before will be the <span className='inset-code-sample'>useState</span> hook. And we'll be
        making a simple counter with a button to increment it. Nothing fancy for this; using the
        testing library is the important part here. And so, we begin with a test in a file called{' '}
        <span className='inset-code-sample'>HookCounter.spec.js</span>:
      </p>
      <pre className='code-example'>
        {`import { render, getByTestId, fireEvent } from 'react-testing-library'

import HookCounter from './HookCounter'

describe('HookCounter', () => {
  it('should increment the counter', () => {
    const { container } = render(<HookCounter />)

    const increment = getByTestId(container, 'increment')

    fireEvent.click(increment)

    expect(getByTestId(container, 'count-display').textContent).toBe('1')
  })
})
`}
      </pre>
      <p>
        There's a lot going on there, so let's take a closer look. First, we import the things we
        need from react-testing-library. We get a function to render the component, a function to
        find the button we'll be using to increment the counter, and, finally, a way to simulate a
        click on that button. Then we use that render function inside our test - designated by the{' '}
        <span className='inset-code-sample'>it</span> - and deconstruct the rendered container out
        of the object that render function produces. Next, we find our button by the test ID we'll
        set up later and fire off a fake click event on it. That should simulate the behavior we
        want, namely that clicking the button increments the counter. Finally, we use Jest's
        assertion <span className='inset-code-sample'>expect</span> to assert the content of the
        count display has been changed from 0 - the initial value we assume will be used by the
        component - to 1.
      </p>
      <p>Cool, so we run the test and that should fail.</p>
      <p>
        And it's a simple failure. We haven't created the{' '}
        <span className='inset-code-sample'>HookCounter</span> component yet. That's easy to fix:
      </p>
      <pre className='code-example'>
        {`import React from 'react'
            
export default const HookCounter = () => <div></div>`}
      </pre>
      <p>
        That will give us enough to get through to the failure to find our button. That's a good
        start. The empty div we had before won't cut it, anymore. Let's add some content:
      </p>
      <pre className='code-example'>
        {`import React from 'react'
            
export default const HookCounter = () => (
  <div>
    <h3 data-testid={'count-display}>0</h3>
    <button
      data-testid={'increment'}
      type="button"
      style={{width: 260, height: 50, backgroundColor: '#39CCCC'}}
    >+
    </button>
  </div>
)`}
      </pre>
      <p>
        Perfect, that gets us to the assertion failure. I worked ahead a little, adding the count
        display and doing some minor styling so we could get to that assertion failure faster.
      </p>
      <p>
        Now, the assertion says still have 0 for the display. Why's that? Well, we haven't started
        using the hook, yet! So, let's get that in there. To do that, we need to import the{' '}
        <span className='inset-code-sample'>useState</span> hook and create a click handler:
      </p>
      <pre className='code-example'>
        {`import React, { useState } from 'react'
            
export default const HookCounter = () => {
  const { state: { count }, incrementCount } = useState({ count: 0 })
  
  return (
    <div>
      <h3 data-testid={'count-display}>{count}</h3>
      <button
        data-testid={'increment'}
        type="button"
        style={{width: 260, height: 50, backgroundColor: '#39CCCC'}}
        onClick={() => incrementCount({count: count + 1})}
      >+
      </button>
    </div>
  )
}`}
      </pre>

      <p>
        And that should do it. We should have a passing test now. Notice that instead of naming my
        deconstructed values from useState <span className='inset-code-sample'>state</span>
        and <span className='inset-code-sample'>setState</span>, I changed their names as I
        deconstructed them to make more sense in the app.
      </p>
    </section>
    <section>
      <h2>Conclusion</h2>
      <p>
        I know this was a pretty simple example, but I want to make the business logic simple in
        order to focus on the testing aspects. The code I originally wrote to figure this out can be
        found in this <a href='https://github.com/kyle-hall/react-hooks-with-typescript'>repo</a>. I
        was working on more than just one thing there - including TypeScript - but I liked what I
        ended up with, and maybe the steps of the commits will be helpful.
      </p>
      <p>
        If you have any comments or suggestions - or maybe just liked the article :) - please feel
        free to get in touch with me via Twitter using the link below. That's all for today. Thanks
        for reading, and I'll see you next time.
      </p>
    </section>
  </PostLayout>
)

export default Post
