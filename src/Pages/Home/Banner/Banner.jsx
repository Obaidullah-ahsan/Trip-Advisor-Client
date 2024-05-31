import "./Banner.css";

const Banner = () => {
  return (
    <div className="h-[630px] banner-bg flex items-center">
      <div className="flex flex-col justify-center h-full max-w-3xl max-h-[450px] p-20 bg-base-100 bg-opacity-30">
        <h2 className="text-5xl font-bold leading-[60px] mb-3">
          <span className="text-[80px]">Discover</span><br />New Destination
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus est
          reprehenderit quisquam maxime ullam pariatur, aspernatur eum
          cupiditate, in minima explicabo eaque quidem eos cumque, voluptas
          voluptatem sint ea reiciendis!
        </p>
      </div>
    </div>
  );
};

export default Banner;
