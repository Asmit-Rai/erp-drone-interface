const PopUp = ({ onClose }: { onClose: () => void }) => {
  {
    return (
      <div className="absolute top-30 w-[80vw] max-sm:w-[80vw] h-[60vh]">
        <button
          onClick={onClose}
          className="close bg-[#FF833A] top-0 block w-20"
          type="button"
        >
          Close
        </button>
        <div className="w-full h-full border-2 border-dotted bg-[#252729] p-6">
          <h2 className="text-xl font-bold mb-4 text-[#FF833A]">
            How to Connect to the Drone
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-lg">
            <li>Go to your device’s Wi-Fi settings.</li>
            <li>
              Look for the drone’s Wi-Fi network (e.g.,{" "}
              <strong>DRONE_XXXX</strong>).
            </li>
            <li>Select the network and tap on “Connect.”</li>
            <li>If asked, enter the password provided with the drone.</li>
            <li>Once connected, return to this page to complete setup.</li>
            <li>Click “Connect” to start controlling the drone.</li>
          </ol>
          <p className="mt-4 text-lg text-gray-400">
            Note: Make sure the drone is powered on and within range.
          </p>
        </div>
      </div>
    );
  }
};

export default PopUp;
