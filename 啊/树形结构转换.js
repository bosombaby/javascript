// 名称：树形结构转换
// 描述：
// 考察: 正则表达式、数组拆分

let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
];

function convert(list) {
  let result = [];
  let listMap = {};

  list.forEach((item) => {
    listMap[item.id] = { ...item, children: [] };
  });

  let parent = null;
  list.forEach((item) => {
    parent = listMap[item.parentId];
    if (parent) {
      parent.children.push(listMap[item.id]);
    } else {
      result.push(listMap[item.id]);
    }
  });

  return result;
}

function traverseConvert(tree) {
  return tree.reduce((acc, cur) => {
    acc.push({ id: cur.id, name: cur.name, parentId: cur.parentId });
    if (cur.children.length) acc.push(...traverseConvert(cur.children));

    return acc;
  }, []);
}

const result1 = convert(list);
console.log(result1);

const result2 = traverseConvert(result1);
console.log(result2);
