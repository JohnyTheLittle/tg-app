const tg = wndow.Telegram.WebApp

export function useTelegram() {
  const onClose = () => {
    tg.close()
  }
  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.show()
    } else {
      tg.MainButton.show()
    }
  }
  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe
  }
}
