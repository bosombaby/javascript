function parseTemplateString(templateString, data) {
  const regex = /\${(.*?)}/g;
  const str = templateString.replace(regex, (match, key) => {
    return eval(`data.${key}`);
  });

  return str;
}

const templateString =
  "我的名字是 ${name}，我今年 ${age} 岁，我从事 ${job} 的工作。";
const person = {
  name: "zs",
  age: 18,
  job: "程序员",
};

const result = parseTemplateString(templateString, person);
console.log(result);
