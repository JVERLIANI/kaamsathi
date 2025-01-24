import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features24-text4">Homepage</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text6">
                      Engaging landing page with featured jobs and search
                      functionality
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features24-text1">Job Posting Form</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text5">
                      Easy-to-use form for employers to post job listings
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features24-text2">Dashboard</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text3">
                      Personalized dashboard for job seekers and employers to
                      manage applications and listings
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature2Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1658285227285-1634543369d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzMyNjg1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature3ImgAlt: 'Dashboard Image',
  feature3Description: undefined,
  feature1Title: undefined,
  feature2ImgAlt: 'Job Posting Form Image',
  feature2Description: undefined,
  feature1Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1653669486356-2de0c7ceaceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzMyNjg1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Homepage Image',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1505582866941-6788e0205dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzMyNjg1N3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Features24.propTypes = {
  feature2Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features24
