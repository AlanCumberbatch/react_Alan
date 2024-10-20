
// import React from 'react';
import TextWithLineBreaks from '@/components/FunctionComponent/TextWithLineBreaks'

const rawText = `中寰吃饭
去到了王府井中寰那个商场的四楼去吃饭，自信且开心的的走进去之后发现：

“妈耶诶，GUCII！ 这样的商场吗？”

“进城了进城了、哈哈哈哈、我要淡定些，别整的像没见过市面似的”

“要表现出一种满不在乎的状态，对，就是那种对这些身外之物不屑一顾的态度，哈哈哈哈哈，就是这种有钱人的态度！”

“电梯上下来人了，淡定，漫不经心地扫视一眼，然后漫不经心的移开视线，看向别的地方”

“还得上两个电梯哈，淡定，走就完了，没人认识我，闲庭信步的感觉！毫不在乎的感觉就完了！”

“电梯上又下来人了！其中一个女生大大的眼睛里我察觉到了一些想拥有的渴望！哈哈哈啊哈，扫一眼可以了，可以看向别的地方了！”

下一个电梯上看到了一个名叫Theory的店，海报上的模特的衣服风格真的很学院派，衣服的版型确实很耐看，不错。

四楼了，找地方吧。

“多亏人少，嗨，继续悠哉地走就行，总之就是满不在乎的态度就行了💪💪💪”

到了还没等坐下，第一句就是，“诶嘛，我进城了！！！🤣🤣🤣”`;

const Chapter7 = () => {
  return <TextWithLineBreaks rawText={rawText} />
};

export default Chapter7;
