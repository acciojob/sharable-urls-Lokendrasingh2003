// your code here
const form=document.getElementById("form")
const nameInput=document.getElementById("name")
const yearInput=document.getElementById("year")
const url=document.getElementById("url")
form.addEventListener("submit",function(e){
   e.preventDefault()
	let baseUrl="https://localhost:8080/"
	let params=[]
	if(nameInput.value.trim()!==""){
		params.push(`name=${nameInput.value}`)
		
	}
	if(yearInput.value.trim()!==""){
		params,push(`year=${yearInput.value}`)
	}
	if(params.length>0){
		baseUrl += "?" + params.join("&")
	}

	url.textContent=baseUrl
	   
	
})
