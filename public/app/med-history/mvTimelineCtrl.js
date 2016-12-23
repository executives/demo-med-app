angular.module('app').controller('mvTimelineCtrl', function($scope, mvUser, mvNotifier, $window) {
  $scope.med_history = false;
  $window.medical_history = {
        	"title": {
        		"media": {
        			"url": "https://media.idtech.com/uploads/2014/01/james.jpg",
        		},
        		"text": {
        			"headline": "John Doe<br/>Age: 32  Blood Type: A<br/>Height: 5 ft. 11 in.  Weight: 232 lbs.",
        			"text": "Known allergies: Penicillin, Bee Venom, Peanuts"
        		}
        	},
        	"events": [{
        		"group": "respiratory",
        		"media": {
        			"url": "http://www.fpnotebook.com/_media/lungPtxComplete_PA.jpg",
        			"caption": "chest x-ray",
        			"credit": "Hospital - St. Joseph's Phoenix"
        		},
        		"start_date": {
        			"month": "10",
        			"day": "1",
        			"year": "1982"
        		},
        		"text": {
        			"headline": "Diagnosis: Acute Asthma",
        			"text": "Quisque pulvinar dolor vitae velit porta, in tempor nisl blandit. Curabitur sem ex, consequat et neque at, maximus malesuada velit. Cras eu pretium tellus. Aenean finibus odio quis tellus bibendum iaculis. Vestibulum venenatis quis mi sed lacinia. Integer a tincidunt erat. Praesent ut ex sit amet eros maximus mattis. Duis maximus elit ut tempus aliquet. Suspendisse potenti. Etiam pretium, augue porttitor vulputate luctus, erat felis imperdiet sem, nec tincidunt purus tortor at turpis. Quisque fermentum auctor turpis sed egestas. Aenean sollicitudin turpis lacus, vitae euismod lacus vestibulum ac. Morbi tortor dolor, auctor a mollis at, luctus vel magna. Phasellus porttitor porttitor rhoncus. Vestibulum a ullamcorper massa, nec ornare nibh."
        		}
        	}, {
        		"group": "skeletal/muscular",
        		"media": {
        			"url": "http://i399.photobucket.com/albums/pp74/sparetyre_2008/brokenarm.jpg",
        			"caption": "x-ray - left wrist",
        			"credit": "Hospital - Banner Health Thunderbird"
        		},
        		"start_date": {
        			"month": "02",
        			"day": "18",
        			"year": "1986"
        		},
        		"text": {
        			"headline": "Diagnosis - Fractured Left Wrist",
        			"text": "Vivamus dictum egestas pulvinar. Praesent eu varius odio, eu tristique ligula. Phasellus at fringilla enim. Sed a mauris egestas, vehicula nibh sit amet, euismod metus. Phasellus pharetra neque non dolor hendrerit, ac semper odio ornare. Aenean vel nisl sodales, varius libero in, euismod tellus. Nunc eleifend ullamcorper tortor quis vulputate. Nulla sed purus magna. Curabitur mattis ipsum a porta semper. Aliquam nec tempor metus, eu rutrum lacus. Nunc a fermentum neque, eu viverra orci."
        		}
        	}, {
        		"group": "cardiovascular",
        		"media": {
        			"url": "http://www.doghouseboxing.com/Media/ReM_Donaire_Blood_1.jpg",
        			"caption": "<a href='#'>Blood Test</a>",
        			"credit": "LabCorp"
        		},
        		"start_date": {
        			"month": "8",
        			"day": "2",
        			"year": "1988"
        		},
        		"text": {
        			"headline": "Blood Test",
        			"text": "Quisque ultricies neque dui, a efficitur neque hendrerit a. Sed a aliquet sapien, vel malesuada risus. Fusce vel eros sit amet dolor lacinia sodales bibendum nec eros. Pellentesque et suscipit orci. Donec dictum lectus eget pellentesque mattis. Quisque non mi eu velit sollicitudin fringilla eget a felis. Maecenas blandit sit amet elit nec volutpat. Fusce ornare, orci eget congue tincidunt, massa velit laoreet erat, id pulvinar sapien lectus eget elit. Aliquam erat volutpat."
        		}
        	}, {
        		"group": "skeletal/muscular",
        		"media": {
        			"url": "http://fbroken.weebly.com/uploads/1/3/7/2/13721602/4445824.jpg",
        			"caption": "x-ray - left femur",
        			"credit": "Banner Health Surprise"
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Diagnosis - Broken Left Femur",
        			"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel mauris nec est finibus facilisis id tempor orci. Etiam dolor neque, vulputate vitae fermentum ut, vulputate a felis. Aenean vel lobortis est. Quisque eget nisl odio. "
        		}
        	}, {
        		"group": "skeletal/muscular",
        		"media": {
        			"url": "http://i.imgur.com/z5qEFqI.png",
        			"caption": "x-ray - chest collar",
        			"credit": "Banner Health Surprise"
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Diagnosis - Broken Collar Bone",
        			"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel mauris nec est finibus facilisis id tempor orci. Etiam dolor neque, vulputate vitae fermentum ut, vulputate a felis. Aenean vel lobortis est. Quisque eget nisl odio. "
        		}
        	}, {
        		"group": "skeletal/muscular",
        		"media": {
        			"url": "http://img.medscapestatic.com/pi/meds/ckb/98/20598tn.jpg",
        			"caption": "x-ray - chest ribs",
        			"credit": "Banner Health Surprise"
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Diagnosis - Broken Ribs",
        			"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel mauris nec est finibus facilisis id tempor orci. Etiam dolor neque, vulputate vitae fermentum ut, vulputate a felis. Aenean vel lobortis est. Quisque eget nisl odio. "
        		}
        	}, {
        		"group": "cardiovascular",
        		"media": {
        			"url": "",
        			"caption": "",
        			"credit": ""
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Diagnosis - Cardiac Arrest",
        			"text": "Suspendisse sapien sapien, tempus cursus libero at, feugiat mattis ligula. Nunc placerat eros quis nisi scelerisque volutpat. Vivamus gravida vulputate mi, nec rutrum sapien laoreet ac. Sed eget libero sodales diam efficitur pellentesque sit amet non arcu. Donec sed sollicitudin ante. Fusce tempor et libero sit amet interdum. Nam magna elit, venenatis vel rhoncus dignissim, mattis quis arcu. Phasellus et eros et mauris egestas iaculis vel vitae enim. Vivamus semper mollis leo iaculis venenatis. Phasellus sit amet tristique velit. Maecenas orci velit, venenatis sit amet quam ac, elementum feugiat ante."
        		}
        	}, {
        		"group": "digestive/excretory",
        		"media": {
        			"url": "",
        			"caption": "",
        			"credit": ""
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Treatment - Catheter Application",
        			"text": "Multiplatinum second album sells more than 20 million copies worldwide. With 'Whitney', Houston became the first female artist to produce four number 1 singles on one album including \"I Wanna Dance With Somebody,' 'Didn't We Almost Have It All,' 'So Emotional' and 'Where Do Broken Hearts Go.'"
        		}
        	}, {
        		"group": "cardiovascular",
        		"media": {
        			"url": "https://theorytopractice.files.wordpress.com/2011/12/knorris_2.gif",
        			"caption": "<a href='#'>Blood Test</a>",
        			"credit": "LabCorp"
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Blood Test",
        			"text": "Quisque ultricies neque dui, a efficitur neque hendrerit a. Sed a aliquet sapien, vel malesuada risus. Fusce vel eros sit amet dolor lacinia sodales bibendum nec eros. Pellentesque et suscipit orci. Donec dictum lectus eget pellentesque mattis. Quisque non mi eu velit sollicitudin fringilla eget a felis. Maecenas blandit sit amet elit nec volutpat. Fusce ornare, orci eget congue tincidunt, massa velit laoreet erat, id pulvinar sapien lectus eget elit. Aliquam erat volutpat."
        		}
        	}, {
        		"group": "respiratory",
        		"media": {
        			"url": "",
        			"caption": "",
        			"credit": ""
        		},
        		"start_date": {
        			"month": "12",
        			"day": "11",
        			"year": "1994"
        		},
        		"text": {
        			"headline": "Diagnosis - Acute Upper-Respiratory Infection",
        			"text": "Amoxicillin 50mg prescribed. Vivamus dictum egestas pulvinar. Praesent eu varius odio, eu tristique ligula. Phasellus at fringilla enim. Sed a mauris egestas, vehicula nibh sit amet, euismod metus. Phasellus pharetra neque non dolor hendrerit, ac semper odio ornare. Aenean vel nisl sodales, varius libero in, euismod tellus."
        		}
        	}, {
        		"group": "nervous",
        		"media": {
        			"url": "https://theorytopractice.files.wordpress.com/2011/12/knorris__opt.gif",
        			"caption": "<a href='#'>Blood Test</a>",
        			"credit": "LabCorp"
        		},
        		"start_date": {
        			"month": "8",
        			"day": "1", 
        			"year": "1997"
        		},
        		"text": {
        			"headline": "Diagnosis - Seizure",
        			"text": "Phasellus laoreet pretium egestas. Donec in purus et nulla volutpat sollicitudin quis ac diam. Quisque tempor erat quis libero tempor, eget luctus mi commodo. Phasellus rutrum a dolor tempus mattis. Quisque sed condimentum tortor, id posuere orci. Maecenas eu nisi lacus. Phasellus et fringilla augue. Ut sed ultrices nisi."
        		}
        	}]
        };
        
  /* TODO - link up this controller to mvUser and get at functions in there...
  $scope.request_history = function() {
      $scope.history = mvUser.getHistory($scope.secret_key);
      console.log($scope.history);
  };
  */
  
  $scope.request_history = function() {
    console.log('request_history: secretKey - ' + $scope.secretKey);
    if ($scope.secretKey == 'demo_key') {
      $window.medical_history = {
        	"title": {
        		"media": {
        			"url": "https://media.idtech.com/uploads/2014/01/james.jpg",
        		},
        		"text": {
        			"headline": "John Doe<br/>Age: 32  Blood Type: A<br/>Height: 5 ft. 11 in.  Weight: 232 lbs.",
        			"text": "Known allergies: Penicillin, Bee Venom, Peanuts"
        		}
        	},
        	"events": [{
        		"group": "respiratory",
        		"media": {
        			"url": "http://www.fpnotebook.com/_media/lungPtxComplete_PA.jpg",
        			"caption": "chest x-ray",
        			"credit": "Hospital - St. Joseph's Phoenix"
        		},
        		"start_date": {
        			"month": "10",
        			"day": "1",
        			"year": "1982"
        		},
        		"text": {
        			"headline": "Diagnosis: Acute Asthma",
        			"text": "Quisque pulvinar dolor vitae velit porta, in tempor nisl blandit. Curabitur sem ex, consequat et neque at, maximus malesuada velit. Cras eu pretium tellus. Aenean finibus odio quis tellus bibendum iaculis. Vestibulum venenatis quis mi sed lacinia. Integer a tincidunt erat. Praesent ut ex sit amet eros maximus mattis. Duis maximus elit ut tempus aliquet. Suspendisse potenti. Etiam pretium, augue porttitor vulputate luctus, erat felis imperdiet sem, nec tincidunt purus tortor at turpis. Quisque fermentum auctor turpis sed egestas. Aenean sollicitudin turpis lacus, vitae euismod lacus vestibulum ac. Morbi tortor dolor, auctor a mollis at, luctus vel magna. Phasellus porttitor porttitor rhoncus. Vestibulum a ullamcorper massa, nec ornare nibh."
        		}
        	}, {
        		"group": "skeletal/muscular",
        		"media": {
        			"url": "http://i399.photobucket.com/albums/pp74/sparetyre_2008/brokenarm.jpg",
        			"caption": "x-ray - left wrist",
        			"credit": "Hospital - Banner Health Thunderbird"
        		},
        		"start_date": {
        			"month": "02",
        			"day": "18",
        			"year": "1986"
        		},
        		"text": {
        			"headline": "Diagnosis - Fractured Left Wrist",
        			"text": "Vivamus dictum egestas pulvinar. Praesent eu varius odio, eu tristique ligula. Phasellus at fringilla enim. Sed a mauris egestas, vehicula nibh sit amet, euismod metus. Phasellus pharetra neque non dolor hendrerit, ac semper odio ornare. Aenean vel nisl sodales, varius libero in, euismod tellus. Nunc eleifend ullamcorper tortor quis vulputate. Nulla sed purus magna. Curabitur mattis ipsum a porta semper. Aliquam nec tempor metus, eu rutrum lacus. Nunc a fermentum neque, eu viverra orci."
        		}
        	}, {
        		"group": "cardiovascular",
        		"media": {
        			"url": "http://www.doghouseboxing.com/Media/ReM_Donaire_Blood_1.jpg",
        			"caption": "<a href='#'>Blood Test</a>",
        			"credit": "LabCorp"
        		},
        		"start_date": {
        			"month": "8",
        			"day": "2",
        			"year": "1988"
        		},
        		"text": {
        			"headline": "Blood Test",
        			"text": "Quisque ultricies neque dui, a efficitur neque hendrerit a. Sed a aliquet sapien, vel malesuada risus. Fusce vel eros sit amet dolor lacinia sodales bibendum nec eros. Pellentesque et suscipit orci. Donec dictum lectus eget pellentesque mattis. Quisque non mi eu velit sollicitudin fringilla eget a felis. Maecenas blandit sit amet elit nec volutpat. Fusce ornare, orci eget congue tincidunt, massa velit laoreet erat, id pulvinar sapien lectus eget elit. Aliquam erat volutpat."
        		}
        	}, {
        		"group": "skeletal/muscular",
        		"media": {
        			"url": "http://fbroken.weebly.com/uploads/1/3/7/2/13721602/4445824.jpg",
        			"caption": "x-ray - left femur",
        			"credit": "Banner Health Surprise"
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Diagnosis - Broken Left Femur",
        			"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel mauris nec est finibus facilisis id tempor orci. Etiam dolor neque, vulputate vitae fermentum ut, vulputate a felis. Aenean vel lobortis est. Quisque eget nisl odio. "
        		}
        	}, {
        		"group": "skeletal/muscular",
        		"media": {
        			"url": "http://i.imgur.com/z5qEFqI.png",
        			"caption": "x-ray - chest collar",
        			"credit": "Banner Health Surprise"
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Diagnosis - Broken Collar Bone",
        			"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel mauris nec est finibus facilisis id tempor orci. Etiam dolor neque, vulputate vitae fermentum ut, vulputate a felis. Aenean vel lobortis est. Quisque eget nisl odio. "
        		}
        	}, {
        		"group": "skeletal/muscular",
        		"media": {
        			"url": "http://img.medscapestatic.com/pi/meds/ckb/98/20598tn.jpg",
        			"caption": "x-ray - chest ribs",
        			"credit": "Banner Health Surprise"
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Diagnosis - Broken Ribs",
        			"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel mauris nec est finibus facilisis id tempor orci. Etiam dolor neque, vulputate vitae fermentum ut, vulputate a felis. Aenean vel lobortis est. Quisque eget nisl odio. "
        		}
        	}, {
        		"group": "cardiovascular",
        		"media": {
        			"url": "",
        			"caption": "",
        			"credit": ""
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Diagnosis - Cardiac Arrest",
        			"text": "Suspendisse sapien sapien, tempus cursus libero at, feugiat mattis ligula. Nunc placerat eros quis nisi scelerisque volutpat. Vivamus gravida vulputate mi, nec rutrum sapien laoreet ac. Sed eget libero sodales diam efficitur pellentesque sit amet non arcu. Donec sed sollicitudin ante. Fusce tempor et libero sit amet interdum. Nam magna elit, venenatis vel rhoncus dignissim, mattis quis arcu. Phasellus et eros et mauris egestas iaculis vel vitae enim. Vivamus semper mollis leo iaculis venenatis. Phasellus sit amet tristique velit. Maecenas orci velit, venenatis sit amet quam ac, elementum feugiat ante."
        		}
        	}, {
        		"group": "digestive/excretory",
        		"media": {
        			"url": "",
        			"caption": "",
        			"credit": ""
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Treatment - Catheter Application",
        			"text": "Multiplatinum second album sells more than 20 million copies worldwide. With 'Whitney', Houston became the first female artist to produce four number 1 singles on one album including \"I Wanna Dance With Somebody,' 'Didn't We Almost Have It All,' 'So Emotional' and 'Where Do Broken Hearts Go.'"
        		}
        	}, {
        		"group": "cardiovascular",
        		"media": {
        			"url": "https://theorytopractice.files.wordpress.com/2011/12/knorris_2.gif",
        			"caption": "<a href='#'>Blood Test</a>",
        			"credit": "LabCorp"
        		},
        		"start_date": {
        			"month": "7",
        			"day": "23",
        			"year": "1991"
        		},
        		"text": {
        			"headline": "Blood Test",
        			"text": "Quisque ultricies neque dui, a efficitur neque hendrerit a. Sed a aliquet sapien, vel malesuada risus. Fusce vel eros sit amet dolor lacinia sodales bibendum nec eros. Pellentesque et suscipit orci. Donec dictum lectus eget pellentesque mattis. Quisque non mi eu velit sollicitudin fringilla eget a felis. Maecenas blandit sit amet elit nec volutpat. Fusce ornare, orci eget congue tincidunt, massa velit laoreet erat, id pulvinar sapien lectus eget elit. Aliquam erat volutpat."
        		}
        	}, {
        		"group": "respiratory",
        		"media": {
        			"url": "",
        			"caption": "",
        			"credit": ""
        		},
        		"start_date": {
        			"month": "12",
        			"day": "11",
        			"year": "1994"
        		},
        		"text": {
        			"headline": "Diagnosis - Acute Upper-Respiratory Infection",
        			"text": "Amoxicillin 50mg prescribed. Vivamus dictum egestas pulvinar. Praesent eu varius odio, eu tristique ligula. Phasellus at fringilla enim. Sed a mauris egestas, vehicula nibh sit amet, euismod metus. Phasellus pharetra neque non dolor hendrerit, ac semper odio ornare. Aenean vel nisl sodales, varius libero in, euismod tellus."
        		}
        	}, {
        		"group": "nervous",
        		"media": {
        			"url": "https://theorytopractice.files.wordpress.com/2011/12/knorris__opt.gif",
        			"caption": "<a href='#'>Blood Test</a>",
        			"credit": "LabCorp"
        		},
        		"start_date": {
        			"month": "8",
        			"day": "1", 
        			"year": "1997"
        		},
        		"text": {
        			"headline": "Diagnosis - Seizure",
        			"text": "Phasellus laoreet pretium egestas. Donec in purus et nulla volutpat sollicitudin quis ac diam. Quisque tempor erat quis libero tempor, eget luctus mi commodo. Phasellus rutrum a dolor tempus mattis. Quisque sed condimentum tortor, id posuere orci. Maecenas eu nisi lacus. Phasellus et fringilla augue. Ut sed ultrices nisi."
        		}
        	}]
        };
      $scope.med_history = true;
      console.log($scope.showHistory);
    }
    $scope.secretKey = '';
    //$scope.$digest();
  }
});