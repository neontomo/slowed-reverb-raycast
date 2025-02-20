import { execSync } from 'child_process'
import { errorUtils } from './errors.utils'

const getFFmpegPath = () => {
  const commandFolderPath = execSync(`
  locations=(
      /usr/local/bin
      /usr/bin
      /bin
      /usr/sbin
      /sbin
      /opt/X11/bin
      /opt/homebrew/bin
      /usr/local/Cellar
  )
  
  for location in "\${locations[@]}"
  do
      if [ -f "$location/ffmpeg" ]
      then
          echo "$location"
          exit 0
      fi
  done
  
  echo ""
`)
    .toString()
    .trim()

  if (commandFolderPath) return commandFolderPath.replace(/\n/gi, '') + '/ffmpeg'
  return ''
}

const isFFmpegInstalled = () => !!getFFmpegPath()

const executeFFmpegCommand = (inputPath: string, outputPath: string, command: string) => {
  if (!isFFmpegInstalled()) errorUtils.throwError('ffmpeg is not installed')
  return execSync(`${getFFmpegPath()} -i "${inputPath}" ${command} "${outputPath}"`).toString()
}

export const ffmpegUtils = {
  getFFmpegPath,
  isFFmpegInstalled,
  executeFFmpegCommand
}
