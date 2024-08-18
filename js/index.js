			function showAdRules() {
				alert(
					'RULES FOR PLACING YOUR ADVERTISEMENT:' +
					'\n' +
					'--------------------------------------------------------' +
					'\n' +
					'1. No abusive content allowed nor should link take to the same.' + 
					'\n' + '\n' +
					'2. Ad link should open up relevant web page only.' + 
					'\n' + '\n' +
					'3. No blinking Ads to keep overall consistency.' + 
					'\n' + '\n' +
					'4. Website owner (Jani Plastics) will have all rights to remove ad without prior notice if above rules are found to be compromised.' +
					'\n' + '\n' +
					'5. Contact Us for payment terms & conditions.'
				);			
			}
			function showDisclaimer() {
				alert(
						'JANI PLASTICS WEB-SITE DISCLAIMER' + 
						'\n' + 
						'\n' + 
						'KINDLY READ THIS DISCLAIMER BEFORE EXPLORING OUR WEB-SITE [WWW.JANIPLASTICS.COM].' + 
						'\n' + 
						'\n' + 
						'JANI PLASTICS (THE COMPANY) PROVIDES THIS WEB-SITE AS A SERVICE TO THE PUBLIC AND TO THE INTERNET COMMUNITY. SUCH INFORMATION MAY BE SUBJECT TO AMENDMENT AND UPDATING WITHOUT NOTICE.  ' + 
						'\n' + 
						'\n' + 
						'AS THE INFORMATION CONTAINED WITHIN THIS WEB-SITE IS BELIEVED TO BE ACCURATE, AND THE INFORMATION CONTAINED WITHIN THE WEB-SITE IS AT TIMES UPDATED, NO WARRANTY OR REPRESENTATION, ARTICULATION OR IMPLIED, IS OR WILL BE GIVEN BY JANI PLASTICS AS TO THE COMPLETENESS OR ACCURACY OF THIS INFORMATION OR OPINIONS CONTAINED HEREIN.  JANI PLASTICS IS NOT RESPONSIBLE FOR, AND EXPRESSLY DISCLAIMS ALL LIABILITY FOR, DAMAGES OF ANY KIND ARISING OUT OF REFERENCE TO, USE, OR RELIANCE ON ANY INFORMATION CONTAINED WITHIN THIS WEB-SITE.' + 
						'\n'  + 
						'\n' + 
						'WHILE THE JANI PLASTICS WEB-SITE MAY POSSIBLY INCLUDE LINKS PROVIDING DIRECT ACCESS TO OTHER INTERNET RESOURCES, INCLUDING WEB-SITES, JANI PLASTICS IS NOT RESPONSIBLE FOR THE ACCURACY OR CONTENT OF INFORMATION CONTAINED IN THESE WEB-SITES. LINKS FROM JANI PLASTICS TO THE THIRD-PARTY SITES DO NOT COMPRISE AN ENDORSEMENT BY JANI PLASTICS OF THE PARTIES OR THEIR PRODUCTS AND SERVICES, NOR DOES THE APPEARANCE ON THE WEB-SITE OF ADVERTISEMENTS AND PRODUCT OR SERVICE INFORMATION COMPILE AN ENDORSEMENT BY JANI PLASTICS, AND JANI PLASTICS HAS NOT EXAMINED THE CLAIMS MADE BY ANY ADVERTISER AS THE PRODUCT INFORMATION IS BASED SOLELY ON MATERIAL RECEIVED FROM SUPPLIERS.' + 
						'\n' + 
						'\n' + 
						'IN NO INCIDENT WILL JANI PLASTICS BE LIABLE FOR ANY LOSS OR DAMAGE INCLUDING WITHOUT LIMITATION, INDIRECT OR CONSEQUENTIAL LOSS OR DAMAGE, OR ANY LOSS OR DAMAGE WHATSOEVER ARISING FROM LOSS OF DATA OR PROFITS ARISING OUT OF OR IN CONNECTION WITH THE USE OF THIS WEB-SITE.' + 
						'\n' + 
						'\n' + 
						'EVERY EFFORT IS MADE TO KEEP THE WEB-SITE UP AND RUNNING CAPABLY. HOWEVER, JANI PLASTICS TAKES NO RESPONSIBILITY FOR AND WILL NOT BE LIABLE FOR THE WEB-SITE BEING TEMPORARILY UNAVAILABLE DUE TO TECHNICAL ISSUES BEYOND OUR CONTROL.'					
					);
			}
			function changeColour(obj) {
				 obj.style.color="#3385FF";
				 obj.style.font = "bold 17px Arial";
			}
			function changeBack(obj) {
				obj.style.color="#2929A3";
				obj.style.font = "bold 16px Verdana";
			}
			var myIndex = 0;
			//Slides show function
			function runSuccessStories() {
			    var i;
			    var x = document.getElementsByClassName("mySlides");
			    for (i = 0; i < x.length; i++) {
			       x[i].style.display = "none";
			    }
			    myIndex++;
			    if (myIndex > x.length) {myIndex = 1;}
			    x[myIndex-1].style.display = "block";
			    setTimeout(runSuccessStories, 4000); // Change image every 2 seconds
			}

