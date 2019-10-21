
function printSpiral(n) {

  let result = [...Array(n)].map(() => Array(n))

  let test = [... new Array(n)]
  console.log(test)

  let dir = 'right'
  let col = 0, row = 0
  let s = 0
  for(let cur = 1; cur <= n*n; cur++) {
    result[row][col] = cur
    if(dir === 'right') {
      if(col == n-s-1) {
        dir = 'down'
        row++
        continue
      }
      col++
    } else if (dir === 'down') {
      if(row == n-s-1) {
        dir = 'left'
        col--
        continue
      }
      row++
    } else if (dir === 'left') {
      if(col==s) {
        dir = 'up'
        row--
        continue
      }
      col--
    } else {
      row--
      if(row==s) {
        dir = 'right'
        col++
        row++
        s++
      }
    }
  }

  for(let i = 0; i < n; i++) {
    console.log(JSON.stringify(result[i]))
  }
}

printSpiral(9)