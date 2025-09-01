const Post = ({ title }) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        padding: "5px",
        margin: "5px",
        color: "white",
      }}
    >
      {title}
    </div>
  );
};

export default Post;
