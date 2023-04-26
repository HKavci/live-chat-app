import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHSj2GP_WNk6g/profile-displayphoto-shrink_800_800/0/1677167190150?e=1687996800&v=beta&t=eHA0ZweA8nDytAmB5nHDCzabHNqedCV-WdBNunVI2-E"
          alt=""
        />
        <div className="userChatInfo">
          <span>Hakan</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
