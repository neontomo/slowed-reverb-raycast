import { showToast, Toast } from '@raycast/api'

const throwError = (message: string) => {
  throw new Error(message)
}

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message.toLowerCase()
  return String(error).toLowerCase()
}

const showToastError = async (error: unknown) => {
  await showToast({ title: `${getErrorMessage(error)}  ❌`, style: Toast.Style.Failure })
}

const showToastSuccess = async (message: unknown, emoji?: string) => {
  await showToast({ title: `${message}  ${emoji}`.trim() })
}

export const errorUtils = {
  throwError,
  getErrorMessage,
  showToastError,
  showToastSuccess
}
