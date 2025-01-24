import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text3">Homepage</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text5">
                      Engaging homepage design to attract users
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text1">Job Posting Form</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text6">
                      User-friendly form for employers to post job listings
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text2">Dashboard</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text4">
                      Personalized dashboard for users to manage job
                      applications and settings
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1697089843672-eece9d6a7848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzMyNjg1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1653669486784-f9526fcc2b5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzMyNjg1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature1Title: undefined,
  feature3ImgAlt: 'Dashboard Image',
  feature3Description: undefined,
  feature1ImgAlt: 'Homepage Image',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1544495127-ab09a0bc105f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzMyNjg1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Job Posting Form Image',
  feature1Description: undefined,
  feature2Description: undefined,
}

Features25.propTypes = {
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
}

export default Features25
