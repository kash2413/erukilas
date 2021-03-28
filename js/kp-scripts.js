	function prepareComponents() {
		if($('.components').find('ul').find('li').length > 0) {
			var text = $('.components').find('ul').find('li').html();
			var cp = text.split('\n');
			var header = "[n]";
			console.log(cp);
			$('.components').find('ul').empty();
			for(var i = 0; i < cp.length; i++) {
				if(cp[i].indexOf(header) == 0) {
					cp[i] = cp[i].substring(3);
					$('<li class="header">'+$.trim(cp[i])+'</li>').appendTo('.components ul');
				}
				else {
					$('<li>'+cp[i]+'</li>').appendTo('.components ul');
				}
				
			}
		}
	}

	$(document).ready(function(){
		prepareComponents();
	});