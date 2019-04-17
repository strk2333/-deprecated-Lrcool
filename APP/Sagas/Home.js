import { put, call, takeEvery, delay, all, takeLeading } from 'redux-saga/effects'
import ActionCreator, { ActionTypes } from '../Reducer/Home'
import parser from 'react-html-plain-parser'
/*global logger*/

export function* getLrc(it) {
  const res3 = yield call(getLrcWithJson, it['url'])
  yield put(ActionCreator.updateWebText(res3))
}

export function* getLrcWithJson(url) {
  const res = yield call(fetchWebJson, url)
  if (!res ||res.count <= 0) {
    return 'No Result'
  }
  const param1 = 'result'
  const param2 = 'lrc'
  const res2 = yield call(fetchWebText, res[param1][0][param2])
  return res2.replace(/\[.*\]/g, '').trim() // .replace(/(歌手：.*|歌曲：.*)/g, '')
}

// function* getLrcWithXml(url) {

// }

async function fetchWebText(url) {
  return await fetch(url).then(res => res.text())
}

async function fetchWebJson(url) {
  return await fetch(url).then(res => res.json())
}

export function* getHtmlData (it) {
  const res = yield call(fetchWebText, 'http://stage48.net/studio48/kaerimichiwatoomawarishitakunaru.html')
  if (res.count <= 0) {
    yield put(ActionCreator.updateWebText('No Result'))
    return
  }
 
  const html = parser.parseFromString(res)
  const arr = html.getElementsByTagName('div')
  for (it of arr) {
    if (it.atrributes !== null && it.attributes['class'] === 'content') {
      yield put(ActionCreator.updateWebText(parser.textBeautify(parser.toString(it)))) 
      break
    }
  }
}

// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
  yield delay(1000)
  yield put(ActionCreator.action1)
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  yield takeEvery(ActionCreator.action3, incrementAsync)
}

export default [
  takeLeading(ActionTypes.GET_LRC, getLrc),
  takeLeading(ActionTypes.GET_LRC_WITH_JSON, getLrcWithJson),
  takeLeading(ActionTypes.GET_HTML_DATA, getHtmlData),
]