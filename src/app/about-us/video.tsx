// VideoSection.tsx

const VideoSection = () => {
  return (
    <div className="col-md-12">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row bg-black text-white">

        <div className="p-5 md:w-1/2 order-2 md:order-1">
          <div className="video-box">
            <div className="video-wrapper relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                title="video-section"
                src="https://www.youtube.com/embed/FIKKX7070lI"
                frameBorder="0"
                rel="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
                className="absolute top-0 left-0 w-full h-full"
                id="yt-4cb202ae-b8a7-4063-84e0-929b1d017499"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="p-8 md:w-1/2 order-1 md:order-2">
          <h4 className="text-2xl mb-4">Plan</h4>
          <p className="text-lg">Your journey to adventure</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea eum, dolor quisquam amet cum reprehenderit atque totam corporis eligendi quaerat enim dolore repellendus non fugit expedita quia quibusdam voluptatum.</p>
        </div>

      </div>
    </div>
  );
};

export default VideoSection;
