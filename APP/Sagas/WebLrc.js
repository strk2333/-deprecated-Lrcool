import { put, call, takeEvery, delay, all, takeLeading } from 'redux-saga/effects'
import ActionCreator, { ActionTypes } from '../Reducer/WebLrc'
/*global logger*/
import parser from 'react-html-plain-parser'

const { FilterType, FilterOpt, OutputType, filterConfig, outputConfig, select } = parser
let tempUrl = ''
let langIndex = 0
let lrcHtmlCache = ''

export function* getIndex({url}) {
  yield put(ActionCreator.updateIndexArr([]))
  const res = yield call(fetchHTML, url)

  if (res === '') {
    return
  }

  const html = parser.parseFromString(res)

  const excludeStartParam = ['#', 'http', 'index', 'discography', 'lyricsindex', 'contactme']
  const configs = [
    filterConfig(FilterType.TAG, FilterOpt.EQUAL, 'a'),
    filterConfig(FilterType.ATTR, FilterOpt.NOT_START_WITH, ['href', ...excludeStartParam]),
    filterConfig(FilterType.ATTR, FilterOpt.NOT_INCLUDE, ['href', '@gmail.com'])
  ]
  const output = outputConfig(OutputType.ATTR, 'href')

  const arr = select(html, configs, output)
  yield put(ActionCreator.updateIndexArr(arr))
}

export function* getLrcContent({url}) {
  const res = yield call(fetchHTML, url)
  const html = parser.parseFromString(res)
  tempUrl = url
  lrcHtmlCache = html
  const arr = select(
    html,
    [ 
      filterConfig(FilterType.TAG, FilterOpt.EQUAL, 'div'), 
      filterConfig(FilterType.CLASS, FilterOpt.INCLUDE, 'content'),
    ])
  const content = parser.textBeautify(parser.toString(arr[0]))
  yield put(ActionCreator.updateLrcContent(content))
}

export function* changeLrcLang() {
  // const res = yield call(fetchHTML, tempUrl)
  // const html = parser.parseFromString(res)
  const arr = select(
    lrcHtmlCache,
    [
      filterConfig(FilterType.TAG, FilterOpt.EQUAL, 'div'),
      filterConfig(FilterType.CLASS, FilterOpt.INCLUDE, 'content'),
    ]
  )
  langIndex = ++langIndex % 3
  const content = parser.textBeautify(parser.toString(arr[langIndex]))
  yield put(ActionCreator.updateLrcContent(content))
}

async function fetchHTML(url) {
  return await fetch(url)
    .then(res => res.text())
    .catch(logger.debug('fetch html error'))
}

export default [
  takeLeading(ActionTypes.GET_INDEX, getIndex),
  takeLeading(ActionTypes.GET_LRC_CONTENT, getLrcContent),
  takeLeading(ActionTypes.CHANGE_LRC_LANG, changeLrcLang),
]