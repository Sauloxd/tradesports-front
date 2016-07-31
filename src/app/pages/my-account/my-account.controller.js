var myAccCtrl = function (crudService, $localStorage) {
  crudService.getById('cliente', $localStorage.currentUser.cpf_id)
    .then((response)=>{
      console.log(response.data);
    })
}

export default myAccCtrl;
