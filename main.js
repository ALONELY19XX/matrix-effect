const canvas = document.getElementById('matrix')
const context = canvas.getContext('2d')

const width = canvas.width
const height = canvas.height
const fontColor = '#64d86b'
const backgroundColor = '#000'
const backgroundFill = '#00000022'
const fontConfig = '15px "Noto Sans JP"'

const glyphs = [
   '人',
   '類',
   '社',
   '会',
   'の',
   'す',
   'べ',
   'て',
   'の',
   '構',
   '成',
   '員',
   'の',
   '固',
   '有',
   'の',
   '尊',
   '厳',
   'と',
   '平',
   '等',
   'で',
   '譲',
   'る',
   'こ',
   'と',
   'の',
   'で',
   'き',
   'な',
   'い',
   '権',
   '利',
   'と',
   'を',
   '承',
   '認',
   'す',
   'る',
   'こ',
   'と',
   'は',
]

const len = glyphs.length

const columnWidthInPixels = 20
const numCols = Math.floor(width / columnWidthInPixels)
const glyphPositionsY = Array(numCols).fill(0)
const activeStates = Array(numCols).fill(0)

context.fillStyle = backgroundColor
context.fillRect(0, 0, width, height)

const computeMatrix = () => {
   context.fillStyle = backgroundFill
   context.fillRect(0, 0, width, height)

   context.font = fontConfig
   context.fillStyle = fontColor

   glyphPositionsY.forEach((yPos, idx) => {
      if (activeStates[idx]) {
         const randomGlyph = glyphs[Math.floor(Math.random() * len)]

         context.fillText(randomGlyph, idx * 20, yPos)

         glyphPositionsY[idx] += 20
         if (glyphPositionsY[idx] > height) glyphPositionsY[idx] = 0
      }
   })
}

for (let i = 0; i < activeStates.length; ++i) {
   setTimeout(() => {
      activeStates[i] = 1
   }, Math.floor(Math.random() * 5000))
}

setInterval(computeMatrix, 30)
