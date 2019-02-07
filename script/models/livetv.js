// Author: Kevin Wilcox
// Modifed: 02/06/2019
// The Paradigm Grid
// --------------------------------------------

function LiveTv() {
	this.total = 0;
	this.count = 0;
	
	this.startIndex;
	this.currentIndex;
	this.limit;
	this.scroll;
	this.totalRecordCount;
	
	this.id;
	this.lostfocus;
};

LiveTv.prototype.close = function() {

};

LiveTv.prototype.close = function() {
	dom.remove("#collectionIndex");
	dom.remove("playerBackdrop")
	dom.off("#view", "scroll", this.scroll);
	dom.off("body","keydown", this.lostfocus);
}
LiveTv.prototype.load = function(backstate, settings) {
	settings = settings || {};
	
	var self = this;
	this.total = 5;
	this.count = 0;

	this.limit = settings.limit || 50;
	this.startIndex = 0;
    var scrollLeft = 0;	
	var columnLast = 0;
	var columnWidth = 0;
	var columnLimit = Math.floor(this.limit / 2);
	var menuWidth = 0;	
	var columnViewportCount = 0;
	var indexCurrent = "";
	
	this.id = guid.create();
	var token = guid.create();	

	
	
	dom.hide("#server");
	dom.hide("#user");
	dom.show("#details")
	dom.show("#homeLink");

	self.close()
	
	dom.css("#poster", {
		backgroundImage: "url(./images/generic-backdrop.png)"
	});
	
	dom.html("#view", {
		nodeName: "div",
		className: "collection-view",
		id: "collection",
		childNodes: [{
			nodeName: "div",
			className: "user-views-column",
			id: "userViews_0"
		}]
	});	

	dom.append("body", {
		nodeName: "div",
		id: "collectionIndex",
		className: "collection-index",
		dataset: {lastFocus: "#index-1"},
		childNodes: [{
			nodeName: "a",
			id: "index-1",
			className: "index-item",
			text: "#",
			href: "#",
			dataset: {
				index: "sym"
			}
		}, {
			nodeName: "a",
			id: "index-2",			
			className: "index-item",
			text: "A",
			href: "#",
			dataset: {
				index: "A"
			}
		}, {
			nodeName: "a",
			id: "index-3",
			className: "index-item",
			text: "B",
			href: "#",
			dataset: {			
				index: "B"
			}
		}, {
			nodeName: "a",
			id: "index-4",
			className: "index-item",
			text: "C",
			href: "#",
			dataset: {				
				index: "C"
			}
		}, {
			nodeName: "a",
			id: "index-5",
			className: "index-item",
			text: "D",
			href: "#",
			dataset: {				
				index: "D"
			}
		}, {
			nodeName: "a",
			id: "index-6",
			className: "index-item",
			text: "E",
			href: "#",
			dataset: {				
				index: "E"
			}
		}, {
			nodeName: "a",
			id: "index-7",
			className: "index-item",
			text: "F",
			href: "#",
			dataset: {				
				index: "F"
			}
		}, {
			nodeName: "a",
			id: "index-8",
			className: "index-item",
			text: "G",
			href: "#",
			dataset: {				
				index: "G"
			}
		}, {
			nodeName: "a",
			id: "index-9",
			className: "index-item",
			text: "H",
			href: "#",
			dataset: {				
				index: "H"
			}
		}, {
			nodeName: "a",
			id: "index-10",
			className: "index-item",
			text: "I",
			href: "#",
			dataset: {				
				index: "I"
			}
		}, {
			nodeName: "a",
			id: "index-11",
			className: "index-item",
			text: "J",
			href: "#",
			dataset: {					
				index: "J"
			}
		}, {
			nodeName: "a",
			id: "index-12",
			className: "index-item",
			text: "K",
			href: "#",
			dataset: {				
				index: "K"
			}
		}, {
			nodeName: "a",
			id: "index-13",
			className: "index-item",
			text: "L",
			href: "#",
			dataset: {				
				index: "L"
			}
		}, {
			nodeName: "a",
			id: "index-14",
			className: "index-item",
			text: "M",
			href: "#",
			dataset: {
				index: "M"
			}
		}, {
			nodeName: "a",
			id: "index-15",
			className: "index-item",
			text: "N",
			href: "#",
			dataset: {
				index: "N"
			}
		}, {
			nodeName: "a",
			id: "index-16",
			className: "index-item",
			text: "O",
			href: "#",
			dataset: {
				index: "O"
			}
		}, {
			nodeName: "a",
			id: "index-17",
			className: "index-item",
			text: "P",
			href: "#",
			dataset: {
				index: "P"
			}
		}, {
			nodeName: "a",
			id: "index-18",
			className: "index-item",
			text: "Q",
			href: "#",
			dataset: {
				index: "Q"
			}
		}, {
			nodeName: "a",
			id: "index-19",
			className: "index-item",
			text: "R",
			href: "#",
			dataset: {
				index: "R"
			}
		}, {
			nodeName: "a",
			id: "index-20",
			className: "index-item",
			text: "S",
			href: "#",
			dataset: {
				index: "S"
			}
		}, {
			nodeName: "a",
			id: "index-21",
			className: "index-item",
			text: "T",
			href: "#",
			dataset: {
				index: "T"
			}
		}, {
			nodeName: "a",
			id: "index-22",
			className: "index-item",
			text: "U",
			href: "#",
			dataset: {
				index: "U"
			}
		}, {
			nodeName: "a",
			id: "index-23",
			className: "index-item",
			text: "V",
			href: "#",
			dataset: {
				index: "V"
			}
		}, {
			nodeName: "a",
			id: "index-24",
			className: "index-item",
			text: "W",
			href: "#",
			dataset: {
				index: "W"
			}
		}, {
			nodeName: "a",
			id: "index-25",
			className: "index-item",
			text: "X",
			href: "#",
			dataset: {
				index: "X"
			}
		}, {
			nodeName: "a",
			id: "index-26",
			className: "index-item",
			text: "Y",
			href: "#",
			dataset: {
				index: "Y"
			}
		}, {
			nodeName: "a",
			id: "index-27",
			className: "index-item",
			text: "Z",
			href: "#",
			dataset: {
				index: "Z"
			}
		}]
	})

	this.lostfocus = dom.on("body", "keydown", lostFocus);
			
	dom.delegate("#collection", "a.latest-item", "click", function(event) {
		event.stopPropagation()
		event.preventDefault()
		prefs.lastItemIndex = event.delegateTarget.dataset.index;
		prefs.lastItemPosition = document.getElementById("view").scrollLeft;
		dom.dispatchCustonEvent(document, "mediaItemSelected", event.delegateTarget.dataset);
	});	

	dom.delegate("#collection", "a.latest-items-more", "click", function(event) {
		event.stopPropagation()
		event.preventDefault()
		dom.dispatchCustonEvent(document, "userViewMoreSelected", event.delegateTarget.dataset);
	});	

	dom.delegate("#collection", "a", "keydown", navigation);
	
	dom.on("#collectionIndex a", "click", scrollToIndex);
	
	dom.on("#collectionIndex a", "keyup", scrollToIndex);
	
	dom.on("#collectionIndex a", "keydown", indexNavigation);

	var today = new Date().toISOString()
	emby.getLiveTvPrograms({
		limit: 500,
		HasAired: 'false',
		MaxStartDate: today,
		success: displayUserItems,
		error: error				
	});

	function displayUserItems(data) {
		// get in-progress shows and remove duplicates.
		var today = new Date().toISOString()
		var newdata = {
			Items:[],
			TotalRecordCount:0
		}
		for (var x = 0; x < data.Items.length-1;x++)
			if (data.Items[x].StartDate < today && data.Items.length && data.Items[x].Name != data.Items[x+1].Name)
				newdata.Items.push(data.Items[x])
        newdata.TotalRecordCount = newdata.Items.length;

		//sort by first char of name
		var length = newdata.Items.length;
	    var temp;
	    for (var j = 0; j < length; j++)
	        for (var i=0; i < (length - j - 1); i++)
	            if (newdata.Items[i].Name[0] > newdata.Items[i+1].Name[0])
	            {
	               temp = newdata.Items[i];
	               newdata.Items[i] = newdata.Items[i+1];
	               newdata.Items[i+1] = temp;
	            }
	    	
		
/*
		playerpopup.show({
			duration: 2000,
			text: newdata.Items.length+" "+newdata.Items[0].Name
		});	
*/		
		
		var id = guid.create();	
									
		if (newdata.Items.length > 0) {					
			renderer.userAllTvItems(newdata, {
				container: "#collection",
				id: id,
				heading: "On Now",
				headerLink: "#homeLink a",
				more: false
			});
		}	
			
		if (backstate == false || prefs.lastItemIndex == null)
            focus(".latest-item");
		else
			restoreCollectionFocus();
	}

	function restoreCollectionFocus(){
		var elmnts = dom.querySelectorAll(".latest-item")
		for(var idx = 0;idx<elmnts.length;idx++)
			if (elmnts[idx].dataset.index == prefs.lastItemIndex)
			{	
				highlightIndex(elmnts[idx].dataset.name.substring(0,1))
				dom.focus(elmnts[idx]);
				break;
			}
		document.getElementById("view").scrollLeft = prefs.lastItemPosition;
		prefs.lastItemIndex = prefs.lastItemPosition = null;
	}

	function lostFocus(event) {
		if (dom.exists("#screenplaySettings") || dom.exists("#player") || dom.exists("#validaterequest"))
			return;
		if (event.target.tagName != "A") {
			focus(dom.data("#view", "lastFocus"));
		}
	}

	function navigation(event) {
		event.preventDefault();
		var self = event.delegateTarget;

		if (event.which == keys.KEY_OK) {
			event.stopPropagation();
			self.click();
			return;
		}
				
		if (dom.hasClass(self, "user-views-item")) {	
			switch (event.which) {
				case keys.KEY_LEFT: 
					focus(dom.data(self, "keyLeft"));
					break;
				case keys.KEY_UP: 
					focus(dom.data(self, "keyUp"));
					break;
				case keys.KEY_RIGHT: 
					focus(".column-0 a");
					break;
				case keys.KEY_DOWN: 
					var down = dom.data(self, "keyDown");
					focus(down == "%index%" ? dom.data("#collectionIndex", "lastFocus") : down);
					break;											
			}
		}
		
		if (dom.hasClass(self, "latest-item")) {	
			var columnSetIndex = this.parentNode.parentNode.id ? parseInt(self.parentNode.parentNode.id.substr(self.parentNode.parentNode.id.lastIndexOf("_") + 1)) : 0;
			var lastColumn = columnSetIndex > 0 ? dom.data("#latestItemSet_" + (columnSetIndex - 1), "lastColumn") : "";

			switch (event.which) {
				case keys.KEY_LEFT: 
					focus(dom.data(self, "keyLeft").replace("%previous%", columnSetIndex > 0 ? "#latestItemSet_" + (columnSetIndex - 1) +  " .latest-items-column-" + lastColumn + " a" : ".user-views .user-views-column:last-child a"));
					break;
				case keys.KEY_UP: 
					focus(dom.data(self, "keyUp"));
					break;
				case keys.KEY_RIGHT: 
					focus(dom.data(self, "keyRight").replace("%next%", "#latestItemSet_" + (columnSetIndex + 1) +  " .latest-items-column a"));
					break;
				case keys.KEY_DOWN: 
					var down = dom.data(self, "keyDown");
					focus(down == "%index%" ? dom.data("#collectionIndex", "lastFocus") : down);
					break;																	
			}
		}		
	}

	function indexNavigation(event) {
		event.preventDefault();
		//event.stopPropagation();
				
		if (event.which == keys.KEY_OK) {
			this.click();
			return;
		}
				
		var index = Number(this.id.substr(6));
	
		switch (event.which) {
			case keys.KEY_LEFT: 
				indexFocus("#index-" + (index-1));
				break;
			case keys.KEY_UP: 
				collectionFocus();
				break;
			case keys.KEY_RIGHT: 
				indexFocus("#index-" + (index+1));
				break;										
		}
	}
	
	function scrollToIndex(event) {
		event.stopPropagation()
		event.preventDefault()
		var index = event.currentTarget.dataset.index;
		if (index == 'sym')
			index = ' ';
		self.currentIndex = index;
		var scrollpos = 0;
		dom.data("#collectionIndex", "lastFocus", "#collectionIndex a[data-index='" + index + "']");

		var elmnts = Array.prototype.slice.call(dom.querySelectorAll(".latest-items-column-abs"),0);
        for(var a=0;a<elmnts.length;a++)
        	if (elmnts[a].dataset.index == 'sym')
        		elmnts[a].dataset.index = ' ';
		for (var x=0;x<elmnts.length && elmnts[x].dataset.index < index;x++)
			scrollpos = elmnts[x].dataset.location;
		var view = dom.querySelector("#view");
        view.scrollLeft = scrollpos;			
		
	}
	
	function focus(query) {
		var node = dom.focus(query);
		if (node && node.id) {
			if (node.classList.contains("latest-item") || node.classList.contains("user-views-item")) {
				dom.data("#view", "lastFocus", "#" + node.id);
			}
			if (dom.hasClass(node, "latest-item")) {
				var year = dom.data(node, "year") || "";
				var runtime = Number(dom.data(node, "runtime")) || 0;
				var hours = (runtime >= 60 ? Math.floor(runtime/60) + " hr " : "");
				var mins = (runtime % 60 > 0 ? runtime % 60 + " min" : "");
												
				dom.html("#details", {
					nodeName: "div",
					childNodes: [{
						nodeName: "div",
						className: "title",
						text: dom.data(node, "name")
					}, {
						nodeName: "div",
						className: "subtitle",
						text: year + (runtime ? " / " + hours + mins : "")		
					}]
				});
				
				var index = dom.data(node.parentNode, "index");
				if (index != indexCurrent) {
					highlightIndex(index);
					indexCurrent = index;
				}
			} else {
				dom.empty("#details");
			}			
		}
	}

	function error(data) {
		complete();
		message.show({
			messageType: message.error,			
			text: "Loading user livetv summary failed!"
		});			
	}			
	function highlightIndex(index) {
		dom.removeClass(".index-item", "index-current");
		if (index == ' ')
			index = 'sym';
		if (index == "sym") {
			dom.addClass("#index-1", "index-current");
			dom.data("#collectionIndex", "lastFocus", "#index-1");
		} else {
			dom.addClass("#collectionIndex a[data-index='" + index + "']", "index-current");
			dom.data("#collectionIndex", "lastFocus", "#collectionIndex a[data-index='" + index + "']");	
		}
		self.currentIndex = index;
	}
	
	function indexFocus(query) {
		var node = dom.focus(query);
		if (node && node.id) {
			if (node.classList.contains("index-item")) {
				dom.data("#collectionIndex", "lastFocus", "#" + node.id);
			}
			if (dom.hasClass(node, "latest-item")) {
				var year = dom.data(node, "year") || "";
				var runtime = dom.data(node, "runtime") || "";
				var hours = (runtime >= 60 ? Math.floor(runtime/60) + " hr " : "");
				var mins = (runtime % 60 > 0 ? runtime % 60 + " min" : "");
												
				dom.html("#details", {
					nodeName: "div",
					childNodes: [{
						nodeName: "div",
						className: "title",
						text: dom.data(node, "name")
					}, {
						nodeName: "div",
						className: "subtitle",
						text: year + (runtime ? " / " + hours + mins : "")			
					}]
				});
			} else {
				dom.empty("#details");
			}			
		}
	}
					
	function collectionFocus() {
		// sort it
		var elmnts = Array.prototype.slice.call(dom.querySelectorAll(".latest-items-column-abs"),0);
        for(var a=0;a<elmnts.length;a++)
        	if (elmnts[a].dataset.index == 'sym')
        		elmnts[a].dataset.index = ' ';
		var length = elmnts.length;
	    var temp;
	    for (var j = 0; j < length; j++)
	        for (var i=0; i < (length - j - 1); i++)
	            if (parseInt(elmnts[i].dataset.location,10) > parseInt(elmnts[i+1].dataset.location,10))
	            {
	               temp = elmnts[i];
	               elmnts[i] = elmnts[i+1];
	               elmnts[i+1] = temp;
	            }
	    	
	    // find match
	    var index = self.currentIndex;
	    var node,idx,lastidx;
		if (index == "sym")
			index = ' ';
	    for(idx = 0; idx < elmnts.length && elmnts[idx].dataset.index < index; idx++)
	        lastidx = idx;
	    if (lastidx == null){
		    node = dom.querySelector("#"+elmnts[0].id.substring(2)+"_0")
	    }
	    else	    
		if (idx < elmnts.length && elmnts[idx].dataset.index == index)
		{
			if (idx > 0)
			{
		        node = dom.querySelector("#"+elmnts[idx-1].id.substring(2)+"_1")
		        if (node.dataset.name.substring(0,1) != index)
			        node = dom.querySelector("#"+elmnts[idx].id.substring(2)+"_0")
			}
			else
		        node = dom.querySelector("#"+elmnts[idx].id.substring(2)+"_0")
		}
		else
		{
	        node = dom.querySelector("#"+elmnts[lastidx].id.substring(2)+"_1")
		    if (!node || node.dataset.name.substring(0,1) > index)
		        node = dom.querySelector("#"+elmnts[lastidx].id.substring(2)+"_0")
		}
		   
		if (node){
		    node.focus();
		}
		else
		{
			playerpopup.show({
				duration: 2000,
				text: "There are no items in this collection"
			});	
		}

		if (node && node.id) {
			if (node.classList.contains("index-item")) {
				dom.data("#collectionIndex", "lastFocus", "#" + node.id);
			}
			if (dom.hasClass(node, "latest-item")) {
				var year = dom.data(node, "year") || "";
				var runtime = dom.data(node, "runtime") || "";
				var hours = (runtime >= 60 ? Math.floor(runtime/60) + " hr " : "");
				var mins = (runtime % 60 > 0 ? runtime % 60 + " min" : "");
												
				dom.html("#details", {
					nodeName: "div",
					childNodes: [{
						nodeName: "div",
						className: "title",
						text: dom.data(node, "name")
					}, {
						nodeName: "div",
						className: "subtitle",
						text: year + (runtime ? " / " + hours + mins : "")			
					}]
				});
			} else {
				dom.empty("#details");
			}			
		}
	}
};