import _ from 'lodash'
import React from 'react'
import { Helmet } from 'react-helmet'
import { safePrefix } from '../utils'
import Footer from './Footer'
import Header from './Header'

export default class Body extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Helmet>
          <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
          <meta name='description'
                content='Do this quick quiz to find out how many classic software mistakes your team makes.' />
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initialScale=1.0' />
          <meta name='google' content='notranslate' />
          <link href='https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i' rel='stylesheet' />
          <link rel='stylesheet' href={safePrefix('assets/css/main.css')} />
        </Helmet>
        <div id='page'
             className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.color_scheme') + ' accent-' + _.get(this.props, 'pageContext.site.siteMetadata.accent_color')}>
          <Header {...this.props} />
          <main id='content' className='site-content'>
            {this.props.children}
          </main>
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    )
  }
}
