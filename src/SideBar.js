// ボタンを縦に並べたサイドバーを表示するコンポーネント
// デフォルトのHTML要素のみで構成する。
// ボタンを押すと、そのボタンに対応するコンポーネントを表示する。

import React, { useState } from "react";
import "./SlideBar.css";

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


const SideBar = () => {


    const [isToggled, setIsToggled] = useState(true);

    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    // cssのクラス sideBar と、その子要素全てに スタイルを割り当てる



    return (
        <>
            <button className="ss" onClick={handleClick}>メニュー</button>
            <div className="sideBar"
                style={{ width: isToggled ? '20%' : '0' }}>
                <button className="menuButton" onClick={handleClick}>メニュー</button>
                <ul>
                    {menuList.map((menu) => {
                        return (
                            <li key={menu.id}>
                                <a href={`/${menu.name}/`}
                                    style={{ width: isToggled ? '100%' : '0' }}>
                                    {isToggled ? menu.name : ''}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};


export default SideBar;

// Path: src\SideBar.css
// サイドバーを表示するためのCSS
