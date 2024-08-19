import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/contact.vue'
import ProjectDetails from './components/projectDetails.vue'

const routes = [
  { 
    path: '/', 
    component: Home 
  },

  { 
    path: '/resume',
     component: Resume 
  },

  { 
    path: '/portfolio',
     component: Portfolio 
  },
  { 
    path: '/Project-details',
     component: ProjectDetails 
  },
  { 
    path: '/contact',
     component: Contact 
  },
  // Add more routes here
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
