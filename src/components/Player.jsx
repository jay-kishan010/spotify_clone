import { assets, songsData } from "../assets/assets";

const Player = () => {
  return (
    <div className="bg-black h-[10%] text-white flex justify-between items-center px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img src={songsData[0].image} alt="" className="w-12" />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>

        <div className="flex items-center gap-5">
            <p>1:06</p>
            <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
               <hr className="h-1 border-none w-10 bg-green-800 rounded-full " /> 
            </div>

            <p>3:10</p>
        </div>

      </div>
        <div className="hidden lg:flex items-center gap-2 opacity-75">
            <img src={assets.plays_icon} alt="" className="w-4" />
            <img src={assets.mic_icon} alt="" className="w-4" />
            <img src={assets.queue_icon} alt="" className="w-4" />
            <img src={assets.speaker_icon} alt="" className="w-4" />
            <img src={assets.volume_icon} alt="" className="w-4" />
            <div className="w-20 bg-slate-50 h-1 rounded">
                
            </div>
            <img src={assets.mini_player_icon} alt="" className="w-4" />
            <img src={assets.zoom_icon} alt="" className="w-4" />
        </div>
    </div>
  );
};

export default Player;
