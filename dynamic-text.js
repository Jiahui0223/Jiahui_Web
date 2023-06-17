const dynamicText = document.getElementById('dynamic-text');

    // 定义要逐渐变化的文本列表
    const textList = ['Student', 'Engineer', 'Swimmer']; 

    // 定义动画的时间间隔和速度
    const deleteInterval = 200; // 删除每个字符的间隔
    const typeInterval = 100; // 重新打印每个字符的间隔
    const switchInterval = 3000; // 切换文字的间隔

    let currentIndex = 0;
    let currentText = textList[currentIndex];

    // 开始逐渐变化的函数
    function startChangingText() {
      deleteText();
    }

    // 删除文本
    function deleteText() {
      const currentLength = dynamicText.textContent.length;

      if (currentLength === 0) {
        setTimeout(() => {
          typeText(getNextText());
        }, typeInterval);
      } else {
        dynamicText.textContent = currentText.slice(0, currentLength - 1);
        setTimeout(deleteText, deleteInterval);
      }
    }

    // 打印文本
    function typeText(text) {
      if (text.length === dynamicText.textContent.length) {
        setTimeout(() => {
          deleteText();
        }, switchInterval);
      } else {
        dynamicText.textContent = text.slice(0, dynamicText.textContent.length + 1);
        setTimeout(() => {
          typeText(text);
        }, typeInterval);
      }
    }

    // 获取下一个要显示的文本
    function getNextText() {
      currentIndex = (currentIndex + 1) % textList.length;
      currentText = textList[currentIndex];
      return currentText;
    }

    // 调用函数开始逐渐变化
    startChangingText();