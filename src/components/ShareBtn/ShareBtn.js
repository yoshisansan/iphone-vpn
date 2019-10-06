import React from "react"
import "./css/icon.css"
import "./css/style.css"

import styled from 'styled-components';

const ShareBtnWrapper = styled.div`
  padding: 2rem 1rem;
  text-align: center;
  
  p{
    font-weight: bold;
    font-size: 1.6rem;
  }
`

const AncorContent = styled.span`
// ancorタグに中身がないといけないためのダミー
`

const ShareBtn = () => (
  <ShareBtnWrapper>
    <p>\ このページを周りにシェアする /</p>
    <ul class="shareList5">
      <li class="shareList5__item"><a class="shareList5__link icon-twitter" href="https://twiter.com/share?url=https://webdesign-trends.net/entry/3632" target="_blank" title="Twitter" rel="noopener noreferrer"><AncorContent /></a></li>
      <li class="shareList5__item"><a class="shareList5__link icon-facebook" href="http://www.facebook.com/share.php?u={URL}" target="_blank" title="Facebook" rel="noopener noreferrer"><AncorContent /></a></li>
      <li class="shareList5__item"><a class="shareList5__link icon-google-plus" href="https://twiter.com/share?url=https://webdesign-trends.net/entry/3632" target="_blank" title="Google+" rel="noopener noreferrer"><AncorContent /></a></li>
      <li class="shareList5__item"><a class="shareList5__link icon-hatebu" href="https://twiter.com/share?url=https://webdesign-trends.net/entry/3632" target="_blank" title="はてなブックマーク" rel="noopener noreferrer"><AncorContent /></a></li>
      <li class="shareList5__item"><a class="shareList5__link icon-pocket" href="https://twiter.com/share?url=https://webdesign-trends.net/entry/3632" target="_blank" title="Pocket" rel="noopener noreferrer"><AncorContent /></a></li>
      <li class="shareList5__item"><a class="shareList5__link icon-rss" href="https://twiter.com/share?url=https://webdesign-trends.net/entry/3632" target="_blank" title="RSS" rel="noopener noreferrer"><AncorContent /></a></li>
      <li class="shareList5__item"><a class="shareList5__link icon-feedly" href="https://twiter.com/share?url=https://webdesign-trends.net/entry/3632" target="_blank" title="Feedly" rel="noopener noreferrer"><AncorContent /></a></li>
      <li class="shareList5__item"><a class="shareList5__link icon-pinterest" href="https://twiter.com/share?url=https://webdesign-trends.net/entry/3632" target="_blank" title="Pinterest" rel="noopener noreferrer"><AncorContent /></a></li>
      <li class="shareList5__item"><a class="shareList5__link icon-line" href="https://twiter.com/share?url=https://webdesign-trends.net/entry/3632" target="_blank" title="LINE" rel="noopener noreferrer"><AncorContent /></a></li>
    </ul>
  </ShareBtnWrapper>
);

export default ShareBtn;
