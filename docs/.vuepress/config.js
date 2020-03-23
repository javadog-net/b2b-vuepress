/*
 * @Description: In User Settings Edit
 * @Author: hdx
 * @Date: 2019-11-20 18:16:23
 * @LastEditors: hdx
 * @LastEditTime: 2020-03-16 15:03:23
 */
module.exports = {
  title: 'B2B',
  description: '企业购接口文档',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/icon.png'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/b2b/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      }, {
        text: '接口文档',
        items: [{
            text: '大客户app',
            link: '/b2b-app/getAreaInfo'
          },
          {
            text: '企业购自用',
            link: '/b2b-inner/getMsgProduct'
          },
          {
            text: '企业购中台自用',
            link: '/b2b-center/dealerOrderList'
          },
          {
            text: 'HIC400客服',
            link: '/400/400'
          },
          {
            text: '690大接待',
            link: '/690/690'
          },
          {
            text: 'EUC',
            link: '/EUC/dealers'
          },
          {
            text: 'HPS',
            link: '/hps/send_msg'
          },
          {
            text: 'EUC-共享单',
            link: '/euc-share/dealers'
          },
        ]
      },{
        text: '文档说明',
        link: '/guide/'
      },{
        text: '服务器相关',
        link: '/server/'
      },{
        text: '问题整理',
        link: '/question/'
      }
    ],
    sidebar: {
      // 侧边栏在 /bar/ 上s
      '/b2b-app/': [
        'getAreaInfo',
        'selectGmInfo',
        'getShopMsgDetail',
        'directorTradeAll',
        'directorRemarks',
        'directorApproval',
        'directorDispatch',
        'directorOrAdminGetOrder',
        'directorPullListDealer',
        'selectDealerByOrgid',
        'dealerPreempInfo',
        'dealerIsGrab',
        'dealerRobtrade',
        'dealerCancelOrderBefore',
        'dealerUnderTake',
        'dealerOrderUnderTake',
        'dealerOrderAllStatus',
        'dealerGetMineOrder',
        'dealerCancelOrder',
        'dealerZykcUploadImg',
        'dealerZykcUpload',
        'getMsgRecord',
        'dealerSignUpload',
        'dealerSign',
        'dealerDeliver',
        'dealerInstall',
        'directorSelectFranchiserByOrgid',
        'getDirectorInfo',
        'dealerGetOrderDetail'
      ],
      // 侧边栏在 /bar/ 上s
      '/b2b-inner/': [
        'getMsgProduct',
        'getAreaInfo',
        'selectGmInfo',
        'postwant',
        'getShopMsgDetail',
        'purchaserGetMsgList',
        'evaluateAdd',
        'evaluateList',
        'getShopMsgListCount',
        'getMyProjectList',
        'getShopMsgDetail'
      ],
      '/b2b-center/': [
        'dealerOrderList',
        'eucOrderStats',
        'inperOrderList',
        'rrsLogin'
      ],
      '/400/': [
        '400'
      ],
      '/690/': [
        '690'
      ],
      '/EUC/': [
        'dealers',
        'euc_msg'
      ],
      '/hps/': [
        'send_msg',
        'send_msg_code'
      ],
      '/guide/':[
        ''
      ],
      '/server/':[
        ''
      ],
      '/question/':[
        ''
      ],
      '/euc-share/':[
        'dealers',
        'euc_msg',
        'euc_details',
        'euc_list_detail',
        'euc_list_all_v1',
        'garbList',
        'dealerRobtrade',
        'dealerUnderTake',
        'eucMsgAbandon',
        'dealerOrderList',
        'dealerRetailUploadImg',
        'dealerRetailUpload',
        'dealerOrderDetails',
      ]
    },
    sidebarDepth: 2
  }
};