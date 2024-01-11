const tg = window.Telegram.WebApp

export function useTelegram() {
  const onClose = () => {
    tg.close()
    console.log(tg.initDataUnsafe)
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
