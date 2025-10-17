import { useIntersectionObserver } from "../utils/useIntersectionObserver";

const DotNavigation = () => {
  const { ref, isIntersecting, entry } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-10% 0px -10% 0px",
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      {isIntersecting ? <p className="text-white text-7xl">Видно!</p> : <p className="text-white text-7xl">Не Видно!</p> }
    </div>
  );
};

export default DotNavigation;
