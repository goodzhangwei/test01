import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import homepage from '@/components/homePage/index'
// import coursestudy from '@/components/courseStudy/index'
// import classcontent from '@/components/courseStudy/classContent'
// import classcontenttwo from '@/components/courseStudy/classContentTwo'
// import classexercises from '@/components/courseStudy/classExercises'
// import testone from '@/components/courseStudy/testone'
// import testtwo from '@/components/courseStudy/testtwo'
// import codingCompetition from '@/components/codingCompetition/index'
// import competitionIntroduction from '@/components/codingCompetition/competitionItem/comptitionIntroduction'
// import competitionAwardItem from '@/components/codingCompetition/competitionItem/comptitionAwardItem'
// import competitionRules from '@/components/codingCompetition/competitionItem/compitionRules'
// import competitionDiscipline from '@/components/codingCompetition/competitionItem/competitionDiscipline'
// import compitionPrepare from '@/components/codingCompetition/competitionItem/compitionPrepare'
// import compitionphoto from '@/components/codingCompetition/competitionItem/compitionphoto'
// import userSetting from '@/components/userSetting/index'
// import liveLesson from '@/components/userSetting/settingItem/liveLesson'
// import myClass from '@/components/userSetting/settingItem/myClass'
// import myLesson from '@/components/userSetting/settingItem/myLesson'
// import personalInformation from '@/components/userSetting/settingItem/personalInformation'
// import allclasses from '@/components/allClasses/index'
// import videoclass from '@/components/VideoClass/videoclass'
// import ContentClass from '@/components/VideoClass/ContentClass'
// import login from '@/components/login/index'
// import VideoLive from '@/components/VideoClass/VideoLive'
// import AboutUs from "@/components/aboutUs/AboutUs";
// import WorkIndex from "@/components/WorkChallenge/WorkIndex";
// import WorkDetail from "@/components/WorkChallenge/WorkDetail";
// import WorkUpdate from "@/components/WorkChallenge/WorkUpdate";
// import competition from "@/components/codingCompetition/competition";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: resolve => require(['@/components/homePage/index'],resolve),
    },
    {
      path: '/coursestudy',
      name: 'coursestudy',
      component: resolve => require(['@/components/courseStudy/index'],resolve),
    },
    {
      path: '/allclasses',
      name: 'allclasses',
      component: resolve => require(['@/components/allClasses/index'],resolve),
    },
    {
      path: '/classcontent',
      name: 'classcontent',
      component: resolve => require(['@/components/courseStudy/classContent'],resolve),
    },
    {
      path: '/classcontenttwo',
      name: 'classcontenttwo',
      component: resolve => require(['@/components/courseStudy/classContentTwo'],resolve),
    },
    {
      path: '/classexercises',
      name: 'classexercises',
      component: resolve => require(['@/components/courseStudy/classExercises'],resolve),
    },
    {
      path: '/userSetting',
      name: 'userSetting',
      // component: userSetting,
      component: resolve => require(['@/components/userSetting/index'],resolve),
      redirect: '/userSetting/personalInformation',
      children: [
        {
          path: '/userSetting/liveLesson',
          name: 'liveLesson',
          // component: liveLesson
          component: resolve => require(['@/components/userSetting/settingItem/liveLesson'],resolve)
        },
        {
          path: '/userSetting/myClass',
          name: 'myClass',
          // component: myClass
          component: resolve => require(['@/components/userSetting/settingItem/myClass'],resolve)
        },
        {
          path: '/userSetting/myLesson',
          name: 'myLesson',
          // component: myLesson
          component: resolve => require(['@/components/userSetting/settingItem/myLesson'],resolve)
        },
        {
          path: '/userSetting/mySchedule',
          name: 'mySchedule',
          // component: mySchedule
          component: resolve => require(['@/components/userSetting/settingItem/mySchedule'],resolve)
        },
        {
          path: '/userSetting/UpdatePassword',
          name: 'UpdatePassword',
          // component: UpdatePassword
          component: resolve => require(['@/components/userSetting/settingItem/UpdatePassword'],resolve)
        },
        {
          path: '/userSetting/personalInformation',
          name: 'personalInformation',
          // component: personalInformation
          component: resolve => require(['@/components/userSetting/settingItem/personalInformation'],resolve)
        }
      ]
    },
    {
      path: '/testone',
      name: 'testone',
      // component: testone
      component: resolve => require(['@/components/courseStudy/testone'],resolve)
    },
    {
      path: '/testtwo',
      name: 'testtwo',
      // component: testtwo
      component: resolve => require(['@/components/courseStudy/testtwo'],resolve)
    },
    {
      path: '/codingCompetition',
      name: 'codingCompetition',
      // component: codingCompetition,
      component: resolve => require(['@/components/codingCompetition/index'],resolve),
      redirect: '/codingCompetition/competitionIntroduction',
      children: [
        {
          path: '/codingCompetition/competitionIntroduction',
          name: 'competitionIntroduction',
          component: resolve => require(['@/components/codingCompetition/competitionItem/comptitionIntroduction'],resolve)
        },
        {
          path: '/codingCompetition/competitionAwardItem',
          name: 'competitionAwardItem',
          component: resolve => require(['@/components/codingCompetition/competitionItem/comptitionAwardItem'],resolve)
        },
        {
          path: '/codingCompetition/competitionRules',
          name: 'competitionRules',
          component: resolve => require(['@/components/codingCompetition/competitionItem/compitionRules'],resolve)
        },
        {
          path: '/codingCompetition/ competitionDiscipline',
          name: ' competitionDiscipline',
          component: resolve => require(['@/components/codingCompetition/competitionItem/competitionDiscipline'],resolve)
        },
        {
          path: '/codingCompetition/ compitionPrepare',
          name: ' compitionPrepare',
          component: resolve => require(['@/components/codingCompetition/competitionItem/compitionPrepare'],resolve)
        }, {
          path: '/codingCompetition/ compitionphoto',
          name: ' compitionphoto',
          component: resolve => require(['@/components/codingCompetition/competitionItem/compitionphoto'],resolve)
        }
      ]
    },
    {
      path: '/videoclass',
      name: 'videoclass',
      component: resolve => require(['@/components/VideoClass/videoclass'],resolve)
    },
    {
      path: '/VideoLive',
      name: 'VideoLive',
      component: resolve => require(['@/components/VideoClass/VideoLive'],resolve)

    },
    {
      path: '/ContentClass',
      name: 'ContentClass',
      component: resolve => require(['@/components/VideoClass/ContentClass'],resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login/index'],resolve)
    },
    // {
    //   path: '/AboutUs',
    //   name: 'AboutUs',
    //   component: AboutUs
    // },
    {
      path: '/WorkIndex',
      name: 'WorkIndex',
      component: resolve => require(['@/components/WorkChallenge/WorkIndex'],resolve)
    },
    {
      path: '/WorkDetail',
      name: 'WorkDetail',
      component: resolve => require(['@/components/WorkChallenge/WorkDetail'],resolve)
    },
    {
      path: '/WorkUpdate',
      name: 'WorkUpdate',
      component: resolve => require(['@/components/WorkChallenge/WorkUpdate'],resolve)
    },
    {
      path: '/WorkShow',
      name: 'WorkShow',
      component: resolve => require(['@/components/WorkChallenge/workShow'],resolve)
    },
    {
      path: '/Workinfo',
      name: 'Workinfo',
      component: resolve => require(['@/components/WorkChallenge/Workinfo'],resolve)
    },
    {
      path: '/ScorePage',
      name: 'ScorePage',
      component: resolve => require(['@/components/WorkChallenge/ScorePage'],resolve)
    },
    {
      path: '/WorkOne',
      name: 'WorkOne',
      component: resolve => require(['@/components/WorkChallenge/WorkOne'],resolve)
    },
    {
      path: '/WorkTwo',
      name: 'WorkTwo',
      component: resolve => require(['@/components/WorkChallenge/WorkTwo'],resolve)
    },
    {
      path: '/WorkThree',
      name: 'WorkThree',
      component: resolve => require(['@/components/WorkChallenge/WorkThree'],resolve)
    },
    {
      path: '/WorkFour',
      name: 'WorkFour',
      component: resolve => require(['@/components/WorkChallenge/WorkFour'],resolve)
    },
    {
      path: '/WorkFive',
      name: 'WorkFive',
      component: resolve => require(['@/components/WorkChallenge/WorkFive'],resolve)
    },
    {
      path: '/WorkSix',
      name: 'WorkSix',
      component: resolve => require(['@/components/WorkChallenge/WorkSix'],resolve)
    },
    {
      path: '/WorkSeven',
      name: 'WorkSeven',
      component: resolve => require(['@/components/WorkChallenge/WorkSeven'],resolve)
    },
    {
      path: '/WorkEight',
      name: 'WorkEight',
      component: resolve => require(['@/components/WorkChallenge/WorkEight'],resolve)
    },
    {
      path: '/competitionOne',
      name: 'competitionOne',
      component: resolve => require(['@/components/codingCompetition/competitionOne'],resolve)
    },
    {
      path: '/competitionTwo',
      name: 'competitionTwo',
      component: resolve => require(['@/components/codingCompetition/competitionTwo'],resolve)
    },
    {
      path: '/competition',
      name: 'competition',
      component: resolve => require(['@/components/codingCompetition/competition'],resolve)
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: resolve => require(['@/components/aboutUs/AboutUs'],resolve)
    },
    {
      path: '/ClassShowOne',
      name: 'ClassShowOne',
      component: resolve => require(['@/components/ClassShow/ClassShowOne'],resolve)
    },
    {
      path: '/ClassShowTwo',
      name: 'ClassShowTwo',
      component: resolve => require(['@/components/ClassShow/ClassShowTwo'],resolve)
    },
    {
      path: '/ClassShowThree',
      name: 'ClassShowThree',
      component: resolve => require(['@/components/ClassShow/ClassShowThree'],resolve)
    },
    {
      path: '/ClassShowFour',
      name: 'ClassShowFour',
      component: resolve => require(['@/components/ClassShow/ClassShowFour'],resolve)
    },
    {
      path: '/ClassShowFive',
      name: 'ClassShowFive',
      component: resolve => require(['@/components/ClassShow/ClassShowFive'],resolve)
    },
    {
      path: '/ClassShowSix',
      name: 'ClassShowSix',
      component: resolve => require(['@/components/ClassShow/ClassShowSix'],resolve)
    },
    {
      path: '/ClassShowSeven',
      name: 'ClassShowSeven',
      component: resolve => require(['@/components/ClassShow/ClassShowSeven'],resolve)
    },
    {
      path: '/ClassShowEight',
      name: 'ClassShowEight',
      component: resolve => require(['@/components/ClassShow/ClassShowEight'],resolve)
    },
    {
      path: '/ClassShowNine',
      name: 'ClassShowNine',
      component: resolve => require(['@/components/ClassShow/ClassShowNine'],resolve)
    },
    {
      path: '/ClassShowTen',
      name: 'ClassShowTen',
      component: resolve => require(['@/components/ClassShow/ClassShowTen'],resolve)
    },
    {
      path: '/ClassShowEleven',
      name: 'ClassShowEleven',
      component: resolve => require(['@/components/ClassShow/ClassShowEleven'],resolve)
    },
    {
      path: '/ClassShowTwelve',
      name: 'ClassShowTwelve',
      component: resolve => require(['@/components/ClassShow/ClassShowTwelve'],resolve)
    },
    {
      path: '/applyPage',
      name: 'applyPage',
      component: resolve => require(['@/components/ClassShow/applyPage'],resolve)
    },
    {
      path: '/applySuccess',
      name: 'applySuccess',
      component: resolve => require(['@/components/ClassShow/applySuccess'],resolve)
    },
    {
      path: '/StudyProject',
      name: 'StudyProject',
      component: resolve => require(['@/components/StudyProject/StudyProject'],resolve)
    },
    {
      path: '/BlogRoll',
      name: 'BlogRoll',
      component: resolve => require(['@/components/BlogRoll/BlogRoll'],resolve)
    },
    {
      path: '/noticePage',
      name: 'noticePage',
      component: resolve => require(['@/components/notice/noticePage'],resolve)
    },
    {
      path: '/videoShow',
      name: 'videoShow',
      component: resolve => require(['@/components/VideoClass/videoShow'],resolve)
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: resolve => require(['@/components/aboutUs/cooperation'],resolve)
    },
    {
      path: '/ClassPay',
      name: 'ClassPay',
      component: resolve => require(['@/components/ClassPay/ClassPay'],resolve)
    },
    {
      path: '/PayCenter',
      name: 'PayCenter',
      component: resolve => require(['@/components/ClassPay/PayCenter'],resolve)
    },
    {
      path: '/PaySuccess',
      name: 'PaySuccess',
      component: resolve => require(['@/components/ClassPay/PaySuccess'],resolve)
    },
    {
      path: '/OrderCenter',
      name: 'OrderCenter',
      component: resolve => require(['@/components/ClassPay/OrderCenter'],resolve)
    },
    {
      path: '/AllCourses',
      name: 'AllCourses',
      component: resolve => require(['@/components/allCourses/index'],resolve)
    }
  ]
})
