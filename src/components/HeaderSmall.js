import React from "react";
import logoInverted from '../img/logo-colored.png'
import {Link} from 'gatsby'
import menuIcon from "../img/menu-icon.png"
import upIcon from "../img/up-arrow-png-20.png"
import {graphql, StaticQuery} from "gatsby";

export class HeaderSmall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showInverted: false, projects: [], popupOpened: '', selectedDomainIndex: -1, showUpIcon: false};

    }

    componentDidMount() {
        const parentDomains = [];
        if (window.localStorage.getItem('domains')) {
            JSON.parse(window.localStorage.getItem('domains')).forEach((d) => {
                parentDomains.push({...d.node.frontmatter})
            });
        }
        window.addEventListener('scroll', this.handleScroll, true);
        const {data} = this.props;
        const {edges: projects} = data.allMarkdownRemark;
        let domains = [];
        projects.forEach((project) => {
            let found = false;
            project.projectUrl = project.node.fields.slug;
            domains.forEach((domain) => {
                if (domain.name === project.node.frontmatter['domainNew']) {
                    found = true;
                    domain.projects.push(project);
                    domain.projects = domain.projects.sort(function (a, b) {
                        return b.node.frontmatter.title > a.node.frontmatter.title ? -1 : 1;
                    });
                }
            });
            if (!found) {
                parentDomains.forEach((pD) => {
                    if (pD.title === project.node.frontmatter['domainNew'] && (pD.displayOnHeader === true || pD.displayOnHeader === 'true')) {
                        domains.push({
                            name: project.node.frontmatter['domainNew'],
                            activeProjectIndex: 0,
                            displayOrder: pD.displayOrder,
                            projects: [project]
                        });
                        domains = domains.sort(function (a, b) {
                            return b.displayOrder > a.displayOrder ? -1 : 1;
                        });
                    }
                });
            }
        });
        this.setState({projects: domains});
    }

    filterUrl = (str) => {
        let result = '';
        str = str.replace(/ /g, '-').toLowerCase();
        for (let i = 0; i < str.length; i++) {
            if ('ascdfeghijklmnopqrstuvwxyz0123456789-'.indexOf(str[i]) > -1) {
                result += str[i];
            }
        }
        return result;
    };
    handleScroll = () => {
        let showUpIcon = this.state.showUpIcon, showInverted = this.state.showInverted;
        if (window.scrollY > window.screen.height && !this.state.showUpIcon) {
            showUpIcon = true;
        } else if (window.scrollY < window.screen.height && this.state.showUpIcon) {
            showUpIcon = false
        }
        if (this.state.showInverted && window.scrollY < 250) {
            showInverted = false;
        }
        if (!this.state.showInverted && window.scrollY > 250) {
            showInverted = true;
        }
        this.setState({showUpIcon, showInverted});
    };

    render() {
        const {projects, ourWorkActive, selectedDomainIndex, popupOpened, showUpIcon} = this.state;
        return (
            <div className={`header-small-wrapper`}>
                {showUpIcon ? <div className={'up-icon'}>
                        <img src={upIcon} onClick={() => {
                            window.scrollTo(0, 0)
                        }}/>
                    </div>
                    : <span/>}
                <div className={'header-small-inner-wrapper'}>
                    <div>
                        <Link to={'/'} className="logo" style={{paddingTop: 0}}>
                            <img src={logoInverted}/>
                        </Link>
                        <div className="toggle" onClick={() => {
                            this.setState({
                                popupOpened: 'active',
                                selectedDomainIndex: false,
                                ourWorkActive: false
                            })
                        }}>
                            <img src={menuIcon} style={{marginRight: '8px', height: '25px'}}/>
                        </div>
                    </div>
                </div>
                <div className={`headerPopup ${popupOpened}`}>
                    <div className="cross" onClick={() => {
                        this.setState({popupOpened: 'inactive'})
                    }}>
                        X
                    </div>
                    <div className="header-list">
                        <a style={{color: '#777777'}} className="nav-link">Menu</a>
                        <div className={"header-list-item"} style={{paddingTop: '30px'}}>
                            <a className="nav-link" onClick={() => {
                                this.setState({ourWorkActive: !ourWorkActive})
                            }}>Our Work</a>
                            {
                                ourWorkActive ? <div className="sub-header-list">
                                    {
                                        projects.map((domain, domainIndex) => {
                                            return <div className="sub-header-list-item">
                                                <a className="nav-link" onClick={() => {
                                                    this.setState({selectedDomainIndex: (selectedDomainIndex === domainIndex) ? -1 : domainIndex})
                                                }}>
                                                    {domain.name}
                                                </a>
                                                {
                                                    domainIndex === selectedDomainIndex ?
                                                        <div className="sub-sub-header-list">
                                                            {
                                                                domain.projects.map((project) => {
                                                                    return <div className="sub-sub-header-list-item"
                                                                                onClick={() => {
                                                                                    this.setState({popupOpened: 'inactive'})
                                                                                }}>
                                                                        <Link to={project.projectUrl}><a
                                                                            className="nav-link"
                                                                            href={project.projectUrl}>{project.node.frontmatter.title}</a></Link>
                                                                    </div>
                                                                })
                                                            }

                                                        </div> : <span/>
                                                }
                                            </div>
                                        })
                                    }

                                </div> : <span/>
                            }
                        </div>

                        <div className={"header-list-item"}>
                            <a href={'https://tech.samagragovernance.in'} className="nav-link">SamagraX</a>
                        </div>
                        <div className={"header-list-item"}>
                            <a href={'/governanceframeworks'} className="nav-link">Governance Frameworks</a>
                        </div>
                        {/* <div className={"header-list-item"}>
                            <Link to={'/casestudies'}><a onClick={() => {
                                this.setState({popupOpened: 'inactive'})
                            }} className="nav-link" href="/casestudies">Case Studies</a></Link>
                        </div> */}
                        <div className={"header-list-item"}>
                            <Link to={'/amritseries'}><a onClick={() => {
                                this.setState({popupOpened: 'inactive'})
                            }} className="nav-link" href="/amritseries">Amrit Series</a></Link>
                        </div>
                        {/* <div className={"header-list-item"}>
                            <Link to={'/c4gt'}><a onClick={() => {
                                this.setState({popupOpened: 'inactive'})
                            }} className="nav-link" href="/c4gt">C4GT</a></Link>
                        </div> */}
                        <div className={"header-list-item"}>
                            <Link to={'/sushasan'}><a onClick={() => {
                                this.setState({popupOpened: 'inactive'})
                            }} className="nav-link" href="/sushasan">Sushasan</a></Link>
                        </div>
                        <div className={"header-list-item"}>
                            <Link to={'/team'}><a onClick={() => {
                                this.setState({popupOpened: 'inactive'})
                            }} className="nav-link" href="/team">Team</a></Link>
                        </div>
                        <div className={"header-list-item"}>
                            <Link to={'/partners'}><a onClick={() => {
                                this.setState({popupOpened: 'inactive'})
                            }} className="nav-link" href="/partners">Partners</a></Link>
                        </div>
                        <div className={"header-list-item"}>
                            <Link to={'/media'}><a onClick={() => {
                                this.setState({popupOpened: 'inactive'})
                            }} className="nav-link" href="/media">Media</a></Link>
                        </div>
                        <div className={"header-list-item"}>
                            <Link to={'/blog'}><a onClick={() => {
                                this.setState({popupOpened: 'inactive'})
                            }} className="nav-link" href="/blogs">Blog</a></Link>
                        </div>
                        <div className={"header-list-item"}>
                            <Link to={'/careers'}><a onClick={() => {
                                this.setState({popupOpened: 'inactive'})
                            }} className="nav-link" href="/career">Careers</a></Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default () => (
    <StaticQuery
        query={graphql`
      query ProjectHeaderSmallListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                domain
                domainNew
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <HeaderSmall data={data}/>}
    />
)
