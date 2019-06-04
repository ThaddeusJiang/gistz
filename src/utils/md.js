import showdown from 'showdown'

// Extension
showdown.extension('headerlink', function() {
  return [
    {
      type: 'output',
      regex: /(<h(\d) id="(.+)">(.+?))(<\/h\2>)/g,
      replace: function(wm, g1, g2, id, g4, g5) {
        return `<h${g2} id="${g4}"> <a class="header" href="#${g4}">${g4}</a> ${g5}`
      },
    },
  ]
})

export const converter = new showdown.Converter({
  extensions: ['headerlink'],
})
