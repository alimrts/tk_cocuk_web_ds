import create from 'zustand';

import {devtools, persist} from 'zustand/middleware'

import strings from './components/strings/strings.json';
import stringsEng from './components/strings/stringsEng.json';
import stringsGer from './components/strings/stringsGer.json';
import stringsFrench from './components/strings/stringsFrench.json';
import stringsSpanish from './components/strings/stringsSpanish.json';
import stringsArab from './components/strings/stringsArab.json';



const zustandStore = (set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses],
        }))
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === courseId ? {...course, completed: !course.completed} : course)
        }))
    },


    /////for language
    // language: 'default',
    // setLanguage: (selectedLanguage) => set({ language: selectedLanguage }),


    /////////////

    language: 'default',
    setLanguage: (selectedLanguage) => set({ language: selectedLanguage }),
    languageData: {
        default: strings,
        eng: stringsEng,
        ger: stringsGer,
        french: stringsFrench,
        spanish: stringsSpanish,
        arab: stringsArab,
        // Add more languages here
        // spanish: stringsSpanish,
        // french: stringsFrench,
    },

     // User information
    userInfo: null,
    setUserInfo: (userData) => {
        set({ userInfo: userData });
    },



})

const useZustandStore = create(
    // to use localstorage
    devtools(
        persist(zustandStore, {
            name: "zustand",
        })
    )
    // to not use localstorage
    // zustandStore
)


export default useZustandStore;