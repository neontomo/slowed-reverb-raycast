import { getSelectedFinderItems } from '@raycast/api'
import { errorUtils } from './errors.utils'

const hasCorrectExtension = (path: string) => {
  const extensions = ['mp3', 'wav', 'flac', 'ogg', 'm4a', 'aac', 'mp4']
  return extensions.some((extension) => path.toLowerCase().endsWith(`.${extension}`))
}

const getSelectedFilePaths = async () => {
  const files = await getSelectedFinderItems()
  const paths = files.map((file) => file.path).filter(hasCorrectExtension)
  if (!paths.length) errorUtils.throwError('no songs selected')

  return paths
}

export const fileUtils = { getSelectedFilePaths, hasCorrectExtension }
