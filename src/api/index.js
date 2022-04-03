import fetch from './fetch'

/**
 * 
 * @param {*} pageId 页面id
 * @returns 
 */
export function getI18nData(pageId) {
  return fetch({
    method:"GET",
    url:`/i18n/pageId/${pageId}`
  })
}