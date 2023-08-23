import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import { graphql, StaticQuery, withPrefix } from 'gatsby';

import HeaderSmall from './HeaderSmall';
import ReactGA from 'react-ga';

class LayoutWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      href: this.props.slug || '/',
      stickyBannerActive: false,
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      ReactGA.initialize('UA-117691729-3');
      ReactGA.pageview(window.location.pathname);
      const { edges: domains } = this.props.projects.allMarkdownRemark;
      window.localStorage.setItem('domains', JSON.stringify(domains));
      if (window.sessionStorage.getItem('sticky-banner-close')) {
        this.setState({
          stickyBannerActive: false,
        });
      } else {
        this.setState({
          stickyBannerActive: this.props.projects.markdownRemark.frontmatter
            .stickyBanner.stickyBannerActive,
        });
      }
    }
  }

  stickyBannerCloseHandler = () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('sticky-banner-close', true);
    }
    this.setState({ stickyBannerActive: false });
  };

  render() {
    const stickyBannerTitle = this.props.projects.markdownRemark.frontmatter
      .stickyBanner.stickyBannerTitle;
    const stickyBannerTitleColor = this.props.projects.markdownRemark
      .frontmatter.stickyBanner.stickyBannerTitleColor;
    const stickyBannerButtonTitle = this.props.projects.markdownRemark
      .frontmatter.stickyBanner.stickyBannerButtonTitle;
    const stickyBannerColor = this.props.projects.markdownRemark.frontmatter
      .stickyBanner.stickyBannerColor;
    const stickyBannerButtonColor = this.props.projects.markdownRemark
      .frontmatter.stickyBanner.stickyBannerButtonColor;
    const stickyBannerButtonTextColor = this.props.projects.markdownRemark
      .frontmatter.stickyBanner.stickyBannerButtonTextColor;
    const stickyBannerButtonLink = this.props.projects.markdownRemark
      .frontmatter.stickyBanner.stickyBannerButtonLink;

    let { href } = this.state;
    let title = 'Samagra | Transforming Governance';
    let description = 'Samagra | Transforming Governance';
    let image = `${withPrefix('/')}img/logo-colored.png`;
    if (
      this.props.children &&
      this.props.children.props &&
      this.props.children.props.content
    ) {
      title = this.props.children.props.content.title || title;
      description =
        this.props.children.props.content.description || description;

      if (
        this.props.children.props.content.featuredimage &&
        this.props.children.props.content.featuredimage.childImageSharp &&
        this.props.children.props.content.featuredimage.childImageSharp.fluid
      ) {
        image = this.props.children.props.content.featuredimage.childImageSharp
          .fluid.src;
      }
    }

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
            sizes="16x16"
          />

          <link rel="canonical" href={href} />

          <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
          />
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </Helmet>
        {/* Sticky Banner */}
        {this.state.stickyBannerActive && (
          <div
            className="sticky-banner"
            style={{
              background: `${stickyBannerColor}`,
              color: `${stickyBannerTitleColor}`,
            }}>
            <div className="sticky-banner-title">{stickyBannerTitle}</div>
            <a
              href={stickyBannerButtonLink}
              style={{
                color: `${stickyBannerButtonTextColor}`,
              }}>
              <div
                className="sticky-banner-btn"
                style={{
                  backgroundColor: `${stickyBannerButtonColor}`,
                }}>
                {stickyBannerButtonTitle}
              </div>
            </a>
            <div className="sticky-banner-close-btn">
              <button
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'white',
                  fontSize: '24px',
                }}
                onClick={this.stickyBannerCloseHandler}>
                x
              </button>
            </div>
          </div>
        )}
        <span className={'hide-for-small-only'}>
          <Navbar />
        </span>
        <span className={'show-for-small-only'}>
          <HeaderSmall />
        </span>
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default ({ children, slug }) => (
  <StaticQuery
    query={graphql`
      query ProjectDomainListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { templateKey: { eq: "project-domain-post" } }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              frontmatter {
                title
                displayOrder
                displayOnHeader
                displayOnHomeSlider
              }
            }
          }
        }
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            stickyBanner {
              stickyBannerActive
              stickyBannerTitle
              stickyBannerTitleColor
              stickyBannerButtonTitle
              stickyBannerColor
              stickyBannerButtonColor
              stickyBannerButtonTextColor
              stickyBannerButtonLink
            }
          }
        }
      }
    `}
    render={(data, count) => (
      <LayoutWrapper projects={data} slug={slug} children={children} />
    )}
  />
);
