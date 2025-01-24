import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pale Legitimate Toad</title>
        <meta property="og:title" content="Pale Legitimate Toad" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Post a Job</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">Dashboard</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Sign In</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Post a Job</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Dashboard</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Sign In</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to our job portal homepage.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Fill out the form to post a job opening.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Manage your job postings and applications.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Sign in to access your account.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Browse Jobs</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Post a Job</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Find your dream job with us. Explore thousands of job
              opportunities from top companies.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">Welcome to our Job Portal</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Homepage</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Job Posting Form</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Dashboard</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Engaging landing page with featured jobs and search functionality
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Easy-to-use form for employers to post job listings
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Personalized dashboard for job seekers and employers to manage
              applications and listings
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Explore thousands of job opportunities and take the next step in
              your career
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">Find Your Dream Job Today</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Homepage</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Job Posting Form</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Dashboard</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Engaging homepage design to attract users
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              User-friendly form for employers to post job listings
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Personalized dashboard for users to manage job applications and
              settings
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Pro Plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Premium Plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144">$9.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145">$19.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146">$29.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147">Sign Up Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149">$99/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150">Sign Up Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152">$199/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153">Sign Up Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155">$299/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162">Create a profile</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163">Search and apply for jobs</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164">Receive job alerts</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165">All Basic Plan features</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166">Featured job listings</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167">Resume builder tool</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169">All Pro Plan features</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170">Priority customer support</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171">
              Access to exclusive job listings
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186">Sign Up</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187">Explore Job Listings</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188">Post a Job</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189">Dashboard</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190">
              Create an account on our job portal to access all features and
              functionalities.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191">
              Browse through a wide range of job listings from various
              industries and locations.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192">
              Employers can easily post job openings to attract qualified
              candidates.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193">
              Manage job postings, applications, and track the recruitment
              process efficiently.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194">
              Great platform for job seekers and employers alike. Easy to use
              and efficient.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195">
              Our company has found some excellent candidates through this
              portal. Highly recommended.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196">
              Impressive features and user-friendly interface. Makes the hiring
              process smoother.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197">
              I landed my dream job through this portal. Thank you for the
              opportunity!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203">Emily Brown</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204">Software Engineer</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205">HR Manager</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206">Recruitment Consultant</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207">Job Seeker</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">FAQ</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218">Terms of Service</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
