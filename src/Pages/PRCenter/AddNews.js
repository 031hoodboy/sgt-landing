import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    idx: "",
    news_sub: "",
    newscon: "",
    regdate: "",
    editdate: "",
  };

  onIdxChange = e => {
    this.setState({
        idx: e.target.value
    });
  };

  onNewsSubChange = e => {
    this.setState({
        news_sub: e.target.value
    });
  };

  onNewsconChange = e => {
    this.setState({
        newscon: e.target.value
    });
  };

  onRegdateChange = e => {
    this.setState({
        regdate: e.target.value
    });
  };

  onEditdateChange = e => {
    this.setState({
        editdate: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
        idx: this.state.idx,
        news_sub: this.state.news_sub,
        newscon: this.state.newscon,
        regdate: this.state.regdate,
        editdate: this.state.editdate,
    };
    axios
      .post("https://www.sgtapi.tk/news/newslist.do", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
          <input
            placeholder="아이디" value={this.state.idx}
            onChange={this.onIdxChange} 
          />
            <input
            placeholder="제목" value={this.state.news_sub}
            onChange={this.onNewsSubChange} 
          />
          <textarea
            placeholder="내용" value={this.state.newscon}
            onChange={this.onNewsconChange} 
          />
          <input
            placeholder="등록일" value={this.state.regdate}
            onChange={this.onRegdateChange} 
          />
          <input
            placeholder="수정일" value={this.state.editdate}
            onChange={this.onEditdateChange} 
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

export default Post;