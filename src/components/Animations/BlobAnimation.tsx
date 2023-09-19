import "./BlobAnimation.scss";
import image from "../../assets/pic.jpg";
interface BlobAnimationProps {
  // Props, if any
}

const BlobAnimation: React.FC<BlobAnimationProps> = () => {
  return (
    <div className="blob-animation">
      <img
        src={image}
        className="blob-image-animation"
        style={{ maxHeight: 200 }}
      />
    </div>
  );
};

export default BlobAnimation;
