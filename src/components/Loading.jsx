import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const Loading = () => {
  return (
    <SkeletonTheme baseColor="#000" highlightColor="#000">
      <Skeleton height={300} width={300} duration={2} />
    </SkeletonTheme>
  );
};

export default Loading;
