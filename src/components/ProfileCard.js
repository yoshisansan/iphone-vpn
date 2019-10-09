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
    background-image: url('https://vpn-smartphone.com/wp-content/uploads/2019/10/upperProfileCardImg.jpg');
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
    background-image: url('https://vpn-smartphone.com/wp-content/uploads/2019/10/iphoneVPNprofileImg.jpg');
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
    background-image: url('https://vpn-smartphone.com/wp-content/uploads/2019/10/bottomProfileCard.jpg');
    background-size: cover;
    padding: 1rem;
    border-radius: 0 0 2.1rem 2.1rem;
  }

  .profile-sns span{
    display: block;
    text-align: center;
    font-size: 1.8rem;
    color: #fff;
    font-weight: bold;
    padding-top: 1rem;
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
    <div className="profile-upper">
      <div className="profile-img"></div>
    </div>
    <div className="profile">
      <div className="profile-main">
        <p className="name">よしいたけ</p>
        <p className="work">Webサービス系アフィリエイター</p>
      </div>
      <div className="profile-desc">
        <p className="description">海外ノマド歴５年目、VPN使用歴３年目。</p>
        <p className="description">海外バイヤー→IT系メディアを運営しながらWebサービス開発。</p>
        <p className="description">ライフスタイルのブログはBASHOまで</p>
      </div>
    </div>
    <div className="profile-sns">
      <span>\ SNSをチェックする /</span>
      <div className="sns-service">
        <a href="https://twitter.com/akifumiyoshimu">Twitter</a>
      </div>
    </div>
  </ProfileWrapper>
);

export default ProfileCard;