// import create from "zustand";

// import { devtools, persist } from "zustand/middleware";

// import strings from "./components/strings/strings.json";
// import stringsEng from "./components/strings/stringsEng.json";

// const zustandStore = (set) => ({
//   courses: [],
//   addCourse: (course) => {
//     set((state) => ({
//       courses: [course, ...state.courses],
//     }));
//   },
//   removeCourse: (courseId) => {
//     set((state) => ({
//       courses: state.courses.filter((c) => c.id !== courseId),
//     }));
//   },
//   toggleCourseStatus: (courseId) => {
//     set((state) => ({
//       courses: state.courses.map((course) =>
//         course.id === courseId
//           ? { ...course, completed: !course.completed }
//           : course
//       ),
//     }));
//   },

//   /////for language
//   // language: 'default',
//   // setLanguage: (selectedLanguage) => set({ language: selectedLanguage }),

//   /////////////

//   language: "default",
//   setLanguage: (selectedLanguage) => set({ language: selectedLanguage }),
//   languageData: {
//     default: strings,
//     eng: stringsEng,
//     // ger: stringsGer,
//     // french: stringsFrench,
//     // spanish: stringsSpanish,
//     // Add more languages here
//   },

//   // User information
//   userInfo: null,
//   setUserInfo: (userData) => {
//     set({ userInfo: userData });
//   },

//   /////gates

//   isBilgiIcTriggered: true,
//   setIsBilgiIcTriggered: (value) => set({ isBilgiIcTriggered: value }),
//   toggleBilgiIcTrigger: () => {
//     set((state) => {
//       const toggledState = !state.isBilgiIcTriggered;
//       console.log(`Toggling isBilgiIcTriggered to: ${toggledState}`);
//       return { isBilgiIcTriggered: toggledState };
//     });
//   },
//   onCleanup: () => {
//     set({ isBilgiIcTriggered: false });
//   },

//   isBilgiGateTriggered: false,
//   setIsBilgiGateTriggered: (value) => set({ isBilgiGateTriggered: value }),
//   toggleBilgiGateTrigger: () => {
//     set((state) => {
//       const toggledState = !state.isBilgiGateTriggered;
//       console.log(`Toggling isBilgiGateTriggered to: ${toggledState}`);
//       return { isBilgiGateTriggered: toggledState };
//     });
//   },
//   onCleanup: () => {
//     set({ isBilgiGateTriggered: false });
//   },

//   isGunesGateTriggered: false,
//   setIsGunesGateTriggered: (value) => set({ isGunesGateTriggered: value }),
//   toggleGunesGateTrigger: () =>
//     set((state) => ({ isGunesGateTriggered: !state.isGunesGateTriggered })),
//   onCleanup: () => {
//     set({ isGunesGateTriggered: false });
//   },

//   isTuikGateTriggered: false,
//   setIsTuikGateTriggered: (value) => set({ isTuikGateTriggered: value }),
//   toggleTuikGateTrigger: () =>
//     set((state) => ({ isTuikGateTriggered: !state.isTuikGateTriggered })),
//   onCleanup: () => {
//     set({ isTuikGateTriggered: false });
//   },

//   isGeriClickedInSolarSystem: false,
//   setIsGeriClickedInSolarSystem: (value) =>
//     set({ isGeriClickedInSolarSystem: value }),
//   toggleGeriClickedInSolarSystem: () =>
//     set((state) => ({
//       isGeriClickedInSolarSystem: !state.isGeriClickedInSolarSystem,
//     })),
//   onCleanup: () => {
//     set({ isGeriClickedInSolarSystem: false });
//   },

//   isGeriClickedInTuik: false,
//   setIsGeriClickedInTuik: (value) => set({ isGeriClickedInTuik: value }),
//   toggleGeriClickedInTuik: () =>
//     set((state) => ({
//       isGeriClickedInTuik: !state.isGeriClickedInTuik,
//     })),
//   onCleanup: () => {
//     set({ isGeriClickedInTuik: false });
//   },

//   isDaire1Triggered: false,
//   setIsDaire1Triggered: (value) => set({ isDaire1Triggered: value }),

//   onCleanup: () => {
//     set({ isDaire1Triggered: false });
//   },

//   isDaire2Triggered: false,
//   setIsDaire2Triggered: (value) => set({ isDaire2Triggered: value }),

//   onCleanup: () => {
//     set({ isDaire2Triggered: false });
//   },

//   isDaire3Triggered: false,
//   setIsDaire3Triggered: (value) => set({ isDaire3Triggered: value }),

//   onCleanup: () => {
//     set({ isDaire3Triggered: false });
//   },

//   isDaire4Triggered: false,
//   setIsDaire4Triggered: (value) => set({ isDaire4Triggered: value }),
//   onCleanup: () => {
//     set({ isDaire4Triggered: false });
//   },

//   isDaire5Triggered: false,
//   setIsDaire5Triggered: (value) => set({ isDaire5Triggered: value }),
//   onCleanup: () => {
//     set({ isDaire5Triggered: false });
//   },

//   playerPosition: [0, 0, 0],
//   setPlayerPosition: (position) => set({ playerPosition: position }),

//   isAnyGameOpened: false,
//   setIsAnyGameOpened: (value) => set({ isAnyGameOpened: value }),

//   showInfoAfisDergi: false,
//   setShowInfoAfisDergi: (value) => set({ showInfoAfisDergi: value }),
//   onCleanup: () => {
//     set({ showInfoAfisDergi: false });
//   },

