function load_car_models(company_id, Model_id)
{
    var company = document.getElementById(company_id);
    var Model = document.getElementById(Model_id);
    Model.value="";
    Model.innerHTML="";
    for (company in Make ){

        if(company.value == "{{company}}")
        {
            for (Model in Model){
                if (company in Model)
                    var newOption = document.createElement("option");
                    newOption.value = "{{ Model }}";
                    newOption.innerHTML = "{{ model }}";
                    Model.options.add(newOption);
            }
        }
    }
}