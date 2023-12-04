let imageAsync = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url

    img.onload = () => {
      console.log('图片请求成果，执行相关操作')
      resolve(img)
    }

    img.onerror = (err) => {
      console.log('图片请求失败')
      reject(err)
    }
  })
}

imageAsync('url')
  .then((img) => {
    console.log(img)
  })
  .catch((err) => {
    console.log(err)
  })
