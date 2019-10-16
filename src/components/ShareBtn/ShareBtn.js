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

const ShareBtn = ({locateLink, title}) => {
  const twitterUrl = `https//twitter.com/share?text=${title}&url=${locateLink}&via=ninja_secure`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(locateLink)}&t=${encodeURI(title)}`;
  const hatenaUrl = `https//b.hatena.ne.jp/add?mode=confirm&url=${locateLink}`;
  const pocketUrl = `//getpocket.com/edit?url=${locateLink}&title=${title}`;
  const lineUrl = `//line.me/R/msg/text/?${locateLink}.'%0A'.${title}`;

  const openSNS = (url) => {
    window.open(url, '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
    return false;
  }
  return (
    <ShareBtnWrapper>
      <p>\ このページを周りにシェアする /</p>
      <ul className="shareList5">
        <li className="shareList5__item"><a className="shareList5__link icon-twitter" href={this} title="Twitterでシェア" onClick={() => openSNS(twitterUrl)}><AncorContent /></a></li>
        <li className="shareList5__item"><a className="shareList5__link icon-facebook" href={this} onClick={() => openSNS(facebookUrl)} title="Facebook" rel="noopener noreferrer"><AncorContent /></a></li>
        <li className="shareList5__item"><a className="shareList5__link icon-hatebu" href={this} onClick={() => openSNS(hatenaUrl)} target="_blank" title="はてなブックマーク" rel="noopener noreferrer"><AncorContent /></a></li>
        <li className="shareList5__item"><a className="shareList5__link icon-feedly" href={this} onClick={() => openSNS(facebookUrl)} title="Feedly" rel="noopener noreferrer"><AncorContent /></a></li>
        <li className="shareList5__item"><a className="shareList5__link icon-pocket" href={this} onClick={() => openSNS(pocketUrl)} title="Pocket" rel="noopener noreferrer"><AncorContent /></a></li>
        <li className="shareList5__item"><a className="shareList5__link icon-line" href={this} onClick={() => openSNS(lineUrl)} title="LINE" rel="noopener noreferrer"><AncorContent /></a></li>
      </ul>
    </ShareBtnWrapper>
  );
}

export default ShareBtn;
