import React from 'react'
import { Link } from 'react-router'
const links= [
  { to: '/v6', label: 'Video 6' },
  { to: '/v7', label: 'Video 7' },
  { to: '/v8', label: 'Video 8' },
  { to: '/v17', label: 'Video 17' },
  { to: '/v18', label: 'Video 18' },
  { to: '/v19', label: 'Video 19' },
  { to: '/v20', label: 'Video 20' },
  { to: '/v21', label: 'Video 21' },
  { to: '/v22', label: 'Video 22' },
  { to: '/v23', label: 'Video 23' },
  { to: '/v24', label: 'Video 24' },
  { to: '/v25', label: 'Video 25' },
  { to: '/v26', label: 'Video 26' },
  { to: '/v27', label: 'Video 27' },
  { to: '/v28', label: 'Video 28' },
  { to: '/v29', label: 'Video 29' },
  { to: '/v30', label: 'Video 30' },
]

const Menu= ({locale, setLocale}) =>
  <ul style={styles.ul}>
    {links.map((link, idx) =>
      <li style={styles.li} key={idx}>
        <Link style={styles.link} activeStyle={styles.activeLink} {...link}>{link.label}</Link>
      </li>
    )}
  </ul>

const Main= ({locale, setLocale, children}) =>
  <div style={{display: 'flex'}}>
    <Menu locale={locale} setLocale={setLocale}/>
    <div style={{flexGrow: 1}}>
      {children}
    </div>
  </div>

export default Main

import VendorPrefix from 'react-vendor-prefixes'
let styles = VendorPrefix.prefix({
  ul: {
    margin: 0,
    padding: 0,
    width: 100,
  },

  li: {
    listStyleType: 'none',
    padding: 2,
    marginRight: 5,
  },

  liLocale: {
    marginTop: 2,
  },

  link: {
    color: 'black',
    textDecoration: 'none',
    display: 'block',
    padding: '4px 8px',
  },

  activeLink: {
    color: 'white',
    backgroundColor: 'black',
  },
})
