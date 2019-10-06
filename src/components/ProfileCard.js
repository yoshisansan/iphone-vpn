import React from 'react'
import styled from 'styled-components'


const ProfileWrapper = styled.div`
  margin-top: 1.8rem;
  width: 28.4rem;
  background-color: #fff;
  border-radius: 3rem;
  border: 0.8rem solid #000;
  color: #333;
  letter-spacing: 0.1rem;

  @media screen and (min-width: 0px) and (max-width: 900px) {
    margin: 0 auto;
    margin-top: 2rem;
  }

  p{
    // グローバルで1.6remのpaddingを打ち消す
    padding: 0;
  }

  .profile-upper{
    border-radius: 2.1rem 2.1rem 0 0;
    position: relative;
    width: 100%;
    height: 18.7rem;
    background-color: #e0e0e0;
    // background-image: url();
    background-size: cover;
  }

  .profile-upper .profile-img{
    position: absolute;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    bottom: -25%;
    background-color: #121212;
    background-image: url('../images/iphoneVPNprofile.jpg');
    background-size: cover;
  }

  .profile{
    padding-top: 5.5rem;
  }

  .profile .profile-main{
    text-align: center;
  }

  .profile .profile-main .name{
    font-size: 1.8rem;
    line-height: 2.9rem;
    font-weight: bold;
    color: #333;
  }

  .profile .profile-main .work{
    font-size: 1.4rem;
    line-height: 2.3rem;
    color: #666;
  }

  .profile .profile-desc{
    font-size: 1.6rem;
    padding-top: 1rem;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 1rem;
  }

  .profile .profile-desc .description{
    line-height: 2.6rem;
  }

  .profile .profile-desc p{
    padding-bottom: 1.4rem;
  }

  .profile-sns{
    background-color: #000;
    background-image: url('../images/profileBottom');
    background-size: auto;
    padding: 1rem;
    border-radius: 0 0 2.1rem 2.1rem;
  }

  .profile-sns span{
    display: block;
    text-align: center;
    font-size: 1.8rem;
    color: #fff;
    font-weight: bold;
  }

  .profile-sns .sns-service{
    text-align: center;
  }

  .profile-sns a{
    font-size: 2rem;
    line-height: 4.8rem;
    color: #fff;
  }

`

const ProfileCard = () => (
  <ProfileWrapper>
    <div class="profile-upper">
      <div class="profile-img"></div>
    </div>
    <div class="profile">
      <div class="profile-main">
        <p class="name">よしいたけ</p>
        <p class="work">Webサービス系アフィリエイター</p>
      </div>
      <div class="profile-desc">
        <p class="description">海外ノマド歴５年目、VPN使用歴３年目。</p>
        <p class="description">海外バイヤー→IT系メディアを運営しながらWebサービス開発。</p>
        <p class="description">ライフスタイルのブログはBASHOまで</p>
      </div>
    </div>
    <div class="profile-sns">
      <span>\ SNSをチェックする /</span>
      <div class="sns-service">
        <a href="https://twitter.com/akifumiyoshimu">Twitter</a>
      </div>
    </div>
  </ProfileWrapper>
);

export default ProfileCard;