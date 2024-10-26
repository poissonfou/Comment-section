import "./Popup.css";

function Popup({ deleting, close }) {
  return (
    <>
      <div className="overlay">
        <div className="popup">
          <h1 className="popup__title">Delete comment</h1>

          <p className="popup__text">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>

          <div>
            <button
              className="popup__cancel"
              onClick={() => close(() => false)}
            >
              No, cancel
            </button>
            <button
              className="popup__delete"
              onClick={() => {
                close(() => false);
                deleting.remove();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
