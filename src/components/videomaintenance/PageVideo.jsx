import './PageVideo.css'
function PageVideo() {
  return (
    <div className="video-mantenance">
      <iframe
        width="800"
        height="600"
        src="https://www.youtube.com/embed/xbtCNqwrt08?si=jzHJsQtDk2wQoSZY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="description">
        <h1>Changing Quad Skate Wheels</h1>

        <h2>Required Materials:</h2>
        <ul>
          <li>Skate wrench or nut wrench (usually 13 mm)</li>
          <li>New wheels</li>
          <li>Bearings (if replacement is needed)</li>
          <li>Bearing extractor (optional)</li>
        </ul>

        <h2>Steps to Change the Wheels:</h2>
        <h3>1. Loosen and Remove the Wheels:</h3>
        <ul>
          <li>Use the wrench to loosen the nuts holding the wheels.</li>
          <li>Carefully remove the wheel.</li>
        </ul>

        <h3>2. Remove the Bearings:</h3>
        <ul>
          <li>
            If reusing the bearings, remove them from the old wheel using an
            extractor or by leveraging them out with the skate axle.
          </li>
        </ul>

        <h3>3. Install the Bearings in the New Wheels:</h3>
        <ul>
          <li>Insert a bearing on one side of the new wheel.</li>
          <li>If using spacers, place them between the two bearings.</li>
          <li>Press the second bearing into the other side.</li>
        </ul>

        <h3>4. Mount the New Wheels on the Axles:</h3>
        <ul>
          <li>Place the wheel with the bearings onto the skate axle.</li>
          <li>Ensure it is properly aligned and tighten the nut.</li>
          <li>Do not overtighten to allow free wheel movement.</li>
        </ul>

        <h3>5. Check the Adjustment:</h3>
        <ul>
          <li>
            Spin the wheels to ensure they rotate without excessive resistance.
          </li>
          <li>Adjust the nut tension if necessary.</li>
        </ul>

        <h2>Additional Tips:</h2>
        <ul>
          <li>Clean the axles before installing the new wheels.</li>
          <li>
            If wheels have different wear levels, place the least worn ones at
            the front for better balance.
          </li>
          <li>Use high-quality bearings for smoother performance.</li>
        </ul>
      </div>
    </div>
  )
}

export default PageVideo
