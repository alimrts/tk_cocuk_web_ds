import create from "zustand";

import { devtools, persist } from "zustand/middleware";

import strings from "./components/strings/strings.json";
import stringsEng from "./components/strings/stringsEng.json";

const zustandStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },

  /////for language
  // language: 'default',
  // setLanguage: (selectedLanguage) => set({ language: selectedLanguage }),

  /////////////

  language: "default",
  setLanguage: (selectedLanguage) => set({ language: selectedLanguage }),
  languageData: {
    default: strings,
    eng: stringsEng,
    // ger: stringsGer,
    // french: stringsFrench,
    // spanish: stringsSpanish,
    // Add more languages here
  },

  // User information
  userInfo: null,
  setUserInfo: (userData) => {
    set({ userInfo: userData });
  },

  /////gates

  isBilgiIcTriggered: false,
  setIsBilgiIcTriggered: (value) => set({ isBilgiIcTriggered: value }),
  toggleBilgiIcTrigger: () => {
    set((state) => {
      const toggledState = !state.isBilgiIcTriggered;
      console.log(`Toggling isBilgiIcTriggered to: ${toggledState}`);
      return { isBilgiIcTriggered: toggledState };
    });
  },
  onCleanup: () => {
    // Reset the state to its initial value when the component is unmounted
    set({ isBilgiIcTriggered: false });
  },

  isBilgiGateTriggered: false,
  setIsBilgiGateTriggered: (value) => set({ isBilgiGateTriggered: value }),
  toggleBilgiGateTrigger: () => {
    set((state) => {
      const toggledState = !state.isBilgiGateTriggered;
      console.log(`Toggling isBilgiGateTriggered to: ${toggledState}`);
      return { isBilgiGateTriggered: toggledState };
    });
  },
  onCleanup: () => {
    // Reset the state to its initial value when the component is unmounted
    set({ isBilgiGateTriggered: false });
  },

  isGunesGateTriggered: false,
  setIsGunesGateTriggered: (value) => set({ isGunesGateTriggered: value }),
  toggleGunesGateTrigger: () =>
    set((state) => ({ isGunesGateTriggered: !state.isGunesGateTriggered })),
  onCleanup: () => {
    // Reset the state to its initial value when the component is unmounted
    set({ isGunesGateTriggered: false });
  },

  isTuikGateTriggered: false,
  setIsTuikGateTriggered: (value) => set({ isTuikGateTriggered: value }),
  toggleTuikGateTrigger: () =>
    set((state) => ({ isTuikGateTriggered: !state.isTuikGateTriggered })),
  onCleanup: () => {
    // Reset the state to its initial value when the component is unmounted
    set({ isTuikGateTriggered: false });
  },

  isGeriClickedInSolarSystem: false,
  setIsGeriClickedInSolarSystem: (value) =>
    set({ isGeriClickedInSolarSystem: value }),
  toggleGeriClickedInSolarSystem: () =>
    set((state) => ({
      isGeriClickedInSolarSystem: !state.isGeriClickedInSolarSystem,
    })),
  onCleanup: () => {
    // Reset the state to its initial value when the component is unmounted
    set({ isGeriClickedInSolarSystem: false });
  },

  isGeriClickedInTuik: false,
  setIsGeriClickedInTuik: (value) => set({ isGeriClickedInTuik: value }),
  toggleGeriClickedInTuik: () =>
    set((state) => ({
      isGeriClickedInTuik: !state.isGeriClickedInTuik,
    })),
  onCleanup: () => {
    // Reset the state to its initial value when the component is unmounted
    set({ isGeriClickedInTuik: false });
  },

  playerPosition: [0, 0, 0],
  setPlayerPosition: (position) => set({ playerPosition: position }),
});

const useZustandStore = create(
  // to use localstorage
  devtools(
    persist(zustandStore, {
      name: "zustand",
    })
  )
  // to not use localstorage
  // zustandStore
);

export default useZustandStore;
