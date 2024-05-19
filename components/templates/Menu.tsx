import styled from "styled-components"
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-brands-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo, faDiceD20, faFileLines, faPenNib, faFlask, faBookTanakh, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { UiConf } from '@/constants/uiconf'
interface Props {
    currentPage?: string,
}
export const Menu = ({
    currentPage,
  }: Props) => {
    const currentPageName = currentPage;
    return (
        <SSection>
            <SNavi>
                <ul>
                    {/* <li>
                    {(currentPage == 'about') ? 
                        <SLink href={`/about`} theme={{color: UiConf.info.regular}}><SFontAwesomeIcon icon={faCircleInfo} />About</SLink>:
                        <SLink href={`/about`} ><SFontAwesomeIcon icon={faCircleInfo} />About</SLink>   
                    }
                    </li> */}
                    <li>
                    {(currentPage == 'works') ? 
                        <SLink href={`/works`} theme={{color: UiConf.works.regular}}><SFontAwesomeIcon icon={faDiceD20} />Works</SLink>:
                        <SLink href={`/works`}><SFontAwesomeIcon icon={faDiceD20} />Works</SLink>
                    }
                    </li>
                    <li>
                    {(currentPage == 'report') ? 
                        <SLink href={`/report`} theme={{color: UiConf.report.regular}}><SFontAwesomeIcon icon={faFileLines} />Analysis</SLink>:
                        <SLink href={`/report`}><SFontAwesomeIcon icon={faFileLines} />Analysis</SLink>
                    }
                    </li>
                    <li>
                    {(currentPage == 'lab') ? 
                        <SLink href={`/lab`} theme={{color: UiConf.lab.regular}}><SFontAwesomeIcon icon={faFlask} />Lab</SLink>:
                        <SLink href={`/lab`}><SFontAwesomeIcon icon={faFlask} />Lab</SLink>
                    }
                    </li>
                    {/* <li><SLink href={`/lab`}><SFontAwesomeIcon icon={faFlask} />Labs</SLink></li> */}
                    <li>
                    {(currentPage == 'devlog') ? 
                        <SLink href={`/devlog`} theme={{color: UiConf.devlog.regular}}><SFontAwesomeIcon icon={faBookTanakh} />Dev</SLink>:
                        <SLink href={`/devlog`}><SFontAwesomeIcon icon={faBookTanakh} />Dev</SLink>
                    }
                    </li>
                    <li>
                    {(currentPage == 'article') ? 
                        <SLink href={`/article`} theme={{color: UiConf.article.regular}}><SFontAwesomeIcon icon={faNewspaper} />Methods</SLink>:
                        <SLink href={`/article`}><SFontAwesomeIcon icon={faNewspaper} />Methods</SLink>
                    }
                    </li>
                    {/* <li>
                    {(currentPage == 'blog') ? 
                        <SLink href={`/blog`} theme={{color: UiConf.blog.regular}}><SFontAwesomeIcon icon={faPenNib} />Blog</SLink>:
                        <SLink href={`/blog`}><SFontAwesomeIcon icon={faPenNib} />Blog</SLink>
                    }
                    </li> */}

                </ul>
            </SNavi>
        </SSection>
    );
}

const SLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    // color: ${({theme}) => theme.color};
    color: #eeeeee;
`;

SLink.defaultProps = {
    theme: {
        color: "#eeeeee"
    }
}

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`;

const SSection= styled.section`
    height: 48px;
    // background: linear-gradient(45deg, #222 50%, #444);
    color: #eee;
`;

const SNavi= styled.nav`
    height: 100%;
    ul {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            margin-left: 40px;
            font-size: 19px;
        }
    }
`;


export default Menu