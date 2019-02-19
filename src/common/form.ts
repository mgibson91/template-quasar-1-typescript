// import { AxiosHelper } from 'common-ts/axios-helper';
//
// class Form {
//   originalData: any;
//   errors: Errors;
//   axiosHelper: AxiosHelper;
//
//   /**
//    * Create a new Form instance.
//    *
//    * @param {object} data
//    */
//   constructor(data, axiosHelper: AxiosHelper) {
//     this.originalData = data;
//
//     for (let field in data) {
//       this[field] = data[field];
//     }
//
//     this.errors = new Errors();
//     this.axiosHelper = axiosHelper;
//   }
//
//   /**
//    * Fetch all relevant data for the form.
//    */
//   data() {
//     let data = {};
//
//     for (let property in this.originalData) {
//       data[property] = this[property];
//     }
//
//     return data;
//   }
//
//   /**
//    * Reset the form fields.
//    */
//   reset() {
//     for (let field in this.originalData) {
//       this[field] = '';
//     }
//
//     this.errors.clear();
//   }
//
//   /**
//    * Submit the form
//    */
//   async submit(url: string) {
//     const result = await this.axiosHelper.post({
//       url,
//       data: this.data(),
//     });
//
//     return new Promise((resolve, reject) => {
//       axios[requestType](url, this.data())
//         .then(response => {
//           this.onSuccess(response.data);
//
//           resolve(response.data);
//         })
//         .catch(error => {
//           this.onFail(error.response.data);
//
//           reject(error.response.data);
//         });
//     });
//   }
//
//   /**
//    * Handle a successful form submission
//    */
//   onSuccess(data) {
//     alert(data.message); // temporary
//
//     this.reset();
//   }
//
//   /**
//    * Handle a failed form submission
//    */
//   onFail(errors) {
//     this.errors.record(errors);
//   }
// }