//   showInfoAfisKurulus: false,
//   setShowInfoAfisKurulus: (value) => set({ showInfoAfisKurulus: value }),
//   onCleanup: () => {
//     set({ showInfoAfisKurulus: false });
//   },

//   showDergi: false,
//   setShowDergi: (value) => set({ showDergi: value }),
//   onCleanup: () => {
//     set({ showDergi: false });
//   },

//   // for mobile nav buttons
//   isLeftButtonPressed: false,
//   setIsLeftButtonPressed: (value) => set({ isLeftButtonPressed: value }),
//   onCleanup: () => {
//     set({ isLeftButtonPressed: false });
//   },

//   isRightButtonPressed: false,
//   setIsRightButtonPressed: (value) => set({ isRightButtonPressed: value }),
//   onCleanup: () => {
//     set({ isRightButtonPressed: false });
//   },

//   isUpButtonPressed: false,
//   setIsUpButtonPressed: (value) => set({ isUpButtonPressed: value }),
//   onCleanup: () => {
//     set({ isUpButtonPressed: false });
//   },

//   isDownButtonPressed: false,
//   setIsDownButtonPressed: (value) => set({ isDownButtonPressed: value }),
//   onCleanup: () => {
//     set({ isDownButtonPressed: false });
//   },

//   isApiLoaded: false,
//   setIsApiLoaded: (value) => set({ isApiLoaded: value }),
//   onCleanup: () => {
//     set({ isApiLoaded: false });
//   },
// });

// const useZustandStore = create(
//   // to use localstorage
//   devtools(
//     persist(zustandStore, {
//       name: "zustand",
//     })
//   )
//   // to not use localstorage
//   // zustandStore
// );

// export default useZustandStore;

import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import strings from "./components/strings/strings.json";
import stringsEng from "./components/strings/stringsEng.json";

const defaultState = {
  courses: [],
  language: "default",
  languageData: {
    default: strings,
    eng: stringsEng,
  },
  userInfo: null,
  isBilgiIcTriggered: true,
  isBilgiGateTriggered: false,
  isGunesGateTriggered: false,
  isTuikGateTriggered: false,
  isGeriClickedInSolarSystem: false,
  isGeriClickedInTuik: false,
  isDaire1Triggered: false,
  isDaire2Triggered: false,
  isDaire3Triggered: false,
  isDaire4Triggered: false,
  isDaire5Triggered: false,
  playerPosition: [0, 0, 0],
  isAnyGameOpened: false,
  showInfoAfisDergi: false,
  showInfoAfisKurulus: false,
  showDergi: false,
  isLeftButtonPressed: false,
  isRightButtonPressed: false,
  isUpButtonPressed: false,
  isDownButtonPressed: false,
  isApiLoaded: false,
};

const zustandStore = (set) => ({
  ...defaultState,
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
  setLanguage: (selectedLanguage) => set({ language: selectedLanguage }),
  setUserInfo: (userData) => {
    set({ userInfo: userData });
  },
  toggleBilgiIcTrigger: () => {
    set((state) => ({
      isBilgiIcTriggered: !state.isBilgiIcTriggered,
    }));
  },
  toggleBilgiGateTrigger: () => {
    set((state) => ({
      isBilgiGateTriggered: !state.isBilgiGateTriggered,
    }));
  },
  toggleGunesGateTrigger: () =>
    set((state) => ({ isGunesGateTriggered: !state.isGunesGateTriggered })),
  toggleTuikGateTrigger: () =>
    set((state) => ({ isTuikGateTriggered: !state.isTuikGateTriggered })),
  toggleGeriClickedInSolarSystem: () =>
    set((state) => ({
      isGeriClickedInSolarSystem: !state.isGeriClickedInSolarSystem,
    })),
  toggleGeriClickedInTuik: () =>
    set((state) => ({
      isGeriClickedInTuik: !state.isGeriClickedInTuik,
    })),
  setIsDaire1Triggered: (value) => set({ isDaire1Triggered: value }),
  setIsDaire2Triggered: (value) => set({ isDaire2Triggered: value }),
  setIsDaire3Triggered: (value) => set({ isDaire3Triggered: value }),
  setIsDaire4Triggered: (value) => set({ isDaire4Triggered: value }),
  setIsDaire5Triggered: (value) => set({ isDaire5Triggered: value }),
  setPlayerPosition: (position) => set({ playerPosition: position }),
  setIsAnyGameOpened: (value) => set({ isAnyGameOpened: value }),
  setShowInfoAfisDergi: (value) => set({ showInfoAfisDergi: value }),
  setShowInfoAfisKurulus: (value) => set({ showInfoAfisKurulus: value }),
  setShowDergi: (value) => set({ showDergi: value }),
  setIsLeftButtonPressed: (value) => set({ isLeftButtonPressed: value }),
  setIsRightButtonPressed: (value) => set({ isRightButtonPressed: value }),
  setIsUpButtonPressed: (value) => set({ isUpButtonPressed: value }),
  setIsDownButtonPressed: (value) => set({ isDownButtonPressed: value }),
  setIsApiLoaded: (value) => set({ isApiLoaded: value }),
});

const useZustandStore = create(
  devtools(
    persist(zustandStore, {
      name: "zustand",
    })
  )
);

// Reset all states to default values on cleanup
useZustandStore.subscribe(
  (state) => state.onCleanup && state.onCleanup(),
  (state) => state.onCleanup
);

export default useZustandStore;
