const VideoMaintenance = () => {
  return (
    <div className="video-maintenance">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/L43kYE0hLFI?si=03jqVQmi-A2ZjV0_"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="description">
        <h1>Changing Quad Skate Wheels</h1>
      </div>
    </div>
  )
}

export default VideoMaintenance
