/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 
Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3

*/

function adjacent(grid, node) {
  let coords = node.split(',')
  coords = coords.map(x => Number(x))

  let adj = []

  // East
  if(coords[1] < grid[0].length - 1 && grid[coords[0]][coords[1] + 1] == 1) {
    let key = `${coords[0]},${coords[1]+1}`
    adj.push(key)
  }

  // West
  if(coords[1] > 0 && grid[coords[0]][coords[1] - 1] == 1) {
    adj.push(`${coords[0]},${coords[1]-1}`)
  }

  // North
  if(coords[0] > 0 && grid[coords[0] - 1][coords[1]] == 1) {
    adj.push(`${coords[0]-1},${coords[1]}`)
  }

  // South
  if(coords[0] < grid.length - 1 && grid[coords[0] + 1][coords[1]] == 1) {
    adj.push(`${coords[0]+1},${coords[1]}`)
  }

  return adj
}

function BFS(grid, i, discovered) {
  let queue = []
  queue.push(i)

  while(queue.length != 0) {
    let node = queue.shift()
    let adj = adjacent(grid, node)
    for(let n of adj) {
      if(!discovered[n]) {
        discovered[n] = true
        queue.push(n)
      }
    }
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
  let c = 0
  let discovered = {}

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] == true) {
        discovered[`${i},${j}`] = false
      }
    }
  }
  // let size = grid.length * grid[0].length

  for(let i = 0; i < Object.keys(discovered).length; i++) {
    if(discovered[Object.keys(discovered)[i]] == false) {
      c = c + 1
      BFS(grid, Object.keys(discovered)[i], discovered)
    }
  }

  return c
};



let testGrid = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
]

console.log(numIslands(testGrid))