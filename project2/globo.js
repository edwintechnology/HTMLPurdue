      function WeightCalculator()
      { 
	    // In this function the idealWeight is calculated              dewolf 9.28.06 //
        // Using the information of text boxes from the form globoForm dewolf 9.28.06 //
        
        var gender, height, idealWeight;
        
        gender = document.globoForm.gender.value;
        gender = parseInt(gender);
        height = document.globoForm.height.value;
        height = parseFloat(height);
        idealWeight_male = Math.max(106 + ((height - 60) * 6), 10);
        idealWeight_female = Math.max(100 + ((height - 60) * 5), 10);
       
       // The following if statement states that if each one is missing a value dewolf 9.28.06 //
       // then an Alert Box will pop up warning them                            dewolf 9.28.06 //
      if(document.globoForm.gender.value == "" ||document.globoForm.height.value == "") 
      {
        alert("Error: Gender and/or height text box in form is empty.");
      }
      else {
        gender = document.globoForm.gender.value;
           }
        
       // The following if statement decides which equation to us dewolf 9.28.06 //
       // to state the idealWeight                                dewolf 9.28.06 //
      if(gender == 1) {
        idealWeight = idealWeight_male;
                      }
      else if (gender == 2) {
        idealWeight = idealWeight_female; 
                            }
      else {
        ideal = -1;
           }
       // this is where the textbox is changed to the idealWeight dewolf 9.28.06 //    
      document.globoForm.idealWeight.value = idealWeight;
      }

      
      function Convert()
      {
	  // This function converts the given information to determine      dewolf 9.28.06 //
	  // Calories, protein intake, and displays the type items you need dewolf 9.28.06 //    
	     var gender, weight, height, age, goal, idealWeight, calories, protein;
   
	     gender = document.globoForm.gender.value;
	     gender = parseInt(gender);
	     weight = document.globoForm.weight.value;
	     weight = parseFloat(weight);
	     height = document.globoForm.height.value;
	     height = parseFloat(height);
	     age = document.globoForm.age.value;
	     age = parseInt(age);
	     goal = document.globoForm.goal.value;
	     goal = parseInt(goal);
	     idealWeight = document.globoForm.idealWeight.value;
	     idealWeight = parseFloat(idealWeight);
	     
	  // This if statement determines the credibility of the values         dewolf 9.28.06 //
	  // if the follow values are incomplete then an alert box will show up dewolf 9.28.06 //   
	  if(
	        document.globoForm.gender.value == ""
	    ||  document.globoForm.weight.value == ""
	    ||  document.globoForm.height.value == ""
	    ||  document.globoForm.age.value == ""
	    ||  document.globoForm.goal.value == ""
	    )
	     {
		   alert("Error: At least one text box in form is empty.");
	     }
      
	  // This equation determines the Basal Metabolic Rate based on gender, weight, height, and age      dewolf 9.28.06 //
	  BMR = CalculateBMR(gender, weight, height, age);
	  
	  // This equation determines the calories based on BMR                                              dewolf 9.28.06 //
	  calories = Math.round(BMR * 1.55);  
	  
	  // This equation determines the protein based from the function CalculateProtein                   dewolf 9.28.06 //
	  protein = Math.round(CalculateProtein(goal, weight)); 
	    
	  // This Function displays the results from the functions called within the function DisplayResults dewolf 9.28.06 //
	  DisplayResults(calories, protein, goal, weight, idealWeight);
         }   
  
      function CalculateBMR(gender, weight, height, age)
       {	
	  // This Function calculates the Basal Metabolic Rate using gender, weight, height and age          dewolf 9.28.06 //        	      
	   gender = document.globoForm.gender.value;
	   
	   // This if statement determines which equation to use. Male(1) or female(2)                       dewolf 9.28.06 //
	   if(gender == 1){
		   return 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
                      }
       if(gender == 2){
	       return 655 + (4.35 * weight) + (4.7 * height) - (2.7 * age);
                      }
       }
          
      function CalculateProtein(goal, weight)
      { 
	  // This function calculates protein in a healthy diet           dewolf 9.28.06 //
        goal = document.globoForm.goal.value;
      
      // This if statement determines by what to multiply the weight  dewolf 9.28.06 //
      if (goal == 1) {
        return weight * 1.1;
                     }
      else if (goal == 2) {
        return weight * 0.7;
                          }
      else if (goal == 3) {
        return weight * 0.6;
                          }
      else {
        return -1;
           }
      }
      
      function DisplayResults(calories, protein, goal, weight, idealWeight)
         { 
	  // This function displays the picture, which depends on which goal is chosen. dewolf 9.28.06 //
	        var image, caloriesMessage;
	  
	  // This if statement chooses the picture based on which value is enter        dewolf 9.28.06 //
                if (goal == 1) {
                image = "protein.jpg";
                               }
                else if (goal == 2) {
                image = "jumprope.jpg";
                                    }
                else if (goal == 3) {
                image = "slimfast.jpg";
                                    }
                                    
      // This if statement determines which phrase to use in the table              dewolf 9.28.06 //
      // Based on the idealWeight compared to the weight of the person              dewolf 9.28.06 //   
                if(idealWeight > weight) {
                caloriesMessage = "Minimum Calories Required:";
                                         }
                else if (idealWeight < weight) {
                caloriesMessage = "Maximum Calories Allowed:";
                                               }
                else {
                caloriesMessage = "Calories (to maintain weight):";
                     }
                     
      // This is the table that is displayed when the onClick="calculate()" is clicked  dewolf 9.28.06 //
        document.write("<h2 style=\"text-align:center\"> The Globo Gym Nutrition Calculator </h2>");
        document.write("<div align=\"center\"><table border=\"1\">");
        document.write("<tr><th>" + caloriesMessage + "</th><td> " + calories + "</td></tr>");
        document.write("<tr><th>Protein \(grams\): </th><td> " + protein + " </td></tr>");
        document.write("<tr><th colspan=\"2\"> TRY THIS NEW PRODUCT </th></tr>");
        document.write("<tr><td colspan=\"2\"><img src=\"" + image + "\" </td></tr> ");
        document.write("</table></div>");   
          }