import { convertUtils } from './utils/convert.utils'
import { errorUtils } from './utils/errors.utils'
import { fileUtils } from './utils/file.utils'

const Command = async () => {
  const { showToastError, showToastSuccess } = errorUtils
  const { slowedAndReverb } = convertUtils
  const { getSelectedFilePaths } = fileUtils

  await showToastSuccess('slowing down songs', '🪩')

  try {
    const files = await getSelectedFilePaths()
    files.forEach((file) => slowedAndReverb(file))
    await showToastSuccess('slowed + reverb completed', '🎉')
  } catch (error) {
    await showToastError(error)
  }
}

export default Command
