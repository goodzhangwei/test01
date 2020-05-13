import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homepage from '@/components/homePage/index'
import coursestudy from '@/components/courseStudy/index'
import classcontent from '@/components/courseStudy/classContent'
import classcontenttwo from '@/components/courseStudy/classContentTwo'
import classexercises from '@/components/courseStudy/classExercises'
import testone from '@/components/courseStudy/testone'
import testtwo from '@/components/courseStudy/testtwo'
import codingCompetition from '@/components/codingCompetition/index'
import competitionIntroduction from '@/components/codingCompetition/competitionItem/comptitionIntroduction'
import competitionAwardItem from '@/components/codingCompetition/competitionItem/comptitionAwardItem'
import competitionRules from '@/components/codingCompetition/competitionItem/compitionRules'
import competitionDiscipline from '@/components/codingCompetition/competitionItem/competitionDiscipline'
import compitionPrepare from '@/components/codingCompetition/competitionItem/compitionPrepare'
import compitionphoto from '@/components/codingCompetition/competitionItem/compitionphoto'
import userSetting from '@/components/userSetting/index'
import liveLesson from '@/components/userSetting/settingItem/liveLesson'
import myClass from '@/components/userSetting/settingItem/myClass'
import myLesson from '@/components/userSetting/settingItem/myLesson'
import personalInformation from '@/components/userSetting/settingItem/personalInformation'
import allclasses from '@/components/allClasses/index'
import videoclass from '@/components/VideoClass/videoclass'
import ContentClass from '@/components/VideoClass/ContentClass'
import login from '@/components/login/index'
import VideoLive from '@/components/VideoClass/VideoLive'
import AboutUs from "@/components/aboutUs/AboutUs";
import WorkIndex from "@/components/WorkChallenge/WorkIndex";
import WorkDetail from "@/components/WorkChallenge/WorkDetail";
import WorkUpdate from "@/components/WorkChallenge/WorkUpdate";
import competition from "@/components/codingCompetition/competition";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
      children: [
      ]
    },
    {
      path: '/coursestudy',
      name: 'coursestudy',
      component: coursestudy
    },
    {
      path: '/allclasses',
      name: 'allclasses',
      component: allclasses
    },
    {
      path: '/classcontent',
      name: 'classcontent',
      component: classcontent
    },
    {
      path: '/classcontenttwo',
      name: 'classcontenttwo',
      component: classcontenttwo
    },
    {
      path: '/classexercises',
      name: 'classexercises',
      component: classexercises
    },
    {
      path: '/userSetting',
      name: 'userSetting',
      component: userSetting,
      redirect: '/userSetting/personalInformation',
      children: [
        {
          path: '/userSetting/liveLesson',
          name: 'liveLesson',
          component: liveLesson
        },
        {
          path: '/userSetting/myClass',
          name: 'myClass',
          component: myClass
        },
        {
          path: '/userSetting/myLesson',
          name: 'myLesson',
          component: myLesson
        },
        {
          path: '/userSetting/personalInformation',
          name: 'personalInformation',
          component: personalInformation
        }
      ]
    },
    {
      path: '/testone',
      name: 'testone',
      component: testone
    },
    {
      path: '/testtwo',
      name: 'testtwo',
      component: testtwo
    },
    {
      path: '/codingCompetition',
      name: 'codingCompetition',
      component: codingCompetition,
      redirect: '/codingCompetition/competitionIntroduction',
      children: [
        {
          path: '/codingCompetition/competitionIntroduction',
          name: 'competitionIntroduction',
          component: competitionIntroduction
        },
        {
          path: '/codingCompetition/competitionAwardItem',
          name: 'competitionAwardItem',
          component: competitionAwardItem
        },
        {
          path: '/codingCompetition/competitionRules',
          name: 'competitionRules',
          component: competitionRules
        },
        {
          path: '/codingCompetition/ competitionDiscipline',
          name: ' competitionDiscipline',
          component: competitionDiscipline
        },
        {
          path: '/codingCompetition/ compitionPrepare',
          name: ' compitionPrepare',
          component: compitionPrepare
        }, {
          path: '/codingCompetition/ compitionphoto',
          name: ' compitionphoto',
          component: compitionphoto
        }
      ]
    },
    {
      path: '/videoclass',
      name: 'videoclass',
      component: videoclass
    },
    {
      path: '/VideoLive',
      name: 'VideoLive',
      component: VideoLive

    },
    {
      path: '/ContentClass',
      name: 'ContentClass',
      component: ContentClass
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/WorkIndex',
      name: 'WorkIndex',
      component: WorkIndex
    },
    {
      path: '/WorkDetail',
      name: 'WorkDetail',
      component: WorkDetail
    },
    {
      path: '/WorkUpdate',
      name: 'WorkUpdate',
      component: WorkUpdate
    },
    {
      path: '/competition',
      name: 'competition',
      component: competition
    }
  ]
})
