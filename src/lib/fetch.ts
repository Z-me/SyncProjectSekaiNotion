import type { DatabaseResponse } from '@/lib/types';

const api = (dbId: string, cursor?: string): DatabaseResponse[] => {
  Logger.log(`cursor: ${cursor}`);
  const url = `https://api.notion.com/v1/databases/${dbId}/query`;
  const token =
    PropertiesService.getScriptProperties().getProperty('NotionToken');
  const headers = {
    'content-type': 'application/json; charset=UTF-8',
    Authorization: `Bearer ${token}`,
    'Notion-Version': '2022-06-28',
  };
  const payload = {
    start_cursor: cursor,
    page_size: 100,
  };
  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'post',
    headers: headers,
    contentType: 'application/json',
    payload: JSON.stringify(payload),
  };
  const response = UrlFetchApp.fetch(url, options);
  const res = JSON.parse(response.getContentText());
  if (res.has_more) {
    return [...res.results, ...api(dbId, res.next_cursor)];
  }
  return res.results;
};

export default api;
