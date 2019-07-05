/**
 * name {String} 字段名
 * type {String} 类型: 1.单选框; 2.多选加其他; 3.文本输入 
 * required {Boolean} 是否必输
 * desc {String} 问题描述
 * options {Array} radio或checkbox选框配置, 可查vant足见描述
 */
export default [
  {
    name: 'q1',
    type: 1,
    required: true,
    desc: '课程的主题明确: ',
    options: [
      {
        name: 5,
        label: '5分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 1,
        label: '1分'
      }, 
    ]
  },
  {
    name: 'q2',
    type: 1,
    required: true,
    desc: '课程的结构清晰: ',
    options: [
      {
        name: 5,
        label: '5分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 1,
        label: '1分'
      }, 
    ]
  },
  {
    name: 'q3',
    type: 1,
    required: true,
    desc: '课程的内容丰富: ',
    options: [
      {
        name: 5,
        label: '5分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 1,
        label: '1分'
      }, 
    ]
  },
  {
    name: 'q4',
    type: 1,
    required: true,
    desc: '课程的内容丰富: ',
    options: [
      {
        name: 5,
        label: '5分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 1,
        label: '1分'
      }, 
    ]
  },
  {
    name: 'q5',
    type: 1,
    required: true,
    desc: '课程的连贯性和逻辑性强: ',
    options: [
      {
        name: 5,
        label: '5分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 1,
        label: '1分'
      }, 
    ]
  },
  {
    name: 'q6',
    type: 1,
    required: true,
    desc: '讲师具备的专业知识强: ',
    options: [
      {
        name: 5,
        label: '5分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 1,
        label: '1分'
      }, 
    ]
  },
  {
    name: 'q7',
    type: 1,
    required: true,
    desc: '讲师表达清晰、感染力强: ',
    options: [
      {
        name: 5,
        label: '5分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 1,
        label: '1分'
      }, 
    ]
  },
  {
    name: 'q8',
    type: 1,
    required: true,
    desc: '学习过程，我积极参加讨论和互动: ',
    options: [
      {
        name: 5,
        label: '5分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 1,
        label: '1分'
      }, 
    ]
  },
  {
    name: 'q9',
    type: 1,
    required: true,
    desc: '学习过程，我积极参加讨论和互动: ',
    options: [
      {
        name: 5,
        label: '5分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 1,
        label: '1分'
      }, 
    ]
  },
  {
    name: 'q10',
    type: 1,
    required: true,
    desc: '如果还有类似的培训，愿意参加和推荐: ',
    options: [
      {
        name: 5,
        label: '5分'
      }, {
        name: 4,
        label: '4分'
      }, {
        name: 3,
        label: '3分'
      }, {
        name: 2,
        label: '2分'
      }, {
        name: 1,
        label: '1分'
      }, 
    ]
  },
  {
    name: 'q11',
    type: 3,
    desc: '本次培训中您认为哪些内容对您帮助最大: '
  },
  {
    name: 'q12',
    type: 3,
    desc: '您对整个培训有何改进建议或意见？'
  },
  {
    name: 'q13',
    type: 3,
    desc: '就您的工作而言，您还希望接受哪方面的培训？'
  },
  {
    name: 'q14',
    type: 3,
    desc: '贵公司近期还有哪些培训需求或其他咨询服务？'
  },
];