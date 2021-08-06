import React from 'react'
import { post } from 'axios';

class CustomerAdd extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    file: null,
    idx: '',
    news_sub: '',
    news_con: '',
    fileName: ''
  }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.addCustomer = this.addCustomer.bind(this)
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.addCustomer()
    .then((response) => {
    console.log(response.data);
    })
  }

  handleFileChange(e) {
    this.setState({
    file: e.target.files[0],
    fileName: e.target.value
    });
  }

  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  addCustomer(){

  const url = 'https://sgtapi.co.kr/news/newsupdate.do';
  const formData = new FormData();
  formData.append('main', this.state.file)
  formData.append('idx', this.state.idx)
  formData.append('news_sub', this.state.news_sub)
  formData.append('news_con', this.state.news_con)


  const news_list = {
  headers: {
  'content-type': 'multipart/form-data'
  }
  }

  return post(url, formData, news_list)
  }



  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
      <h1>게시글 업데이트</h1>
      이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
      아이디: <input type="text" name="idx" value={this.state.idx} onChange={this.handleValueChange} /><br/>
      제목: <input type="text" name="news_sub" value={this.state.news_sub} onChange={this.handleValueChange} /><br/>
      내용: <input type="text" name="news_con" value={this.state.news_con} onChange={this.handleValueChange} /><br/>
      <button type="submit">추가하기</button>
      </form>
    )
  }
}

export default CustomerAdd;