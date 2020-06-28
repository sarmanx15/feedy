function loaderInit() {
	"use strict";
	$('#loadSwitchDiv').removeClass('bg-camp').addClass('bg-secondary text-white');
	$('#loadSwitch').removeClass('fe fe-layout').addClass('far fa-spinner-third fa-spin');
}

$("#alertSlide").fadeTo(2000, 500).slideUp(500, function(){
	"use strict";
	$("#alertSlide").slideUp(500);
});

$("#alertSlideSlow").fadeTo(2000, 1000).slideUp(1000, function(){
	"use strict";
	$("#alertSlideSlow").slideUp(1000);
});

$("#copy-to-clipboard").on("click", function(){
	"use strict";
	$('#copy-to-clipboard').html('<i class="fe fe-check mr-2"></i> Copied to clipboard!');
	setTimeout(function(){ $('#copy-to-clipboard').html('<i class="fe fe-copy mr-2"></i> Copy Code'); }, 2000);
});

$("#copy-page-clipboard").on("click", function(){
	"use strict";
	$('#copy-page-clipboard').html('<i class="fe fe-check mr-2"></i> Copied!');
	setTimeout(function(){ $('#copy-page-clipboard').html('<i class="fe fe-copy mr-2"></i> Copy URL'); }, 2000);
});

if ( window.history.replaceState ) {
	window.history.replaceState( null, null, window.location.href );
}

var clipboard = new Clipboard('.copy-to-clipboard');
var clipboard = new Clipboard('.copy-page-clipboard');

var loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function () {
	"use strict";
	if (!this.classList.contains('btn-loading')) {
		this.classList.add('btn-loading');
		this.classList.add('disabled');
	}
});
