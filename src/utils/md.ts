import showdown from 'showdown'

// Extension
showdown.extension('headerlink', function() {
  return [
    {
      type: 'output',
      regex: /(<h(\d) id="(.+)">(.+?))(<\/h\2>)/g,
      replace: function(
        wm: string,
        g1: string,
        g2: string,
        id: string,
        g4: string,
        g5: string,
      ) {
        return `<h${g2} id="${g4}"> <a class="header" href="#${g4}">${g4}</a> ${g5}`
      },
    },
  ]
})

export const converter = new showdown.Converter({
  extensions: ['headerlink'],
})
