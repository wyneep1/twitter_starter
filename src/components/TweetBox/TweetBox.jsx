import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {

  function handleOnTweetTextChange(evt){
    props.setTweetText(evt.target.value);
  }
  function handleOnSubmit(){
    var newTweet = {
    name: props.userProfile.name,
    handle: props.userProfile.handle,
    text: props.tweetText,
    comments: 0,
    retweets: 0,
    likes: 0,
    id: props.tweets.length,
    }
    props.setTweets([...props.tweets, newTweet])
    props.setTweetText('')
  }
  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} tweetText={props.tweetText}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  const charLeft = 140-props.tweetText.length;
  let redOrNot = "";
  if(charLeft <0){
    redOrNot= "tweet-length red";
  } else{
    redOrNot = "tweet-length";
  }
  if(charLeft>139){
    return <span></span>
  }else{
    return <span className={redOrNot}>{charLeft}</span>
  }
}

export function TweetSubmitButton(props) {
  let disable = (props.tweetText != null && props.tweetText.length > 140)

  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} disabled={((props.tweetText == '' || disable) ? true: false)} >Tweet</button>
    </div>
  )
}
