function reduceFlatArray(target, depth) {
  return target.reduce((acc, cur) => {
    if (Array.isArray(cur) && depth) acc.push(...reduceFlatArray(cur, depth - 1))
    else acc.push(cur)

    return acc
  }, [])
}

const array = [1, [2, 3], [4, [5, 6, [7, 8]]]]

console.log(reduceFlatArray(array, 1))
