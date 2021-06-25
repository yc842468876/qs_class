<template>
  <div class="qs_container">
    <van-cell-group>
      <van-field label="课程名称" v-model="courseName" disabled />
      <van-field label="开始日期" v-model="startDate" disabled />
      <van-field
        id="form_name"
        v-model="name"
        required
        clearable
        label="学员姓名"
        placeholder="请输入学员姓名"
      />
      <van-field
        id="form_phone"
        v-model="phone"
        type="tel"
        clearable
        label="手机号码"
        placeholder="请输入手机号码"
        error-message=""
      />
    </van-cell-group>
    <van-notice-bar :scrollable="false" wrapable style="text-align: left;">
      <span>感谢您参加我们的公开课课程</span><br />
      <span
        >请您抽出5分钟时间填写以下问卷，您的宝贵意见将是我们未来持续改进的方向</span
      ><br />
      <span>本次问卷，满分5分</span>
    </van-notice-bar>
    <ul>
      <li
        class="qs_item"
        v-for="(item, index) in qs_data"
        :key="index"
        :id="`form_${item.name}`"
      >
        <!-- 单选框 -->
        <div v-if="item.type === 1">
          <div
            :class="[
              'item_title',
              isGreen(item) ? 'bg_green' : 'bg_orange',
              { is_required: item.required },
            ]"
          >
            {{ `${index + 1}. ${item.desc}` }}
          </div>
          <div class="item_content">
            <van-radio-group v-model="answer[item.name]">
              <van-radio v-for="(v, i) in item.options" :name="v.name" :key="i">
                {{ v.label }}
              </van-radio>
            </van-radio-group>
          </div>
        </div>
        <!-- 多选框 -->
        <div v-if="item.type === 2">
          <div
            :class="[
              'item_title',
              isGreen(item) ? 'bg_green' : 'bg_orange',
              { is_required: item.required },
            ]"
          >
            {{ `${index + 1}. ${item.desc}` }}
          </div>
          <div class="item_content">
            <van-checkbox-group v-model="answer[item.name]">
              <van-checkbox
                v-for="(v, i) in item.options"
                :key="i"
                :name="v.name"
              >
                {{ v.label }}
              </van-checkbox>
            </van-checkbox-group>
            <van-field
              class="my_textarea"
              v-model="answer[`${item.name}_other`]"
              type="textarea"
              placeholder="其他"
              rows="1"
              autosize
            />
          </div>
        </div>
        <!-- 多行输入 -->
        <!-- 多选框 -->
        <div v-if="item.type === 3">
          <div
            :class="['item_title', isGreen(item) ? 'bg_green' : 'bg_orange']"
          >
            {{ `${index + 1}. ${item.desc}` }}
          </div>
          <div class="item_content">
            <van-field
              class="my_textarea"
              v-model="answer[item.name]"
              type="textarea"
              placeholder="请输入"
              rows="1"
              autosize
            />
          </div>
        </div>
      </li>
    </ul>
    <div class="footer">
      <van-button
        :loading="btnLoading"
        type="info"
        @click="handleSubmit"
        style="width: 80%; max-width: 768px"
        >提交</van-button
      >
    </div>
  </div>
</template>

<script>
import qs_data from './data_public.js';
import $ from 'jquery';
import moment from 'moment';
import { getToken } from '../util/util';
import request from '../util/request';

