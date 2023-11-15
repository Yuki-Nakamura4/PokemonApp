export const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {
        // fetchでデータ取得
        fetch(url)
            // レスポンスをJSON形式に変換
            .then((res) => res.json())
            // 変換されたJSONデータを解決(resolve)する
            .then((data) => resolve(data))
            // エラーが発生した場合はrejectを呼び出す
            .catch((error) => reject(error));
    });
}

export const getPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                resolve(data);
            });
    })
};