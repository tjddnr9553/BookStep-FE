export function setNewOffset(memo: HTMLDivElement, mouseMoveDir = { x: 0, y: 0 }) {
  const offsetLeft = memo.offsetLeft - mouseMoveDir.x
  const offsetTop = memo.offsetTop - mouseMoveDir.y

  const maxX = window.innerWidth - memo.offsetWidth
  const maxY = window.innerHeight - memo.offsetHeight

  return {
    x: Math.min(Math.max(offsetLeft, 0), maxX),
    y: Math.min(Math.max(offsetTop, 0), maxY),
  }
}

export function autoGrow(textArea: HTMLTextAreaElement | null) {
  if (!textArea) return
  textArea.style.height = 'auto'
  textArea.style.height = textArea.scrollHeight + 'px'
}

export function setZIndex(selectedMemo: HTMLDivElement) {
  if (!selectedMemo) return
  selectedMemo.style.zIndex = '9999'

  Array.from(document.getElementsByClassName('memo_memo__Iz_YW')).forEach((memo) => {
    if (memo !== selectedMemo && memo instanceof HTMLDivElement) {
      memo.style.zIndex = (parseInt(selectedMemo.style.zIndex) - 1).toString()
    }
  })
}
