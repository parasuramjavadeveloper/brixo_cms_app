
import axios from "axios";

export function showTableloader(flag) {
  return {
    type: "SHOW_TABLE_LOADER",
    flag
  }
}

export function getDebtors() { 
  return function(dispatch){
    dispatch(showTableloader(true))
    return axios.get('http://gotracrat.in:8055/api/v1/debtor ') 
    .then(({data}) => {
      dispatch(saveDebtorsListOnSuccess(data.response)) 
      dispatch(filteredDebtorsList(data.response))
      dispatch(showTableloader(false))
    }).catch(err =>
      dispatch(getDebtorsFailure(err.message))
    )
  }
}


function getDebtorsFailure(err){
  return{
    type:"FETCH_DEBTORS_FAILED",
    err
  }
}

function saveDebtorsListOnSuccess(list) {
  return {
    type: "SAVE_DEBTORS_LIST_ON_SUCCESS",
    list
  }
}

export function filteredDebtorsList(list) {
  return {
    type: "SAVE_DEBTORS_LIST_ON_FILTER",
    list
  }
}

export function updatSelectedLanguge(val) {
  return {
    type: "UPDATE_SELECTED_LANGUAGE",
    val
  }
}


export function SelectedPaymentPopup(val) {
  return {
    type: "SELECTED_POPUP_VALUE",
    val
  }
}