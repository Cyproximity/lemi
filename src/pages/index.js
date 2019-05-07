import React from "react"

import "../sass/index.scss"
import Image from "../components/image"
import Download from "../components/download"

const IndexPage = () => (
  <div className="lemi">
    <div className="lemi-container">
      <header className="lemi-intro">
        <Image src="lemi-header.jpg" className="lemi-identity" />
        <h2>Welcome to Lemi, Nicholas!</h2>
        <p>
          Penbrothers and Lemi have teamed up to help you share recommendations
          to your colleagues and discover more from your community.
        </p>
      </header>

      <div className="verification-panel">
        <span>091785</span>
        <p>
          Download Lemi and use this code to access to exclusive content from
          Penbrothers on Lemi.
        </p>
      </div>

      <Download />

      <section className="lemi-section">
        <h2>Discover. Plan. Go.</h2>
        <p>
          Lemi organizes recommendations into beautiful lists, and instantly
          maps them out for you.
        </p>

        <div className="lemi-video">
          <button className="lemi-btn" type="button">
            Play video
          </button>
        </div>
      </section>

      <section className="lemi-section">
        <h2>Lemi lets you...</h2>
        <ul className="lemi-suggestions">
          <li>
            <div className="lemi-context">
              <h3>Discover insider secrets</h3>
              <p>
                See recommendations from the whole Penbrothers community in one
                map.
              </p>
            </div>
            <div className="lemi-rep">
              <Image src="panel.png" />
            </div>
          </li>
          <li>
            <div className="lemi-rep">
              <Image src="card.png" />
            </div>
            <div className="lemi-context">
              <h3>Plan trips with colleagues</h3>
              <p>
                Invite co-workers to on lists for brainstorming ideas you are,
                whenever you're going.
              </p>
            </div>
          </li>
          <li>
            <div className="lemi-context">
              <h3>Go anywhere</h3>
              <p>
                Instantly calculate distances and travel times to make the most
                out of your trip.
              </p>
            </div>
            <div className="lemi-rep">
              <Image src="map.png" />
            </div>
          </li>
        </ul>
      </section>

      <section className="lemi-section">
        <h2>Here are some list to start you off!</h2>
        <p>Find out what others recommending on lemi.</p>
        <ul className="lemi-list">
          {[
            { img: "card-1", i: "Party in Thonglor", loc: "Bangkok" },
            { img: "card-2", i: "English Mornings", loc: "London, Slough" },
            { img: "card-3", i: "Delicious Dai Pai Dongs", loc: "Hong Kong" },
          ].map((card, i) => (
            <li className="lemi-card" key={i}>
              <Image src={`${card.img}.jpg`} className="lemi-preview" />
              <p>{card.i}</p>
              <span>{card.loc}</span>
            </li>
          ))}
        </ul>

        <a className="lemi-btn" href="https://lemi.travel/top-lists">
          See more lists
        </a>
      </section>

      <section className="lemi-cta">
        <Image src="lemi-avatar.png" className="lemi-avatar" />
        <p>
          Lemi is better in your pocket. Discover more and create your own List
          in our iOS App.
        </p>
      </section>
      <Download />
    </div>
  </div>
)

export default IndexPage
