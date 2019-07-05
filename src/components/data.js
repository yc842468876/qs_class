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
    desc: '您对课程的整体满意度为：',
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
    desc: '课程目标和内容与您的培训需求相匹配：',
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
    desc: '课程内容和授课形式易于您的理解和掌握：',
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
    desc: '课程对您的实际工作很有帮助，便于应用：',
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
    desc: '报道通知有效的帮助您顺利抵达课程现场：',
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
    desc: '现场课程助理服务满意度：',
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
    desc: '培训现场的硬件设施完善：',
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
    type: 2,
    required: true,
    desc: '培训中您认为最有收获的是：（可多选）',
    options: [
      {
        name: 1,
        label: '理论知识收益'
      }, {
        name: 2,
        label: '启发工作理念'
      }, {
        name: 3,
        label: '对自身工作有帮助'
      },
    ]
  },
  {
    name: 'q9',
    type: 2,
    required: true,
    desc: '您认为需要加强或改善的是：（可多选）',
    options: [
      {
        name: 1,
        label: '讲师技巧'
      }, {
        name: 2,
        label: '课程实用性'
      }, {
        name: 3,
        label: '案例少'
      }, {
        name: 4,
        label: '互动少'
      }, {
        name: 5,
        label: '授课环境'
      }, {
        name: 6,
        label: '现场助理服务'
      },
    ]
  },
  {
    name: 'q10',
    type: 2,
    required: true,
    desc: '您还希望接受哪些培训：（可多选）',
    options: [
      {
        name: 1,
        label: '管理领导力'
      }, {
        name: 2,
        label: '个人职业技能'
      }, {
        name: 3,
        label: '人力资源管理'
      }, {
        name: 4,
        label: '采购管理'
      }, {
        name: 5,
        label: '供应链与物流管理'
      }, {
        name: 6,
        label: '精益生产'
      }, {
        name: 7,
        label: '标杆工厂'
      }, {
        name: 8,
        label: '一线主管'
      }, {
        name: 9,
        label: '质量管理'
      }, {
        name: 10,
        label: '销售与客服'
      },
    ]
  },
];