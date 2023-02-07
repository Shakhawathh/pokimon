const Post = ({ launch }) => {
  return (
    <div className="p-24 flex flex-wrap items-center justify-center">
      <div class="flex-shrink-0 m-6 relative overflow-hidden bg-slate-50 rounded-lg max-w-xs shadow-lg">
        <div class="relative pt-10 px-10 flex items-center justify-center">
          <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
          <img class="relative w-40" src={launch.image} alt="" />
        </div>
        <div class="relative text-white px-6 pb-6 mt-6">
          <span class="block opacity-75 -mb-1">{launch.name}</span>
          <div class="flex justify-between">
            <span class="block font-semibold text-xl text-black">
              Peace Lily
            </span>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
