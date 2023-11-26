function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = [];
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  const request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  const loader = this;

  request.onload = () => {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      (buffer) => {
        if (!buffer) {
          alert('Error Decoding File Data: ' + url);
          return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
          loader.onload(loader.bufferList);
      },
      (error) => {
        console.error('DecodeAudioData Error', error);
      }
    );
  };

  request.onerror = () => {
    alert('BufferLoader: XHR Error');
  };

  request.send();
};

BufferLoader.prototype.load = function() {
	for (let i = 0; i < this.urlList.length; ++i) {
		this.loadBuffer(this.urlList[i], i);
	}
};
