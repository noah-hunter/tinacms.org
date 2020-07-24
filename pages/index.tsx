import React from 'react'
import { GetStaticProps } from 'next'
import { useCMS } from 'tinacms'
import { OpenAuthoringSiteForm } from 'components/layout/OpenAuthoringSiteForm'
import { useGithubJsonForm } from 'react-tinacms-github'
import { getJsonPreviewProps } from 'utils/getJsonPreviewProps'
import styles from 'components/styles/home.module.scss'
import {
  GithubLogo,
  BootstrapLogo,
  ContentfulLogo,
  GatsbyLogo,
  GatsbyFullLogo,
  NextLogo,
  ReactLogo,
  ReactFullLogo,
  StrapiLogo,
} from 'components/logos'
import TinaLogomarkSvg from 'public/svg/tina-logomark.svg'
import WhyTinaBackground from 'public/svg/why-tina-background.svg'

const libraries = {
  next: {
    id: 'next',
    label: 'Next.js',
    type: 'framework',
    component: NextLogo,
    componentSmall: NextLogo,
  },
  gatsby: {
    id: 'gatsby',
    label: 'Gatsby.js',
    type: 'framework',
    component: GatsbyLogo,
    componentSmall: GatsbyFullLogo,
  },
  react: {
    id: 'react',
    label: 'React',
    type: 'framework',
    component: ReactLogo,
    componentSmall: ReactFullLogo,
  },
  github: {
    id: 'github',
    label: 'Github',
    type: 'data',
    component: GithubLogo,
    componentSmall: GithubLogo,
  },
  contentful: {
    id: 'contentful',
    label: 'Contentful',
    type: 'data',
    component: ContentfulLogo,
    componentSmall: ContentfulLogo,
  },
  strapi: {
    id: 'strapi',
    label: 'Strapi',
    type: 'data',
    component: StrapiLogo,
    componentSmall: StrapiLogo,
  },
  bootstrap: {
    id: 'bootstrap',
    label: 'Bootstrap',
    type: 'ui',
    component: BootstrapLogo,
    componentSmall: BootstrapLogo,
  },
}

interface ActiveStack {
  data: 'github' | 'contentful' | 'strapi'
  framework: 'gatsby' | 'next' | 'react'
  ui: 'bootstrap' | '' | ''
}

