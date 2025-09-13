const KEY = 'dashboard_app_v1'

export function loadState(){
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return undefined
    return JSON.parse(raw)
  } catch (e) {
    console.error('loadState error', e)
    return undefined
  }
}

export function saveState(state){
  try {
    const toSave = JSON.stringify(state)
    localStorage.setItem(KEY, toSave)
  } catch (e) {
    console.error('saveState error', e)
  }
}
