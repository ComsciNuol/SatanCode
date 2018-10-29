function call_data()
{
		var i= document.getElementById('search').value;
		//enum
		var idx;
		(function (idx) {
    		idx[idx["mimee"] = 0] = "mimee";
    		idx[idx["Phanousone"] = 1] = "Phanousone";
    		idx[idx["Phonephasert"] = 2] = "Phonephasert";
    		idx[idx["Soukkaserm"] = 3] = "Soukkaserm";
    		idx[idx["Anun"] = 4] = "Anun";
    		idx[idx["Avone"] = 5] = "Avone";
    		idx[idx["Soukthave"] = 6] = "Soukthave";
    		idx[idx["Souvanh"] = 7] = "Souvanh";
    		idx[idx["Leeching"] = 8] = "Leeching";
    		idx[idx["Thipphaphone"] = 9] = "Thipphaphone";
    		idx[idx["Phongphatz"] = 10] = "Phongphatz";
    		idx[idx["Phuangphet"] = 11] = "Phuangphet";
    		idx[idx["Anouvong"] = 12] = "Anouvong";
    		idx[idx["Uro"] = 13] = "Uro";
    		idx[idx["Xaylor"] = 14] = "Xaylor";
    		idx[idx["hong"] = 15] = "hong";
    		idx[idx["Xourwang"] = 16] = "Xourwang";
    		idx[idx["Changyang"] = 17] = "Changyang";
    		idx[idx["Chanlor"] = 18] = "Chanlor";
            idx[idx["Thida"] = 19] = "Thida";
            idx[idx["Meeme"] = 20] = "Meeme";
            idx[idx["Onchan"] = 21] = "Onchan";
            idx[idx["Souliya"] = 22] = "Souliya";
			})(idx || (idx = {}));
			// console.log(idx[i]);
			var idx_name = idx[i];
		// var opp = "hello";
		
		var data = [{name:'Mimee',lname:'THIPHUNTHAVONG',img:'img/IMG-20181023-WA0007.jpg'},
			 	 	 {name:'Phanousone',lname:'UNKNOWN',img:'img/IMG-20181023-WA0000.jpg'},
			 	 	 {name:'Phonephasert',lname:'UNKNOWN',img:'img/IMG-20181023-WA0001.jpg'},
			 	 	 {name:'Soukkaserm',lname:'TONTAKOB',img:'img/IMG-20181023-WA0002.jpg'},
			 	 	 {name:'Anun ',lname:'LATHXAVONG',img:'img/IMG-20181023-WA0003.jpg'},
			 	 	 {name:'Avone',lname:'UNKNOWN',img:'img/IMG-20181023-WA0004.jpg'},
			 	 	 {name:'Soukthave',lname:'THAXANON',img:'img/IMG-20181023-WA0005.jpg'},
			 	 	 {name:'Souvanh',lname:'UNKNOWN',img:'img/IMG-20181023-WA0006.jpg'},
			 	 	 {name:'Leeching',lname:'LEE',img:'img/IMG-20181023-WA0008.jpg'},
			 	 	 {name:'Thipphaphone',lname:'PHONESAMLET',img:'img/IMG-20181023-WA0009.jpg'},
			 	 	 {name:'Phongphatz',lname:'KHAMPHIEW',img:'img/IMG-20181023-WA0010.jpg'},
			 	 	 {name:'Phuangphet',lname:'PHOUMINITH',img:'img/IMG-20181023-WA0011.jpg'},
			 	 	 {name:'Anouvong',lname:'KAOMRMR',img:'img/IMG-20181023-WA0012.jpg'},
			 	 	 {name:'Uro',lname:'PINKEO',img:'img/IMG-20181023-WA0013.jpg'},
			 	 	 {name:'Xaylor',lname:'UNKNOWN',img:'img/IMG-20181023-WA0014.jpg'},
			 	 	 {name:'hong',lname:'BOUNPUNYA',img:'img/IMG-20181023-WA0015.jpg'},
			 	 	 {name:'Xourwang',lname:'UNKNOWN',img:'img/IMG-20181023-WA0016.jpg'},
			 	 	 {name:'Changyang',lname:'UNKNOWN',img:'img/IMG-20181023-WA0017.jpg'},
			 	 	 {name:'Chanlor',lname:'UNKNOWN',img:'img/IMG-20181023-WA0018.jpg'},
                     {name:'Thida',lname:'VONGKHAMHEUANG',img:'img/44758231_2291813904166117_1272304316782215168_n.jpg'},
                     {name:'Meeme',lname:'PHUANGPHET',img:'img/44831598_182878232629515_2655066246000672768_n.jpg'},
                     {name:'Onchan',lname:'MAELAO',img:'img/44788967_265022477486763_5158993112546148352_n.jpg'},
                     {name:'Souliya',lname:'UNKNOWN',img:'img/43674849_185305532345495_7675288643090513920_n.jpg'},
			 	 	 ];

		var img = "<img id=\"icon_idx\" src="+data[idx_name].img+"><br>";
		var mytable = "<table align=\"center\" cellspacing=\"2\" cellpadding=\"2\">"+
           " <tr>"+
                "<td id=\"td\">Name :</td>"+
                "<td>"+data[idx_name].name+"</td>"+
           "</tr>"+
            "<tr>"+
                "<td id=\"td\">Surname :</td>"+
                "<td>"+data[idx_name].lname+"</td>"+
            "</tr>"+
            "<tr>"+
                "<td id=\"td\">Department:</td>"+
                "<td> Computer</td>"+
            "</tr>"+
            "<tr>"+
                "<td id=\"td\">Major :</td>"+
                "<td>Website development</td>"+
            "</tr>"+
            "<tr>"+
                "<td id=\"td\">Year :</td>"+
                "<td>3</td>"+
            "</tr>"+
        "</table>";
						// "<p class=\"txt_detail\">Name:"+data[idx_name].name+"</p>"+
						// "<p class=\"txt_detail\">Surname:"+data[idx_name].lname+"</p>"+
						// "<p class=\"txt_detail\">Department: Computer</p>"+
						// "<p class=\"txt_detail\">Major: Website development</p>"+
						// "<p class=\"txt_detail\">Year: 3</p>";
		document.getElementById("mySpan1").innerHTML = img;
		document.getElementById("mySpan2").innerHTML = mytable;
	
}