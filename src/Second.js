//画面遷移先のコンポーネントを作成する
import React from 'react';
import { Link, useLocation } from 'react-router-dom';



const Second = () => {

    const state = useLocation();

    if (state.state === null || state.state === undefined) {
        return (
            <h1>エラー</h1>
        );
    }

    const getText = state.state.passedText;

    return (
        <>
            <h1>{getText}</h1>
            <Link to="/">戻る</Link>
        </>
    );
};

// useLocationを使って、遷移元からのパラメータを取得する


export default Second;