export default [
  {
    id: '1',
    content: '这些小熊的动图是怎么来的啊？',
    nickname: '糖墨夕',
    commentId: '1',
    parentId: null,
    accord: null,
    children: [
      {
        id: '2',
        parentId: '1',
        commentId: '11',
        nickname: '洛笙阁',
        content: '网上找就找到了呀，然后将它们分解成多个关键帧，欢迎关注下呗',
        accord: null,
      },
      {
        id: '1',
        parentId: '1',
        commentId: '12',
        repliedRole: '洛笙阁',
        nickname: '糖墨夕',
        content: '已关注哈哈，刚摸索了一会还有不懂的地方，能不能私信教一下啊',
        accord: '网上找就找到了呀，然后将它们分解成多个关键帧，欢迎关注下呗'
      }
    ]
  }
]