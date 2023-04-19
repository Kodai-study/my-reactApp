// ボタンを縦に並べたサイドバーを表示するコンポーネント
// デフォルトのHTML要素のみで構成する。
// ボタンを押すと、そのボタンに対応するコンポーネントを表示する。

import React, { useState, useEffect, useRef } from "react";
import "./SlideBar.css";
import img_hub from "./ham-menu-image01.png";
import Badge from '@mui/material/Badge'
import { Icon } from '@mui/material';
import MailIcon from '@mui/icons-material/Email';


// ボタンをリストで表示するコンポーネントを作成する
const menuList = [
    { id: 1, name: "ホーム" },
    { id: 2, name: "登録" },
    { id: 3, name: "ログイン" },
];



// slideOut スライドバーと、子の要素全てに slideOut のアニメーションを適用する関数
// アニメーションにかかる時間は 0.5 秒
const SlideBar = () => {

    const sideBar = document.querySelector(".sideBar");
    const menuButton = document.querySelector(".menuButton");
    const ss = document.querySelector(".ss");
    const menuButtonList = document.querySelectorAll(".menuButton");
    sideBar.classList.add("slideOut");
    menuButton.classList.add("slideOut");
    ss.classList.add("slideOut");
    menuButtonList.forEach((menuButton) => {
        menuButton.classList.add("slideOut");
    });
};

// サイドバーを表示するコンポーネントを作成する
// ボタンを押すと、サイドバーが表示される
// ボタンを押すと、サイドバーが閉じる


const SamplePage_SideBar = () => {
    const [isToggled, setIsToggled] = useState(true);

    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    // sidebarRef に、.sidebar クラスの要素を格納する
    const sideBarRef = useRef(null);

    const updateSidebarWidth = () => {
        const contentWidth = sideBarRef.current.querySelector(".menuList").scrollWidth;

        if (isToggled) {
            sideBarRef.current.style.width = `${contentWidth + 20}px`;
        } else {
            sideBarRef.current.style.width = "40px";
        }
    };

    // .sideBar クラスの横幅を変更する関数



    return (
        <div className={isToggled ? "sideBar" : "sideBar close"}
            ref={sideBarRef}>
            <button id="menuButton" onClick={handleClick}><img src={img_hub}
                // 30px 30pxの大きさにする
                width="50px" height="50px"
            /></button>

            <Badge badgeContent={4} color="secondary">
                <MailIcon color="write" />
            </Badge>
            <Badge badgeContent={4} color="error" sx={{
                '& > .MuiBadge-badge': {
                    fontSize: '1.5rem', // ここでフォントサイズを変更する
                },
            }} 
            // バッジの大きさを変更する
            
            >
                {/* 40dp * 40dpのメールアイコンを表示する */}
                <MailIcon color="write" sx={{ fontSize: 100 }} />
            </Badge>
            <ul className="menuList">
                {menuList.map((menu) => {
                    return (
                        <li key={menu.id} className="menu">
                            <a href={`/${menu.name}/`}>
                                {menu.name}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SamplePage_SideBar;