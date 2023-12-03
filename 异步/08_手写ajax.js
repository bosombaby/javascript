function ajax(options) {
  const xhr = new XMLHttpRequest()
  const { type, dataType, data, url, success, fail } = options
  const method = type.toUpperCase()
  xhr.setRequestHeader('Content-Type', dataType)
  if (method === 'GET') {
    xhr.open(method, url + '?' + data, true)
    xhr.send(null)
  } else if (method === 'POST') {
    xhr.open(method, url, true)
    xhr.send(data)
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const status = xhr.status
      if (status >= 200 && status < 300) {
        success(xhr.responseText, xhr, this.responseXML)
      } else {
        fail(status)
      }
    }
  }
}
ajax({
  type: 'get',
  dataType: 'json',
  data: {},
  url: 'https://xxx',
  success: function (text, xml) {
    console.log(text, xml)
  },
  fail: function (status) {
    console.log(status)
  },
})
