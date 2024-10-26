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
import editIcon from "./images/icon-edit.svg";

import Popup from "./Popup";

import { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [deleting, setDeleting] = useState(null);

  function upvote(e) {
    const span = e.currentTarget.nextElementSibling;
    const n = span.innerText;
    span.innerText = +n + 1;
  }

  function downvote(e) {
    const span = e.currentTarget.previousElementSibling;
    const n = span.innerText;
    if (n == "0") return;
    span.innerText = +n - 1;
  }

  function deleteComment(e) {
    let element = e.currentTarget;
    while (![...element.parentNode.classList].includes("comments__comment")) {
      element = element.parentNode;
    }

    setShowPopup(() => true);
    setDeleting(() => element.parentNode);
  }

  return (
    <>
      {showPopup && <Popup deleting={deleting} close={setShowPopup} />}
      <main className="commments">
        <div className="comments__commentbox">
          <div className="comments__comment">
            <div>
              <div className="comment__topsection">
                <div className="comment__authorinfo">
                  <img src={profileCommentOne} alt="profile picture" />
                  <p className="comment__author">amyrobson</p>
                  <p className="comment__timestamp">1 month ago</p>
                </div>
                <button className="comment__replybox commment__replybox--desktop">
                  <img src={replyIcon} alt="reply icon" />
                  <span>Reply</span>
                </button>
              </div>
              <p className="comment__content">
                Impressive! Though it seems the drag feature could be improved.
                But overall it looks incredible. You've nailed the design and
                the responsiveness at various breakpoints works really well.
              </p>
            </div>

            <div className="comment__actions">
              <div className="comment__upvotebox">
                <button onClick={(e) => upvote(e)}>
                  <img src={plusSign} alt="plus sign" />
                </button>

                <span>12</span>
                <button onClick={(e) => downvote(e)}>
                  <img src={minusSign} alt="minus sign" />
                </button>
              </div>
              <button className="comment__replybox">
                <img src={replyIcon} alt="reply icon" />
                <span>Reply</span>
              </button>
            </div>
          </div>
          <ul className="comment__replies"></ul>
        </div>
        <div className="comments__commentbox">
          <div className="comments__comment">
            <div>
              <div className="comment__topsection">
                <div className="comment__authorinfo">
                  <img src={profileCommentTwo} alt="profile picture" />
                  <p className="comment__author">maxblagun</p>
                  <p className="comment__timestamp">2 weeks ago</p>
                </div>
                <button className="comment__replybox  commment__replybox--desktop">
                  <img src={replyIcon} alt="reply icon" />
                  <span>Reply</span>
                </button>
              </div>
              <p className="comment__content">
                Woah, your project looks awesome! How long have you been coding
                for? I'm still new, but think I want to dive into React as well
                soon. Perhaps you can give me an insight on where I can learn
                React? Thanks!
              </p>
            </div>

            <div className="comment__actions">
              <div className="comment__upvotebox">
                <button onClick={(e) => upvote(e)}>
                  <img src={plusSign} alt="plus sign" />
                </button>

                <span>5</span>
                <button onClick={(e) => downvote(e)}>
                  <img src={minusSign} alt="minus sign" />
                </button>
              </div>
              <button className="comment__replybox">
                <img src={replyIcon} alt="reply icon" />
                <span>Reply</span>
              </button>
            </div>
          </div>
          <ul className="comment__replies">
            <li>
              <div className="comments__comment">
                <div>
                  <div className="comment__topsection">
                    <div className="comment__authorinfo">
                      <img src={profileCommentThree} alt="profile picture" />
                      <p className="comment__author">ramsesmiron</p>
                      <p className="comment__timestamp">1 week ago</p>
                    </div>
                    <button className="comment__replybox  commment__replybox--desktop">
                      <img src={replyIcon} alt="reply icon" />
                      <span>Reply</span>
                    </button>
                  </div>
                  <p className="comment__content">
                    <span className="mention">@maxblagun</span> If you're still
                    new, I'd recommend focusing on the fundamentals of HTML,
                    CSS, and JS before considering React. It's very tempting to
                    jump ahead but lay a solid foundation first.
                  </p>
                </div>

                <div className="comment__actions">
                  <div className="comment__upvotebox">
                    <button onClick={(e) => upvote(e)}>
                      <img src={plusSign} alt="plus sign" />
                    </button>
                    <span>4</span>
                    <button onClick={(e) => downvote(e)}>
                      <img src={minusSign} alt="minus sign" />
                    </button>
                  </div>
                  <button className="comment__replybox">
                    <img src={replyIcon} alt="reply icon" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="comments__comment">
                <div>
                  <div className="comment__topsection">
                    <div className="comment__authorinfo">
                      <img src={profileCommentFour} alt="profile picture" />
                      <p className="comment__author">juliusomo</p>
                      <span className="user__mark">you</span>
                      <p className="comment__timestamp">2 days ago</p>
                    </div>
                    <div className="comment__crudactions comment__crudactions--desktop">
                      <button
                        className="comment__deletebox"
                        onClick={(e) => deleteComment(e)}
                      >
                        <img src={deleteIcon} alt="reply icon" />
                        <span>Delete</span>
                      </button>
                      <button className="comment__replybox  commment__replybox--desktop">
                        <img src={editIcon} alt="edit icon" />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                  <p className="comment__content">
                    <span className="mention">@ramsesmiron</span> I couldn't
                    agree more with this. Everything moves so fast and it always
                    seems like everyone knows the newest library/framework. But
                    the fundamentals are what stay constant.
                  </p>
                </div>

                <div className="comment__actions">
                  <div className="comment__upvotebox">
                    <button onClick={(e) => upvote(e)}>
                      <img src={plusSign} alt="plus sign" />
                    </button>
                    <span>2</span>
                    <button onClick={(e) => downvote(e)}>
                      <img src={minusSign} alt="minus sign" />
                    </button>
                  </div>
                  <div className="comment__crudactions">
                    <button
                      className="comment__deletebox"
                      onClick={(e) => deleteComment(e)}
                    >
                      <img src={deleteIcon} alt="reply icon" />
                      <span>Delete</span>
                    </button>
                    <button className="comment__replybox">
                      <img src={editIcon} alt="edit icon" />
                      <span>Edit</span>
                    </button>
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
