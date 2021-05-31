import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createAuthUpdate, getUser } from '../core/store/actions';

const Sidebar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    // dispatch(createAuthUpdate(false));
    dispatch(getUser());
  }, []);

  return (
    <aside className="menu">
      <div className="nes-container is-rounded">
        <h3>
          <Link to="/"># Home</Link>
        </h3>
        <h3>
          <Link to="/profile"># Profile</Link>
        </h3>
        <h3>
          {/* <Link to="/login"># Log out</Link> */}
          <button
            type="button"
            className="nes-btn is-primary tweet-btn"
            onClick={onLogout}
          >
            # Log out
          </button>
        </h3>
        {isLoggedIn ? (
          <section className="menu-tweet-action">
            <button
              type="button"
              className="nes-btn is-primary tweet-btn"
              onclick="document.getElementById('dialog-default').showModal();"
            >
              tweet
            </button>
            <dialog className="nes-dialog" id="dialog-default">
              <form method="dialog">
                <label for="textarea_field">What's happening?</label>
                <textarea
                  id="textarea_field"
                  className="nes-textarea"
                ></textarea>
                <menu className="dialog-menu">
                  <button className="nes-btn">Cancel</button>
                  <button className="nes-btn is-primary">Tweet</button>
                </menu>
              </form>
            </dialog>
          </section>
        ) : (
          <></>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
