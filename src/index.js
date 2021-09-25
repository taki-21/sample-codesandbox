import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  //　押された削除ボタンの親タグを削除
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li 生成
  const li = document.createElement("li");

  //div 生成
  const div = document.createElement("div");
  div.className = "list-row";
  // let val2 = "let変数を再宣言"

  //span 生成
  const span = document.createElement("span");

  span.innerText = text;
  // // val3 = "const変数を上書き"

  //button 生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //　押された完了ボタンの親タグを削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加
    const addTarget = completeButton.parentNode.parentNode;

    // todoのテキストを取得
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    // console.log(val4);

    // li以下を初期化
    addTarget.textContent = null;

    const div = document.createElement("div");
    const span = document.createElement("span");
    span.innerText = text;
    div.appendChild(span);

    // button　生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // alert('戻す')
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    div.appendChild(backButton);
    addTarget.appendChild(div);
    // console.log(message2)

    document.getElementById("complete-list").appendChild(addTarget);

    // console.log(addTarget);

    // console.log(text)
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //　押された削除ボタンの親タグを削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // liタグの子要素に各要素を設定
  div.appendChild(span);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
