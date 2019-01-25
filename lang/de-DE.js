export default () => {
  return new Promise(function(resolve) {
    resolve({
      stories: { title: 'Stories', subtitle: 'das ist ja toll' },
      shop: { title: 'Kaufen', subtitle: 'das ist ja toll' },
      about: { title: 'Über Uns', subtitle: 'das ist ja toll' },
      contact: { title: 'Kontakt', subtitle: 'das ist ja toll' }
    })
  })
}
