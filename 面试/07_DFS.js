let n = 10,
  visited = [],
  array = []

function DFS(k) {
  if (k > n) {
    console.log(array)
  } else {
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        visited[i] = 1
        array.push(i)
        DFS(k + 1)
        visited[i] = 0
      }
    }
  }
}

DFS(1)