const HomePage = (props: any) => {
  const cms = useCMS()
  const [formData, form] = useGithubJsonForm(props.file, {
    label: 'Home Page',
    fields: [],
  })

  const dataOptions = ['github', 'contentful', 'strapi']
  const frameworkOptions = ['gatsby', 'next', 'react']
  const uiOptions = ['bootstrap', '', '']

  const [activeStack, setActiveStack] = React.useState<ActiveStack>({
    data: 'github',
    framework: 'next',
    ui: '',
  })

  React.useEffect(() => {
    const intervalTime = 5000
    const interval = setInterval(() => {
      const randomData = randElem(dataOptions)
      const randomFramework = randElem(frameworkOptions)
      const randomUI = randElem(uiOptions)
      setActiveStack({
        data: randomData,
        framework: randomFramework,
        ui: randomUI,
      })
    }, intervalTime)
    return () => clearInterval(interval)
  }, [])

  return (
    <OpenAuthoringSiteForm
      form={form}
      path={props.file.fileRelativePath}
      preview={props.preview}
    >
      <div className={styles.pageWrapper}>
        <div className={styles.header}>
          <a href="/">
            <h1>
              <TinaLogomarkSvg />
            </h1>
          </a>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=tinacms&repo=tinacms&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="150px"
            height="40px"
          ></iframe>
        </div>
        <div className={styles.heroWrapper}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Bring Editing to Your
              <Framework activeStack={activeStack} />
              Project
            </h1>
            <p className={styles.heroText}>Made for developers and editors</p>
            <button className={styles.heroButton}>Start Learning</button>
          </div>
          <div className={styles.hero}>
            <div className={styles.wrapper}>
              <div className={styles.aspectRatio}>
                <div className={`${styles.grid} ${styles.gridLeft}`}>
                  <GridItem
                    activeStack={activeStack}
                    number={1}
                    item={libraries.bootstrap}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={2}
                    item={libraries.strapi}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={3}
                    item={libraries.gatsby}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={4}
                    item={libraries.github}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={5}
                    item={libraries.react}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={6}
                    item={libraries.next}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={7}
                    item={libraries.contentful}
                  />
                </div>
                {/* End First Grid */}
                <div className={styles.grid}>
                  <GridItem
                    activeStack={activeStack}
                    number={1}
                    item={libraries.github}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={2}
                    item={libraries.react}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={3}
                    item={libraries.next}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={4}
                    item={libraries.contentful}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={5}
                    item={libraries.strapi}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={6}
                    item={libraries.bootstrap}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={7}
                    item={libraries.gatsby}
                  />
                </div>
                {/* End Second Grid */}
                <div className={`${styles.grid} ${styles.gridRight}`}>
                  <GridItem
                    activeStack={activeStack}
                    number={1}
                    item={libraries.react}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={2}
                    item={libraries.github}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={3}
                    item={libraries.next}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={4}
                    item={libraries.gatsby}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={5}
                    item={libraries.strapi}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={6}
                    item={libraries.bootstrap}
                  />
                  <GridItem
                    activeStack={activeStack}
                    number={7}
                    item={libraries.contentful}
                  />
                </div>
                {/* End Third Grid */}
              </div>
              {/* End Aspect Ratio */}
            </div>
            {/* End End Wrapper */}
          </div>
          {/* End Hero*/}
          <div className={styles.heroFeatures}>
            <div className={styles.heroFeaturesContainer}>
              <div className={styles.heroFeatureCard}>
                <h2>Data Sources</h2>
                <p>
                  Tina can fetch data anywhere your data lives, from traditional
                  headless CMSes to Airtable and Google Sheets
                </p>
              </div>
              <div className={styles.heroFeatureCard}>
                <h2>Frontend Frameworks</h2>
                <p>
                  Tina plays well with any React-based framework. Whether your
                  site is powered by Gatsby or Next.js, Tina has your back.
                </p>
              </div>
              <div className={styles.heroFeatureCard}>
                <h2>Component Libraries</h2>
                <p>
                  Supercharge your website by converting your components into
                  editable blocks.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Hero Wrapper*/}
        <div className={styles.whySection}>
          <div className={styles.whySectionContainer}>
            <h2 className={styles.whySectionTitle}>Why Tina?</h2>
            <div className={styles.whyGrid}>
              <div className={styles.whyGridContent}>
                <h3>Working with 3rd Party APIs</h3>
                <p>
                  Quisque nisl arcu, volutpat malesuada sapien in, ullamcorper
                  pharetra leo. Quisque velit augue, sagittis non hendrerit eu,
                  semper tincidunt ex. Ut dapibus, sapien sed congue dignissim,
                  odio massa rutrum risus, vel lacinia arcu sapien non libero.{' '}
                </p>
              </div>
              <div className={styles.whyGridCode}>test</div>
              <div className={styles.whyGridCode}>test</div>
              <div className={styles.whyGridContent}>
                <h3>Wrap your components</h3>
                <p>
                  Quisque nisl arcu, volutpat malesuada sapien in, ullamcorper
                  pharetra leo. Quisque velit augue, sagittis non hendrerit eu,
                  semper tincidunt ex. Ut dapibus, sapien sed congue dignissim,
                  odio massa rutrum risus, vel lacinia arcu sapien non libero.{' '}
                </p>
              </div>

              <div className={styles.whyGridContent}>
                <h3>Block Based Editing</h3>
                <p>
                  Quisque nisl arcu, volutpat malesuada sapien in, ullamcorper
                  pharetra leo. Quisque velit augue, sagittis non hendrerit eu,
                  semper tincidunt ex. Ut dapibus, sapien sed congue dignissim,
                  odio massa rutrum risus, vel lacinia arcu sapien non libero.{' '}
                </p>
              </div>
              <div className={styles.whyGridCode}>test</div>
            </div>
          </div>
          <div className={styles.whySectionBackground}>
            <WhyTinaBackground />
          </div>
        </div>
      </div>
      {/* End Page Wrapper*/}
    </OpenAuthoringSiteForm>
  )
}

const Framework = ({ activeStack }) => {
  const [animationState, setAnimationState] = React.useState(null)
  const [activeFramework, setActiveFramework] = React.useState(
    activeStack.framework ? activeStack.framework : null
  )
  const [frameworkWidth, setFrameworkWidth] = React.useState(200)
  const frameworkSpanRef = React.useRef(null)

  React.useEffect(() => {
    if (!frameworkSpanRef.current) return

    let animateInTime = 1500
    let animateOutTime = 500

    if (activeStack.framework === activeFramework) return

    setAnimationState(styles.heroTitleAnimateOut)

    setTimeout(() => {
      setActiveFramework(activeStack.framework)
      setAnimationState(styles.heroTitleAnimate)
    }, animateOutTime)
  }, [frameworkSpanRef.current, activeStack])

  React.useEffect(() => {
    if (!frameworkSpanRef.current) return

    setFrameworkWidth(frameworkSpanRef.current.offsetWidth)
  }, [frameworkSpanRef.current, activeFramework])

  return (
    <span
      className={`${styles.heroTitleFramework} ${styles.heroTitleFrameworkHide2}`}
      style={{ width: `${frameworkWidth}px` }}
    >
      <span className={animationState} ref={frameworkSpanRef}>
        {activeFramework === 'gatsby' ? (
          <GatsbyFullLogo />
        ) : activeFramework === 'next' ? (
          <NextLogo />
        ) : activeFramework === 'react' ? (
          <ReactFullLogo />
        ) : null}
      </span>
    </span>
  )
}

const GridItem = ({ activeStack, number, item }) => {
  const GridItemComponent = item.component

  return (
    <div
      className={`${styles.gridItem} ${styles['gridItem' + number]} ${
        activeStack.data === item.id ? styles.gridItemActive : ''
      } ${item.id === 'next' ? styles.bigLogo : ''}`}
    >
      <GridItemComponent />
      <span></span>
      <span></span>
    </div>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async function({
  preview,
  previewData,
}) {
  return getJsonPreviewProps('content/pages/home.json', preview, previewData)
}

const randElem = array => {
  return array[Math.floor(Math.random() * array.length)]
}
