export default () => {
  return new Promise(function(resolve) {
    resolve({
      stories: { title: 'Stories', subtitle: 'das ist ja toll' },
      shop: { title: 'Shop', subtitle: 'das ist ja toll' },
      about: { title: 'About', subtitle: 'das ist ja toll' },
      contact: { title: 'Contact', subtitle: 'das ist ja toll' }
    })
  })
}
