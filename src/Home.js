import React from 'react'
import demo from './demo.mp4'

const Home = () => (
  <div className="landing">
    <header>
      <video autoPlay loop playsInline className="demo" src={demo} />
      <div className="summary">
        <h1>Gistz</h1>
        <p>Generate your GitHub gist to Post:</p>
        <ol>
          <li>
            Go to a gist in <strong>GitHub Gist</strong>
          </li>
          <li>Replace gist.github.com with gistz.netlify.com</li>
          <li>There's no step three</li>
        </ol>

        <a
          className="button"
          href="/ThaddeusJiang/52eac5dda788ab05fc4dd0b08ff8d6f6"
        >
          Try it
        </a>

        <div className="author">
          <iframe
            title="github-start"
            src="https://ghbtns.com/github-btn.html?user=ThaddeusJiang&repo=gistz&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="160px"
            height="30px"
          />
          <i>
            by <a href="https://github.com/ThaddeusJiang">@ThaddeusJiang</a>
          </i>
        </div>
      </div>
    </header>
  </div>
)

export default Home
