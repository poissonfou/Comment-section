import "./App.css";
import userProfile from "./images/avatars/image-juliusomo.png";
import profileCommentOne from "./images/avatars/image-amyrobson.png";
import profileCommentTwo from "./images/avatars/image-maxblagun.png";
import profileCommentThree from "./images/avatars/image-ramsesmiron.png";
import profileCommentFour from "./images/avatars/image-juliusomo.png";

import plusSign from "./images/icon-plus.svg";
import minusSign from "./images/icon-minus.svg";
import replyIcon from "./images/icon-reply.svg";
import deleteIcon from "./images/icon-delete.svg";

function App() {
  return (
    <>
      <main className="commments">
        <div className="comments__commentbox">
          <div className="comments__comment">
            <div className="comment__authorinfo">
              <img src={profileCommentOne} alt="profile picture" />
              <p className="comment__author">amyrobson</p>
              <p className="comment__timestamp">1 month ago</p>
            </div>
            <p className="comment__content">
              Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You've nailed the design and the
              responsiveness at various breakpoints works really well.
            </p>
            <div className="comment__actions">
              <div className="comment__upvotebox">
                <img src={plusSign} alt="plus sign" />
                <span>12</span>
                <img src={minusSign} alt="minus sign" />
              </div>
              <div className="comment__replybox">
                <img src={replyIcon} alt="reply icon" />
                <span>Reply</span>
              </div>
            </div>
          </div>
          <ul className="comment__replies"></ul>
        </div>
        <div className="comments__commentbox">
          <div className="comments__comment">
            <div className="comment__authorinfo">
              <img src={profileCommentTwo} alt="profile picture" />
              <p className="comment__author">maxblagun</p>
              <p className="comment__timestamp">2 weeks ago</p>
            </div>
            <p className="comment__content">
              Woah, your project looks awesome! How long have you been coding
              for? I'm still new, but think I want to dive into React as well
              soon. Perhaps you can give me an insight on where I can learn
              React? Thanks!
            </p>
            <div className="comment__actions">
              <div className="comment__upvotebox">
                <img src={plusSign} alt="plus sign" />
                <span>5</span>
                <img src={minusSign} alt="minus sign" />
              </div>
              <div className="comment__replybox">
                <img src={replyIcon} alt="reply icon" />
                <span>Reply</span>
              </div>
            </div>
          </div>
          <ul className="comment__replies">
            <li>
              <div className="comments__comment">
                <div className="comment__authorinfo">
                  <img src={profileCommentThree} alt="profile picture" />
                  <p className="comment__author">ramsesmiron</p>
                  <p className="comment__timestamp">1 week ago</p>
                </div>
                <p className="comment__content">
                  If you're still new, I'd recommend focusing on the
                  fundamentals of HTML, CSS, and JS before considering React.
                  It's very tempting to jump ahead but lay a solid foundation
                  first.
                </p>
                <div className="comment__actions">
                  <div className="comment__upvotebox">
                    <img src={plusSign} alt="plus sign" />
                    <span>4</span>
                    <img src={minusSign} alt="minus sign" />
                  </div>
                  <div className="comment__replybox">
                    <img src={replyIcon} alt="reply icon" />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="comments__comment">
                <div className="comment__authorinfo">
                  <img src={profileCommentFour} alt="profile picture" />
                  <p className="comment__author">juliusomo</p>
                  <span className="user__mark">you</span>
                  <p className="comment__timestamp">2 days ago</p>
                </div>
                <p className="comment__content">
                  I couldn't agree more with this. Everything moves so fast and
                  it always seems like everyone knows the newest
                  library/framework. But the fundamentals are what stay
                  constant.
                </p>
                <div className="comment__actions">
                  <div className="comment__upvotebox">
                    <img src={plusSign} alt="plus sign" />
                    <span>2</span>
                    <img src={minusSign} alt="minus sign" />
                  </div>
                  <div className="comment__crudactions">
                    <div className="comment__deletebox">
                      <img src={deleteIcon} alt="reply icon" />
                      <span>Delete</span>
                    </div>
                    <div className="comment__replybox">
                      <img src={replyIcon} alt="reply icon" />
                      <span>Reply</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
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

export default App;
