// export default {
//   inserted: el => {
//     // this.$store.dispatch['getImages']
//     function sendImages() {
      
//     }

//     function callback(entries, observer) {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           sendImages();
//           // observer.unobserve(el);
//         }
//       })
//     }

//     function createIO() {
//       const options = {
//         root: null,
//         threshold: 0.5
//       }
//       const observer = new IntersectionObserver(callback, options);
//       observer.observe(el);
//     }

//     createIO();

//   }
// }

import Vue from 'vue'

Vue.use({
  install(Vue, options) {
    Vue.prototype.$lazyLoad = function(update, elem) {
  
      function callback(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            update();
            // observer.unobserve(elem);
          }
        })
      }
  
      function createIO() {
        const options = {
          root: null,
          threshold: 0.5
        }
        const observer = new IntersectionObserver(callback, options);
        observer.observe(elem);
      }
  
      createIO();
    }
  }
});