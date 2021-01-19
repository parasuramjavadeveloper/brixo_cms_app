export default function reducer(state = {
  debtorsList: [],
  getDebtorsErr:null,
  selectedLanguage:"",
  showPaymemtPopUp:"",
  debtorsListFiltered:[],
  tableLoader:true,
}, action) {

  switch (action.type) {
    case "SAVE_DEBTORS_LIST_ON_SUCCESS":
      {
        return {
          ...state,
          debtorsList: action.list
        }
      }
      
      case "SAVE_DEBTORS_LIST_ON_FILTER":
      {
        return {
          ...state,
          debtorsListFiltered: action.list
        }
      }
      
      case "FETCH_DEBTORS_FAILED":
      {
        return {
          ...state,
          getDebtorsErr: action.err
        }
      }
    
      case "UPDATE_SELECTED_LANGUAGE":
      {
        return {
          ...state,
          selectedLanguage: action.val
        }
      }
      
      case "SELECTED_POPUP_VALUE":
      {
        return {
          ...state,
          showPaymemtPopUp: action.val
        }
      }
      
      case "SHOW_TABLE_LOADER":
      {
        return {
          ...state,
          tableLoader: action.flag
        }
      }
    

      default: return state;
  }
  
  
}