export default {
  data() {
    return {
      // 课程信息
      courseNo: this.$route.query.courseNo,
      courseName: this.$route.query.courseName,
      startDate: this.$route.query.startDate,
      endDate: this.$route.query.endDate,
      assessPersonId: this.$route.query.assessPersonId,

      // 问卷信息
      name: '', // 姓名
      phone: '', // 手机号
      qs_data: qs_data, // 问题数据
      answer: {}, // 答案
      btnLoading: false,
    };
  },
  methods: {
    // 计算样式展示
    isGreen(item) {
      if (!item.required) return true;
      switch (item.type) {
        case 1: {
          // 单选框必输--判断逻辑
          if (this.answer[item.name]) {
            return true;
          } else {
            return false;
          }
        }
        case 2: {
          // 多选框加其他必输--判断逻辑
          if (
            (this.answer[item.name] && this.answer[item.name].length) ||
            (this.answer[`${item.name}_other`] &&
              this.answer[`${item.name}_other`].trim())
          ) {
            return true;
          } else {
            return false;
          }
        }
        case 3: {
          // 多行输入必输--判断逻辑
          if (this.answer[item.name] && this.answer[item.name].trim()) {
            return true;
          } else {
            return false;
          }
        }
        default:
          return false;
      }
    },
    // 页面弹至相对位置
    scrollPageTo(name, msg) {
      this.$notify({
        message: msg || '请完善相关信息后进行提交!',
        duration: 2000,
      });

      try {
        const scrollTop = $(`#form_${name}`).offset().top - 40;
        // console.log(scrollTop);
        $('html, body').animate(
          {
            scrollTop: scrollTop || 0,
          },
          800
        );
      } catch (error) {
        throw error.toSring();
      }
    },
    // 提交问卷
    handleSubmit() {
      if (!(this.name && this.name.trim()))
        return this.scrollPageTo('name', '请输入姓名！');
      // if (!this.phone) return this.scrollPageTo('phone', '请输入手机号！');
      if (this.phone && !/^1\d{10}$/.test(this.phone))
        return this.scrollPageTo('phone', '请输入正确格式手机号!');

      // 由于 forEach 不支持跳出循环, 所以使用 for
      for (let i = 0; i < qs_data.length; i++) {
        if (this.isGreen(qs_data[i]) === false) {
          this.scrollPageTo(qs_data[i].name);
          return;
        }
      }
      // 课程id、姓名、手机
      const postData = {
        courseNo: this.courseNo,
        name: this.name,
        phone: this.phone,
      };
      // 员工 id
      postData.assessPersonId = this.assessPersonId
        ? this.assessPersonId
        : null;
      // 问卷标记类型
      postData.type = 'C';
      // 问题答案整理
      qs_data.map((v, i) => {
        if (v.type === 2) {
          let data = [];
          data =
            this.answer[v.name] && this.answer[v.name].length
              ? this.answer[v.name]
              : data;
          data = this.answer[`${v.name}_other`]
            ? data.concat(this.answer[`${v.name}_other`])
            : data;
          postData[`answer${i + 1}`] = JSON.stringify(data);
        } else {
          postData[`answer${i + 1}`] = this.answer[v.name] || '';
        }
      });

      // 提交按钮loading
      this.btnLoading = true;
      // 提交请求
      request
        .post('/api/rest/ae/questionToAssess', postData)
        .then((data) => {
          if (data && data.success) {
            this.$router.push('/finished');
          } else {
            this.$toast.fail((data && data.message) || '提交失败！');
          }
          this.btnLoading = false;
        })
        .catch((error) => {
          this.btnLoading = false;
          throw error.toSring();
        });
    },
  },
  created() {
    // 问卷过期判断, 两天过期需 +1 写法
    if (moment() > moment(this.endDate).add(6, 'days')) {
      this.$router.push('/overDue');
    }

    // 获取 token, 供提交接口认证
    getToken();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.qs_container {
  min-width: 320px;
  max-width: 768px;
  margin: 0 auto;
  background-color: #fff;
  padding-bottom: 66px;
}

.qs_container .footer {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  bottom: 0;
  left: 0;
  padding-bottom: 10px;
}

.qs_item {
  margin-top: 20px;
  border: 1px solid #eee;
  text-align: left;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
}
.qs_item .item_title {
  line-height: 18px;
  padding: 8px;
  color: #fff;
  font-size: 14px;
}

.qs_item .item_content {
  line-height: 18px;
  padding: 8px;
}

.bg_orange {
  background-color: orange;
}
.bg_green {
  background-color: #81c784;
}
.is_required:after {
  content: '*';
  color: red;
}
/* 默认样式覆盖 Start */
.qs_container .van-field__control:disabled {
  color: #000;
  font-weight: bold;
}

.qs_container .van-radio {
  display: inline-block;
  margin-left: 10px;
}
.qs_container .van-radio__icon {
  display: inline-block;
  position: relative;
  top: 2px;
}
.qs_container .van-radio__label {
  margin-left: 0;
}

.qs_container .van-checkbox {
  align-items: flex-start;
  margin-left: 10px;
}
.qs_container .van-checkbox__icon {
  position: relative;
  top: 4px;
}
.qs_container .van-checkbox__label {
  line-height: 30px;
}

.qs_container .my_textarea .van-field__body {
  border-bottom: 1px solid #eee;
  z-index: 999;
}
/* 默认样式覆盖 End */
</style>
