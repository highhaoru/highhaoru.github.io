window.onload = function() {
    const bufferLoader = new BufferLoader(
        Audio.audioContext,
        [
            "A4.mp3",
            "A5.mp3",
            "C4.mp3",
            "C5.mp3",
            "D4.mp3",
            "D5.mp3",
            "E4.mp3",
            "E5.mp3",
            "G4.mp3",
            "G5.mp3",
        ],
        finishedLoading
    );
    bufferLoader.load();

    function finishedLoading(bufferList) {
        Audio.init(bufferList);

        const canvas = document.getElementById("canvas");
        const view = new View(canvas);

        canvas.addEventListener("mousedown", (event) => view.handleClick(event), false);
        setInterval(() => view.updateDisplay(), view.frameRate);
    }
};
