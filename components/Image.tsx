import NextImage, { ImageProps } from 'next/image'

const MarkdownImage = ({ ...rest }: ImageProps) => (
  <div className="flex items-center justify-center">
    <NextImage {...rest} className="max-w-lg" />
  </div>
)

export default MarkdownImage
