import React from 'react'
import { Link } from 'react-router'
const links= [
  { to: '/v6', label: 'Video 6' },
  { to: '/v7', label: 'Video 7' },
  { to: '/v8', label: 'Video 8' },
  { to: '/v17', label: 'Video 17' },
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
  <div>
    <Menu locale={locale} setLocale={setLocale}/>
    {children}
  </div>

export default Main

import VendorPrefix from 'react-vendor-prefixes'
let styles = VendorPrefix.prefix({
  ul: {
    display: 'flex',
    margin: 0,
    padding: 0,
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
