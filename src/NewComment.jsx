import "./NewComment.css";

function NewComment() {
  return (
    <>
      <form className="newcomment">
        <label htmlFor="comment" className="sr-only">
          New Comment
        </label>
        <textarea
          name="comment"
          className="newcomment__textbox"
          placeholder="Add a comment..."
          id="comment"
        ></textarea>
        <div className="newcomment__submitbox">
          <img src={userProfile} alt="profile picture" />
          <button className="newcomment__submit">Send</button>
        </div>
      </form>
    </>
  );
}

export default NewComment;
