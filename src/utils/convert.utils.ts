import path from 'node:path'
import { ffmpegUtils } from './ffmpeg.utils'

const slowedAndReverb = (inputPath: string) => {
  const inputName = path.basename(inputPath, path.extname(inputPath))
  const outputPath = path.join(path.dirname(inputPath), `${inputName}-slowed.mp3`)

  const command = `-filter_complex "asetrate=44100*0.8,aresample=44100,atempo=1.0"`
  ffmpegUtils.executeFFmpegCommand(inputPath, outputPath, command)
}

export const convertUtils = {
  slowedAndReverb
}
