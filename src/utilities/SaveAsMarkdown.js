// npm i file-saver
import { saveAs } from 'file-saver';

export const createAndDownloadMarkdown = () => {
  const markdownContent = `# My Markdown File\n\nThis is some content in my Markdown file.`;

  const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
  saveAs(blob, 'myMarkdownFile.md');
  // 确定：
  /*
    1. 是否好使
    2. 好使的话，存到哪里了 ---- 好使，直接通过浏览器下载下来了
  */
};

// npm i downloadjs
import download from 'downloadjs';

export const generateAndSaveMarkdown = () => {
    const markdownContent = `# My Markdown File\n\nThis is some content in my Markdown file.`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    // download(blob, 'myMarkdownFile22.md', 'src/markdownFiles');
    download(blob, 'myMarkdownFile22.md', 'text/markdown');
};

// 以上2个方法不好用，这样的话，存成本地对象吧，然后查看的时候用某种方式展示