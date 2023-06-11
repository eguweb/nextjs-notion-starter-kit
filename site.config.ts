import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c5c77bd47d9e4be0ab6dbe0b99ddbe2b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Next.js Notion Starter Kit',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'Travis Fischer',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  twitter: 'transitive_bs',
  github: 'transitive-bullshit',
  linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: 'https://eguchi.help/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Ffile.notion.so%252Ff%252Fs%252Fe75b439d-64b1-42c1-bd9f-b37f2d3df861%252F26736915_m.jpg%253Fid%253D877ca344-44ca-4495-b8e3-07fe9ab70ce4%2526table%253Dblock%2526spaceId%253Db78c58cf-01e4-466d-a74d-f4dbbb6b0294%2526expirationTimestamp%253D1686567486776%2526signature%253DEt1qBKfKKAw4tXIzbV1z9b3s1uFrUfd385hxOq3PFyo%3Ftable%3Dblock%26id%3D877ca344-44ca-4495-b8e3-07fe9ab70ce4%26cache%3Dv2&w=2048&q=75',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
