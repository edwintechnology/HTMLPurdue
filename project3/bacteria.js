 	function startExperiment()
    {
	    // Starts the Experiment. defines period and init_value                                      //
	    // if you have the two text boxes empty then it wont allow you to start  Dustin Wolf 11/1/06 //
	    
	    period = document.bacteriaForm.period.value;
	    period = parseFloat(period);
	    init_value = document.bacteriaForm.init_value.value;
	    init_value = parseInt(init_value);
	    
	  if(document.bacteriaForm.period.value == "" || document.bacteriaForm.init_value.value == "")
	     {
		     alert("Please input both the growing period and the initial number of the bacteria!");
	     }
	  else if(document.bacteriaForm.init_value.value < 1)
	     { 
		     alert("The initial number of the bacteria should be at least one!");
	     }
	  else
	     { // This is where the picture is changed to the ecoli.jpg, and the values are set                                     //
	       // for text area and the current text box. also start = 1 so now we are able to do the experient Dustin Wolf 11/1/06 //
		     document.images.bacteriaImage.src = "ecoli.jpg";
		     document.bacteriaForm.history.value = "\n=====START OF A NEW EXPERIMENT=====\n\n";
		     document.bacteriaForm.current.value = "";
		     start = 1;
		 }
    }
    
   function changeImage(cur_nbr)
   {  // this function changes the picture on the website pending on the ammount of bacteria grown Dustin Wolf 11/1/06 //
	  if(document.bacteriaForm.current.value == 0)
		  {
			  document.images.bacteriaImage.src = "ecoli.jpg";
	      }  
	  else if(document.bacteriaForm.current.value > 0 && document.bacteriaForm.current.value <= 2)
	      {
		      document.images.bacteriaImage.src = "ecoli1.gif";
	      }
	  else if(document.bacteriaForm.current.value > 2 && document.bacteriaForm.current.value <= 32)
	      {
		      document.images.bacteriaImage.src = "ecoli2.gif";
	      }
	  else // assuming current number of bacteria is > 32 Dustin Wolf 11/1/06 //
	      {
		      document.images.bacteriaImage.src = "ecoli3.gif";
	      }
   }
   
   function growBacteria()
   {// This function grows the bacteria each time that the function is called  Dustin Wolf 11/1/06 //
   if(document.bacteriaForm.current.value != "")
   { // This if statement here sets the initial value to the current number so that the loop works correctly //
     // assuming that the current value isn't empty.                                     Dustin Wolf 11/1/06 //
   document.bacteriaForm.init_value.value = document.bacteriaForm.current.value;
   }
   init_value = document.bacteriaForm.init_value.value;
    
   if(start == -1)
   { // This means the startExperiment hasn't been called so start hasn't changed to 1 yet Dustin Wolf 11/1/06 //
   		alert("Please Start the Experiment!");
   }
	
   else(start == 1)
   { 
	    start = 0;
	    // sets the cur_nbr to the init_value from the text boxes Dustin Wolf 11/1/06 //
	    cur_nbr = init_value;	
		var cur_value = init_value;
		
		// times is the number of times that the bacteria will split based on the period  Dustin Wolf 11/1/06 //
		times = Math.floor(period / 20);
		cur_nbr = cur_nbr * Math.pow(2, times);
		
		// splitCount is the variable telling how many times the bacteria split based on the times variable Dustin Wolf 11/1/06 //
		splitCount = 1;
		// this is the text area that adds on to the original text in the area.  Dustin Wolf 11/1/06 //
		document.bacteriaForm.history.value = document.bacteriaForm.history.value +
                                            "The bacteria will split " + times + " times.\n" +
					    					"The initial number of bacteria is " + init_value + "\n\n";
	   // this while loop takes the variables splitCount and times and runs this loop until splitCount //
	   // is equal to times. inside the while loop more text area is added to the previous text above  //
	   // and the splitCount is replaced by 1 + splitCount.                      Dustin Wolf 11/1/06   //	    					
   while(splitCount <= times && cur_value * 2 <= 200000)
   {
        cur_value = cur_value * 2;
        document.bacteriaForm.history.value = document.bacteriaForm.history.value +
	                    				      "This is split " + splitCount + ":\n" +
					                          "The current number of bacteria is: " + cur_value +"\n";
        splitCount = splitCount + 1;
   }
      // This variable changes the value of the textarea and adds on to it Dustin 11/1/06 //
      document.bacteriaForm.history.value = document.bacteriaForm.history.value +
                                            "\n-------------------------------------\n\n";
      // This changes the value of text box current to the new value Dustin Wolf 11/1/06 //    
      document.bacteriaForm.current.value = cur_value;
      changeImage(cur_nbr); // function called to change picture Dustin Wolf 11/1/06 //
      if(cur_value * 2 >= 200000)
      { // this if statement alerts the user when the bacteria gets too large  Dustin Wolf 11/1/06 //
          alert("The number of bacteria will soon exceed 200,000. You should stop growing them now! Try using the chemical to kill of them!");
      }
         
     if(document.bacteriaForm.period.value == "")
     { // this if statement states if period is empty then it will alert the user Dustin Wolf 11/1/06 //
	     alert("Please enter the growing period of the Bacteria!");
     }
     if(document.bacteriaForm.period.value < 20)
     { // this if statement states if period is less then 20, then the user is alerted to try a new number  Dustin Wolf 11/1/06 //
	     alert("Growing period is too short! Try longer period \(>20 minutes\)!");
     }
   }
   }
   
   function killBacteria()
   { // assuming that current is not zero. Dustin Wolf 11/1/06 //
       document.bacteriaForm.init_value.value = document.bacteriaForm.current.value;
	   init_value = document.bacteriaForm.init_value.value;
	   if(start == -1)
	   { // If statement states that the experiment hasn't been started yet  Dustin Wolf 11/1/06 //
		   alert("No need to kill bacteria when there is no bacteria at all!");
	   }
	   else(start == 1)
	   { // else states that the experiment has been started and that the cur_nbr is equal to the init_value //
		   start = 0;
	   	   cur_nbr = init_value;
   	   }
   	   
	   if(document.bacteriaForm.current.value == 0)
	   { // this if states that if the current number of bacteria is zero,             //
	     // then it will alert the user to start a new experiment. Dustin Wolf 11/1/06 //
		   alert("The number of bacteria has decreased to 0, please start a new experiment!");
	   }
	   else
	   { // if larger then zero, then it will execute the following Dustin Wolf 11/1/06 //
	  
	   kill_percent = RandomInt(10,60); // gets a random number between 10 and 60 for the percents Dustin Wolf 11/1/06 //
	   cur_nbr = Math.floor(cur_nbr*(1 - kill_percent * 0.01)) // makes the percent a number and subtract it from 1 to get what remains //
	   document.bacteriaForm.current.value = cur_nbr;          // Sets the current value text box to the remaining  Dustin Wolf 11/1/06 //
	   document.bacteriaForm.history.value = document.bacteriaForm.history.value +
	   										 "\nThe chemical kills " + kill_percent + "% of the bacteria.\n" +
	   										 "The initial number of bacteria is: " + init_value + "\n" +
	   										 "The number of bacteria left now is: " + cur_nbr + "\n\n" +
	   										 "----------------------------------------------------\n";
	   changeImage(cur_nbr); // Changes picture Dustin Wolf 11/1/06 //
       }									 
   }
   