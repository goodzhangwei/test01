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
      path: '/competition',
      name: 'competition',
      component: resolve => require(['@/components/codingCompetition/competition'],resolve)
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: resolve => require(['@/components/aboutUs/AboutUs'],resolve)
    }
  ]
})
