import { type FC } from 'react';

interface MediaDisplayProps {
  image?: string;
  video?: string;
  alt?: string;
  poster?: string;
}

const MediaDisplay: FC<MediaDisplayProps> = ({ image, video, alt, poster }) => {
  let mediaElement = null;

  if (video) {
    mediaElement = (
      <video
        className="
        hight-auto lg:pr-0 lg:max-w-full 
        lg:grayscale transition-all duration-500 ease-in-out
        group-hover:grayscale-0"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        preload="auto"
        poster={poster}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else if (image) {
    mediaElement = (
      <img
        className="media-element image-element"
        src={image}
        alt={alt || 'Portfolio image'}
      />
    );
  } else {
    mediaElement = <p>No media preview available.</p>;
  }

  return (
    <div className=" 
      hight-auto md:pr-6 lg:pr-0 
      lg:max-w-full lg:grayscale transition-all duration-500 
      ease-in-out group-hover:grayscale-0"
    >
      {mediaElement}
      {/* You can add common overlays or content here */}
    </div>
  );
};

export default MediaDisplay;
